<template>
  <section class="history-page bg-light">
    <div class="container py-5">
      <header class="major">
        <p>{{ subtitle }}</p>
        <h2>{{ title }}</h2>
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

<style lang="scss" scoped>

$subheadtitle-color: #00a6d9;

.history-page {
  header.major {
    p {
      color: $subheadtitle-color;
      font-weight: 700;
      margin-bottom: 0.25em;
      text-transform: uppercase;
    }
    &::after {
      content: '';
      display: block;
      border-bottom: 1px solid #dadada;
      width: 8em;
      height: 1em;
    }
    margin-bottom: 2.25em;
  }
}
</style>
