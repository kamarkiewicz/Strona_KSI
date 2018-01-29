import Vue from 'vue'
import Router from 'vue-router'

import HomeComponent from '@/components/Home'
import GalleryComponent from '@/components/Gallery'
import ArticleComponent from '@/components/Article'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/gallery', name: 'GalleryComponent', component: GalleryComponent },
    { path: '/', name: 'HomeComponent', component: HomeComponent },
    { path: '/article', name: 'ArticleComponent', component: ArticleComponent }
  ]
})
