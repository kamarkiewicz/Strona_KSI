<template>
  <section class="showcase bg-white">
    <div class="container">

      <div class="row pt-4" v-for="(el, index) in entries" :key="el.id">
        <div class="col-md-5 align-self-center"
            :class="{ 'order-md-2': index % 2 === 0 }">
          <img class="img-fluid d-block mb-4 w-100 img-thumbnail" :src="el.image.src" :alt="el.image.title">
        </div>
        <div class="col-md-7">
          <h2 class="text-primary pt-3" v-text="el.title"></h2>
          <p class="description" v-text="el.description"></p>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import { Image } from '~/assets/js/utils'

export default {
  props: {
    entries: {
      type: Array,
      required: true
    },
  },
}
</script>
