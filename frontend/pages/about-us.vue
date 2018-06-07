<template>
  <section class="history-page bg-light">
    <div class="container py-5">
      <header class="accented">
        <p class="text-primary text-uppercase font-weight-bold mb-1" v-text="subtitle"></p>
        <h2 class="text-secondary pb-3" v-text="title"></h2>
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
  data () {
    return {
      subtitle: "Quibusdam dicentibus",
      title: "Alii sementem faciunt, alii metunt",
    }
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
      title: 'O nas',
    }
  }
}
</script>
