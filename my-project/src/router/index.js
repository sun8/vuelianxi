import Vue from 'vue'
import Router from 'vue-router'
import header from '@/components/header'
import cont from '@/components/cont'
import footer from '@/components/footer'

Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
    {
      path: '/',
      components: {
        default: header,
        a: cont,
        b: footer
      }
    }
  ]
})
