<template>
  <section class="news wrapper pb-3">

    <div class="container pt-5">
      <h2 class="major">{{ $t('general.news') }}</h2>
    </div>

    <section class="container px-5 pb-5">
      <b-row>
        <b-col lg="4" class="pr-3 pb-5" v-for="el in news" :key="el.id">
          <preview-card
            :image="el.image"
            :date="el.date"
            :title="el.title"
            :excerpt="el.excerpt"
            :link="localePath({ name: 'news-article', params: { article: el.link }})"
            linkText="Czytaj więcej" />
        </b-col>
      </b-row>
    </section>

  </section>
</template>

<script>
import { Image } from '~/assets/js/utils'
import PreviewCard from '~/components/PreviewCard.vue'

export default {
  components: {
    PreviewCard,
  },
  props: {
    news: {
      type: Array,
      required: true
    },
  },
}
</script>

<style lang="scss" scoped>

$bg-color: #f5f8fa;
$headtitle-color: #00a6d9;
$content-color: #637485;

.news {
  &.wrapper {
      background-color: $bg-color;
      color: $content-color;
      position: relative;
  }

  h1.major, h3.major, h4.major, h5.major, h6.major {
      border-bottom: solid 2px rgba(255, 255, 255, 0.125);
  }

  h3 {
      font-size: 1.2em;
  }

  h1, h2, h3, h4, h5, h6 {
      color: $headtitle-color;
      font-weight: 400;
      margin: 0 0 1em 0;
  }
}

</style>
