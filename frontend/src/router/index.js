import Vue from 'vue'
import Router from 'vue-router'

import HomeComponent from '@/components/Home'
import GalleryComponent from '@/components/Gallery'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/gallery', name: 'GalleryComponent', component: GalleryComponent },
    { path: '/', name: 'HomeComponent', component: HomeComponent }
  ]
})
