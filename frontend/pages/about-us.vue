<template>
  <section class="history-page pt-5 pb-slant bg-light">

    <div class="container">
      <header class="accented pb-5">
        <p class="text-primary text-uppercase font-weight-bold mb-1" v-text="$t('aboutUs.subtitle')"></p>
        <h2 class="text-secondary pb-3" v-text="$t('aboutUs.title')"></h2>
      </header>
    </div>

    <timeline :entries="entries" />

  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Timeline from '~/components/Timeline'

export default {
  components: {
    Timeline
  },
  computed: {
    ...mapGetters({
      entries: 'history/entries',
    }),
  },
  async fetch ({ app, store }) {
    await store.dispatch('history/getEntries', { axios: app.$axios })
  },
  head () {
    return {
      title: this.$t('general.aboutUs'),
    }
  }
}
</script>
