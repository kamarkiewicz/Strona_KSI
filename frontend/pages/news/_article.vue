<template>
  <div class="article-page pb-slant">
    <article class="container my-5">
      <header class="py-3 accented">
        <time class="text-primary font-weight-bold" v-text="$d(entry.date)"></time>
        <h1 class="text-secondary pt-2 pb-3" v-text="entry.title"></h1>
      </header>
      <div v-if="entry.image.src" class="image text-center py-4">
        <b-img :src="entry.image.src" :alt="entry.image.title" class="rounded" fluid />
      </div>
      <div v-html="entry.excerpt" class="font-weight-bold" id="excerpt"></div>
      <hr/>
      <div v-html="entry.content" class="pb-4" id="content"></div>
    </article>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      entry: 'news/entry',
    })
  },
  fetch ({ app, params, store, error }) {
    const ctx = { axios: app.$axios, slug: params.article }
    return Promise.all([
      store.dispatch('news/getSingle', ctx),
      store.dispatch('news/getLocalSlugs', ctx)
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
      const slug = that.$store.getters['news/localSlugs'][locale]
      return that.localePath({ name: 'news-article', params: { article: slug }}, locale)
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
