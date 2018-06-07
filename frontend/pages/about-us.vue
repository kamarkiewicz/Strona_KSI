<template>
  <section class="history-page py-5 bg-light">

    <div class="container">
      <header class="accented pb-5">
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
