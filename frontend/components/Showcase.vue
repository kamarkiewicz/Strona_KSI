<template>
  <section class="showcase wrapper">
    <div class="container py-5">

      <div class="row mb-5" v-for="(el, index) in entries" :key="el.id">
        <div class="col-md-5 align-self-center"
            :class="{ 'order-md-2': index % 2 === 0 }">
          <img class="img-fluid d-block mb-4 w-100 img-thumbnail" :src="el.image.path">
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

<style lang="scss" scoped>
@import '~assets/scss/utils';

$bg-color: #ffffff;

.showcase {
  background-color: $bg-color;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: -5em;

    width: 100%;
    height: 5em;

    @include bg-triangle($bg-color);
    transform: translateY(0) rotate(0) scaleX(-1);
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;

    width: 100%;
    height: 5em;

    @include bg-triangle($bg-color);
    transform: translateY(100%) rotate(180deg); // scaleX(-1);
  }
}
</style>
