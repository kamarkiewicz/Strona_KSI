<template>
  <article class="preview-card card h-100 rounded border-0">
    <img class="card-img-top rounded-top" v-if="image.src" :src="image.src" :alt="image.title">
    <div class="card-body">
      <header>
        <h6 class="card-subtitle mb-2 text-muted" v-if="date" v-text="$d(date)"></h6>
        <h5 class="card-title" v-text="title"></h5>
      </header>
      <div class="card-text text-justify" v-html="excerpt"></div>
      <nuxt-link class="card-link pretty-link" :to="link" v-text="linkText"></nuxt-link>
    </div>
  </article>
</template>

<script>
import { Image } from '~/assets/js/utils'

export default {
  props: {
    image: {
      required: false
    },
    date: {
      type: [Date, Number],
      required: false
    },
    title: {
      type: String,
      required: true
    },
    excerpt: {
      type: String,
      required: false
    },
    link: {
      type: [String, Object],
      required: true
    },
    linkText: {
      type: String,
      required: true
    },
  },
}
</script>

<style lang="scss">

$headtitle-color: #00a6d9;
$article-color: #ffffff;
$content-color: #637485;

.preview-card {
  background-color: $article-color;
  box-shadow: 0 1em 5em rgba(0, 0, 0, 0.07);

  .card-title {
    color: $headtitle-color;
    font-weight: 400;
  }
}

</style>
