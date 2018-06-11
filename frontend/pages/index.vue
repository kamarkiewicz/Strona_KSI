<template>
  <div class="home-page">

    <home-news class="pb-slant" :news="news" />

    <showcase class="slant-in-both" :entries="entries" />

    <home-carousel class="pt-slant pb-slant" :slides="slides" />

  </div>
</template>

<script>
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
      return this.$store.getters['homepage'].showcase
    },
    slides () {
      return this.$store.getters['homepage'].slides
    },
  },
  async fetch ({ app, store }) {
    await store.dispatch('news/getEntries', { axios: app.$axios })
    await store.dispatch('getHomepage', { axios: app.$axios })
  },
  head () {
    return {
      title: this.$t('general.homepage'),
    }
  }
}
</script>
