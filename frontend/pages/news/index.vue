<template>
  <section class="news-page py-5 bg-light">

    <div class="container pb-4">
      <header>
        <h2 class="text-primary pb-4" v-text="$t('general.news')"></h2>
        <p class="text-secondary">Cras mattis ante fermentum, malesuada neque vitae, eleifend erat. Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.</p>
      </header>
    </div>

    <section class="container">
      <div class="row" v-for="(chunk, index) in entryChunks" :key="`chunk-${index}`">
        <div class="col-md-12 col-lg-6 p-3" v-for="el in chunk" :key="el.id">
          <preview-card
            :image="el.image"
            :date="el.date"
            :title="el.title"
            :excerpt="el.excerpt"
            :link="localePath({ name: 'news-article', params: { article: el.link }})"
            linkText="Czytaj więcej" />
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
