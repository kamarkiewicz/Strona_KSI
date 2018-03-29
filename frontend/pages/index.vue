<template>
  <div class="home">

    <home-news/>

    <showcase />

    <home-carousel/>

  </div>
</template>

<script>
import HomeNews from '~/components/HomeNews.vue'
import Showcase from '~/components/Showcase.vue'
import HomeCarousel from '~/components/HomeCarousel.vue'

export default {
  components: {
    HomeNews,
    Showcase,
    HomeCarousel
  }
}
</script>
