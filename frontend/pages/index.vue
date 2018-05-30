<template>
  <div class="home">

    <home-news :news="news" />

    <showcase />

    <home-carousel/>

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
  },
  async fetch ({ app, store }) {
    await store.dispatch('news/getEntries', { axios: app.$axios })
  },
}
</script>
