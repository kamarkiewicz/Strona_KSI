<template>
  <div class="home-page">

    <home-news class="pb-slant" :news="news.slice(0, 3)" />

    <showcase class="slant-in-both" :entries="homepage.showcase" />

    <home-carousel class="pt-slant pb-slant" :slides="homepage.slides" />

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
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
    ...mapGetters({
      news: 'news/entries',
      homepage: 'homepage',
    }),
  },
  fetch ({ app, store }) {
    const ctx = { axios: app.$axios }
    return Promise.all([
      store.dispatch('news/getEntries', ctx),
      store.dispatch('getHomepage', ctx)
    ])
  },
  head () {
    return {
      title: this.$t('general.homepage'),
    }
  }
}
</script>
