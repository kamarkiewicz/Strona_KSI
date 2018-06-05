<template>
  <div class="home-carousel pb-5 text-white bg-secondary">
    <div class="container">
      <div class="row">
        <div class="align-self-center p-5 col-md-6">
          <h1 class="mb-4">{{ title }}</h1>
          <p class="mb-5">{{ desc }}</p>
          <a class="btn btn-lg btn-outline-light" href="#">{{ linkDesc }}</a>
        </div>
        <div class="col-md-6 p-0">
          <b-carousel id="carousel1"
                      style="text-shadow: 1px 1px 2px #333;"
                      controls
                      indicators
                      background="#ababab"
                      :interval="4000"
                      img-width="500"
                      img-height="500"
                      v-model="slide"
                      @sliding-start="onSlideStart"
                      @sliding-end="onSlideEnd"
          >
            <b-carousel-slide v-for="(el, index) in slides" :key="`slide-${index}`"
                              :caption="el.caption"
                              :text="el.description"
                              :img-src="el.image.path"
            ></b-carousel-slide>
          </b-carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    slides: {
      type: Array,
      required: true
    },
  },
  data () {
    return {
      title: 'Zobacz na własne oczy!',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      linkDesc: 'Przejdź do galerii',

      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  },
}
</script>

<style lang="scss">
.home-carousel {
  padding-top: 10em;
}
</style>
