<template>
  <section class="news-page pt-5 pb-slant bg-light">

    <div class="container pb-4">
      <header>
        <h2 class="text-primary pb-4" v-text="$t('news.title')"></h2>
        <p class="text-secondary" v-text="$t('news.description')"></p>
      </header>
    </div>

    <section class="container">
      <div class="row equal" v-for="(chunk, index) in entryChunks" :key="`chunk-${index}`">
        <div class="col-md-12 col-lg-6 p-3" v-for="el in chunk" :key="el.id">
          <preview-card
            :image="el.image"
            :date="el.date"
            :title="el.title"
            :excerpt="el.excerpt"
            :link="localePath({ name: 'news-article', params: { article: el.link }})"
            :linkText="$t('news.moreLink')" />
        </div>
      </div>

      <b-pagination class="pt-4" align="center"
        :total-rows="totalRows"
        v-model="currentPage"
        :per-page="perPage" />
    </section>

  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import _ from 'lodash'
import PreviewCard from '~/components/PreviewCard'

export default {
  components: {
    PreviewCard,
  },
  data () {
    return {
      currentPage: 1,
      perPage: 4,
    }
  },
  computed: {
    ...mapGetters({
      entries: 'news/entries',
      totalRows: 'news/entriesCount',
    }),
    entryChunks () {
      return _.chunk(this.entries, 2)
    },
  },
  async fetch ({ app, store }) {
    await store.dispatch('news/getEntries', { axios: app.$axios })
  },
  head () {
    return {
      title: this.$t('general.news'),
    }
  }
}
</script>
