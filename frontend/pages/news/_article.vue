<template>
  <div>
    <article class="container my-5">
      <div class="article-header">
        <p class="text-primary"> {{ date }} </p>
        <h1>{{ title }}</h1>
      </div>
      <div v-if="image.path" class="image text-center mb-4">
        <b-img :src="image.path" alt="Featured image" class="rounded" fluid />
      </div>
      <div v-html="excerpt" class="font-weight-bold" id="excerpt"></div>
      <hr/>
      <div v-html="content" id="content"></div>
    </article>
  </div>
</template>

<script>
import { fetchSingleNews, getImage } from '~/assets/js/utils'

export default {
  async asyncData ({ app, params, store }) {
    const locale = store.state.i18n.locale
    const slug = params.article
    const entry = await fetchSingleNews(app.$axios, slug, locale)
    return {
      title: entry.title,
      date: new Date(entry._created * 1000),
      excerpt: entry.excerpt,
      content: entry.content,
      image: getImage(entry.image),
    }
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

