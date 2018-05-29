<template>
  <article class="preview-card">
    <a class="image" v-if="image">
      <img :src="image.path" alt="">
    </a>
    <h3 class="title">{{ $d(date) }} | {{ title }}</h3>
    <div v-html="excerpt" class="excerpt"></div>
    <a class="link" :href="link">{{ linkText }}</a>
  </article>
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
      required: true
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
      type: String,
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
$corner-rounding: 0.5em;

.preview-card {
  padding: 1.75em 1.75em 0.1em 1.75em;
  background-color: $article-color;
  border-radius: $corner-rounding;
  box-shadow: 0 1em 5em rgba(0, 0, 0, 0.05);

  .image {
    border-radius: $corner-rounding $corner-rounding 0 0;
    display: block;
    margin-bottom: 1.75em;
    margin-left: -1.75em;
    margin-top: -1.75em;
    width: calc(100% + 3.5em);

    img {
      border-radius: $corner-rounding $corner-rounding 0 0;
      width: 100%;
    }
  }

  .title {
    border-bottom: solid 2px rgba(255, 255, 255, 0.125);
    font-size: 1.2em;
    color: $headtitle-color;
    font-weight: 400;
    margin: 0 0 1em 0;
  }

  .link {
    transition: color 0.2s ease-in-out, border-bottom-color 0.2s ease-in-out;
    border-bottom: dotted 1px rgba(255, 255, 255, 0.35);
    color: $link-color;
    text-decoration: none;

    &:not(.button) {
      text-decoration: none;
      border-bottom: 0;
      display: block;
      font-size: 0.8em;
      font-weight: 700;
      letter-spacing: 0.1em;
      margin: 0 0 2em 0;
      text-transform: uppercase;
    }

    &:not(.button):before {
      transition: background-color 0.2s ease-in-out;
      border-radius: 100%;
      border: solid 2px $linkicon-border;
      content: '\f105';
      display: inline-block;
      font-size: 1.25em;
      height: 2em;
      line-height: 1.65em;
      margin-right: 0.85em;
      text-align: center;
      text-indent: 0.15em;
      vertical-align: middle;
      width: 2em;

      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      font-family: FontAwesome;
      font-style: normal;
      font-weight: normal;
    }
  }
}
</style>
