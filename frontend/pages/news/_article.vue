<template>
  <div>
    <article class="container my-5">
      <div class="article-header">
        <p class="text-primary"> {{ $d(entry.date) }} </p>
        <h1>{{ entry.title }}</h1>
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
    await store.dispatch('news/getSingle', { axios: app.$axios, slug: params.article })
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

