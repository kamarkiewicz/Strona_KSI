<template>
  <section class="home-news bg-light">

    <header class="container pt-5 pb-4">
      <h2 class="text-primary" v-text="$t('general.news')"></h2>
    </header>

    <div class="container px-sm-5">
      <div class="row equal">
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
    </div>

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
