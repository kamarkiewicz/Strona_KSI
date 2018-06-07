<template>
  <section class="home-news pb-3 bg-light">

    <div class="container pt-5 pb-4">
      <h2 class="text-primary" v-text="$t('general.news')"></h2>
    </div>

    <section class="container px-5 pb-5">
      <div class="row">
        <div class="col-lg-4 pr-3 pb-5" v-for="el in news" :key="el.id">
          <preview-card
            :image="el.image"
            :date="el.date"
            :title="el.title"
            :excerpt="el.excerpt"
            :link="localePath({ name: 'news-article', params: { article: el.link }})"
            linkText="Czytaj więcej" />
        </div>
      </div>
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
      type: Array, // must contain max 3 entries
      required: true
    },
  },
}
</script>
