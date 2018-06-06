<template>
  <div>
    <article class="container my-5">
      <div class="article-header">
        <p v-text="$d(entry.date)" class="text-primary"></p>
        <h1 v-text="entry.title"></h1>
      </div>
      <div v-if="entry.image.src" class="image text-center mb-4">
        <b-img :src="entry.image.src" alt="Featured image" class="rounded" fluid />
      </div>
      <div v-html="entry.excerpt" class="font-weight-bold" id="excerpt"></div>
      <hr/>
      <div v-html="entry.content" id="content"></div>
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
  async fetch ({ app, params, store }) {
    const ctx = { axios: app.$axios, slug: params.article }
    await Promise.all([
      store.dispatch('news/getSingle', ctx),
      store.dispatch('news/getLocalSlugs', ctx)
    ])
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
      title: this.title,
    }
  }
}
</script>

<style lang="scss" scoped>

.article-header{
   padding: 1vw 0 3vw 0;
 }
.article-header p{
  font-weight: 700;
  margin-bottom: 1vh !important;
}


h1::after{
  content: '';
  position: relative;
  bottom: -3vh;
	display: block;
	border-top: 1px solid #c9c9c9;
  width: 12vw;
}

.container p{
  margin-bottom: 1.5vh;
}

#content{
  padding: 0;
  margin-bottom: 10vh;

}

</style>

