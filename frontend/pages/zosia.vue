<template>
  <article class="zosia-page container px-5 pt-5 pb-slant hmin-stronaksi">
    <h2 class="text-primary pb-4">ZOSIA</h2>
    <div class="content" v-html="content"></div>
  </article>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['zosiaPage']),
    content () {
      return this.zosiaPage.content
    }
  },
  async fetch ({ app, store }) {
    await store.dispatch('getZosiaPage', { axios: app.$axios })
  },
  head () {
    return {
      title: 'ZOSIA',
    }
  }
}
</script>
