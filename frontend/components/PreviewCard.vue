<template>
  <div class="preview-card card rounded border-0">
    <img class="card-img-top rounded-top" v-if="image.path" :src="image.path" :alt="image.title">
    <img class="card-img-top rounded-top" v-else src="http://via.placeholder.com/505x295" alt="placeholder">
    <div class="card-body">
      <h6 class="card-subtitle mb-2 text-muted" v-if="date" v-text="$d(date)"></h6>
      <h5 class="card-title" v-text="title"></h5>
      <div class="card-text" v-html="excerpt"></div>
      <nuxt-link class="card-link" :to="link" v-text="linkText"></nuxt-link>
    </div>
  </div>
</template>

<script>
import { Image } from '~/assets/js/utils'

export default {
  props: {
    image: {
      type: Image,
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
$link-color: #00a6d9;
$linkicon-border: rgba($content-color, 0.125);

.preview-card {
  background-color: $article-color;
  box-shadow: 0 1em 5em rgba(0, 0, 0, 0.07);

  .card-title {
    color: $headtitle-color;
    font-weight: 400;
  }

  .card-link {
    color: $link-color;
    text-decoration: none;
    letter-spacing: 0.125rem;
    text-transform: uppercase;

    &:before {
      border-radius: 100%;
      border: solid 2px $linkicon-border;
      content: '\f105';
      display: inline-block;
      font-size: 1.25rem;
      width: 2rem;
      height: 2rem;
      line-height: 1.65rem;
      margin-right: 0.85rem;
      text-align: center;
      text-indent: 0.15rem;
      vertical-align: middle;

      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      font-family: FontAwesome;
      font-style: normal;
      font-weight: normal;
    }
  }
}

</style>
