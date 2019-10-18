<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div>{{title}}</div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import md5 from 'js-md5'
import HelloWorld from '@/components/HelloWorld.vue'
import { getPodiumList, loginFunc } from '@/service/index'

export default {
  name: 'home',
  data() {
    return {
      userInfo: {},
      data: {}
    }
  },
  components: {
    HelloWorld
  },
  computed: {
    ...mapState(['title'])
  },
  async created() {
    try {
      let res = await loginFunc({
        userName: 'superAdmin',
        password: md5('administrator')
      })
      sessionStorage.setItem('userInfo', JSON.stringify(res.data.data))
      await this.insertUserInfo()
      this.data = await getPodiumList()
    } catch (error) {
      console.log('error =', error)
    }
  },
  methods: {
    ...mapActions(['getUserInfo', 'insertUserInfo'])
  }
}
</script>
