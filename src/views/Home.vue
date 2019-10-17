<template>
  <div class='home'>
    <img alt='Vue logo' src='../assets/logo.png' />
    <HelloWorld msg='Welcome to Your Vue.js App' />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { getTitle } from '@/service/index'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  async created() {
    try {
      let data = await getTitle({username: 'admin1', password: 'abc123'})
      console.log('data', data)
    } catch (error) {
      console.log('error =', error)
    }
  }
}
</script>
