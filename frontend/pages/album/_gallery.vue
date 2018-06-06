<template>
  <div class="container mt-5">
    <h4>{{ entry.album }}</h4>
    <h1>{{ entry.title }}</h1>
    <div class="gallery-container mt-4 mb-5">
      <a v-for="img in entry.images" :key="img.title" :href="img.src">
        <b-img class="img-fluid"
               :src="img.src"
               :width="img.width"
               :height="img.height"
               :alt="img.title" />
      </a>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      entry: 'album/entry',
    })
  },
  async fetch ({ app, params, store }) {
    const ctx = { axios: app.$axios, slug: params.gallery }
    await Promise.all([
      store.dispatch('album/getSingle', ctx),
      store.dispatch('album/getLocalSlugs', ctx)
    ])
  },
  mounted () {
    const that = this;
    this.$store.commit('SET_SWITCHLOCALEPATHIMPL', (locale) => {
      const slug = that.$store.getters['album/localSlugs'][locale]
      return that.localePath({ name: 'album-gallery', params: { gallery: slug }}, locale)
    })
  },
  destroyed () {
    this.$store.commit('SET_SWITCHLOCALEPATHIMPL', null)
  },
  head () {
    return {
      title: this.title,
    }
  }
}
</script>

<style lang="scss">
.gallery-container {
  min-height: 100vh;

  img {
    padding: 8px 0;
  }

  column-count: 1;

  @media (min-width: 720px) { // md
    column-count: 4;
  }
}
</style>
