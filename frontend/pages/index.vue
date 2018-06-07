<template>
  <div class="home-page">

    <home-news class="pb-slant" :news="news" />

    <showcase class="slant-in-both" :entries="entries" />

    <home-carousel class="pt-slant pb-slant" :slides="slides" />

  </div>
</template>

<script>
import { Image } from '~/assets/js/utils'
import HomeNews from '~/components/HomeNews.vue'
import Showcase from '~/components/Showcase.vue'
import HomeCarousel from '~/components/HomeCarousel.vue'

export default {
  components: {
    HomeNews,
    Showcase,
    HomeCarousel
  },
  computed: {
    news () {
      return this.$store.getters['news/entries'].slice(0, 3)
    },
    entries () {
      return [
        {
          id: 1,
          title: 'O nas. Historia KSI',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          image: new Image('https://picsum.photos/270/180?image=985'),
          link: 'about-us',
        },
        {
          id: 2,
          title: 'Projekty',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          image: new Image('https://picsum.photos/270/180?image=986'),
          link: 'projects',
        },
        {
          id: 3,
          title: 'Członkowie',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          image: new Image('https://picsum.photos/270/180?image=987'),
          link: 'members',
        },
      ]
    },
    slides () {
      return this.$store.getters['slides']
    },
  },
  async fetch ({ app, store }) {
    await store.dispatch('news/getEntries', { axios: app.$axios })
    await store.dispatch('getSlides', { axios: app.$axios })
  },
  head () {
    return {
      title: 'Strona główna',
    }
  }
}
</script>
