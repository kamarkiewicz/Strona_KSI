<template>
  <article class="privacy-page container px-5 pt-5 pb-slant hmin-stronaksi"
           v-html="content"
  ></article>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['privacyPage']),
    content () {
      return this.privacyPage.content
    }
  },
  async fetch ({ app, store }) {
    await store.dispatch('getPrivacyPage', { axios: app.$axios })
  },
  head () {
    return {
      title: 'Polityka prywatności',
    }
  }
}
</script>
