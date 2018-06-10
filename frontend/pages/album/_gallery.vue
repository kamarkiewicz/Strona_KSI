<template>
  <div class="container mt-5 pb-slant hmin-stronaksi">
    <h4>{{ entry.album }}</h4>
    <h1>{{ entry.title }}</h1>
    <div class="gallery-container mt-4 mb-5">
      <a v-for="(img, imgIndex) in images" :key="img.title"
         :href="img.href" @click.prevent="index = imgIndex">
        <b-img-lazy
          class="py-2 px-0" fluid
          :src="img.href"
          :width="img.width"
          :height="img.height"
          :alt="img.title" />
      </a>
    </div>

    <vue-gallery
      :images="images"
      :index="index"
      @close="index = null"
    ></vue-gallery>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      index: null,
    }
  },
  computed: {
    ...mapGetters({
      entry: 'album/entry',
    }),
    images () {
      return this.entry.images.map(image => ({
        href: image.src,
        description: '',
        title: image.title,
        width: image.width,
        height: image.height,
      }))
    },
  },
  fetch ({ app, params, store, error }) {
    const ctx = { axios: app.$axios, slug: params.gallery }
    return Promise.all([
      store.dispatch('album/getSingle', ctx),
      store.dispatch('album/getLocalSlugs', ctx)
    ])
    .catch(err => {
      if (err.name === 'EntryNotFound') {
        error({ statusCode: 404, message: 'There is no such entry' })
      } else {
        error({ statusCode: 500, message: err.message })
      }
    })
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
      title: this.entry.title,
    }
  }
}
</script>

<style lang="scss">
.gallery-container {
  column-count: 1;

  @media (min-width: 720px) { // md
    column-count: 4;
  }
}
</style>
