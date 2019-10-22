const HomePage = () => import(/* webpackChunkName:"home" */'@/views/HomePage.vue')
const About = () => import(/* webpackChunkName:"about" */'@/views/About.vue')

export default [
  {
    path: '/',
    name: 'HomePage',
    // redirect: '/home',
    component: HomePage,
    meta: {
      title: '首页'
    },
    children: [
      // {
      //   name: 'about',
      //   path: '/about',
      //   component: About,
      //   meta: {
      //     title: 'about'
      //   }
      // }
    ]
  },
  {
    name: 'about',
    path: '/about',
    component: About,
    meta: {
      title: 'about'
    }
  }
]
