<template>
  <section class="album-page pt-5 pb-slant bg-light">

    <div class="container pb-4">
      <header>
        <h2 class="text-primary pb-4" v-text="$t('album.title')"></h2>
        <p class="text-secondary" v-text="$t('album.description')"></p>
      </header>
    </div>

    <section class="container">
      <div class="row equal" v-for="(chunk, index) in entryChunks" :key="`chunk-${index}`">
        <div class="col-md-12 col-lg-6 p-3" v-for="el in chunk" :key="el.id">
          <preview-card
            :image="el.image"
            :title="el.title"
            :excerpt="el.description"
            :link="localePath({ name: 'album-gallery', params: { gallery: el.link }})"
            :linkText="$t('album.moreLink')" />
        </div>
      </div>
    </section>

  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import _ from 'lodash'
import PreviewCard from "~/components/PreviewCard.vue"

export default {
  components: {
    PreviewCard,
  },
  computed: {
    ...mapGetters({
      entries: 'album/entries',
      totalRows: 'album/entriesCount',
    }),
    entryChunks () {
      return _.chunk(this.entries, 2)
    },
  },
  async fetch ({ app, store }) {
    await store.dispatch('album/getEntries', { axios: app.$axios })
  },
  head () {
    return {
      title: this.$t('general.album'),
    }
  }
}
</script>
