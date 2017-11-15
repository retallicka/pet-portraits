import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/about',
      name: 'About the Artist',
      component: Hello
    },
    {
      path: '/cats',
      name: 'Cats',
      component: Hello
    },
    {
      path: '/dogs',
      name: 'Dogs',
      component: Hello
    },
    {
      path: '/other',
      name: 'Other Animals',
      component: Hello
    },
    {
      path: '/people',
      name: 'People',
      component: Hello
    }
  ]
})
