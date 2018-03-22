<template>
  <div class="py-5 text-white bg-secondary">
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
            <b-carousel-slide v-for="slide in slides" :key="slide.id"
                              :caption="slide.caption"
                              :text="slide.text"
                              :img-src="slide.imgSrc"
            ></b-carousel-slide>
          </b-carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Zobacz na własne oczy!',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      linkDesc: 'Przejdź do galerii',
      slides: [
        { id: 1,
          caption: 'First slide',
          text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
          imgSrc: 'https://picsum.photos/500/500?image=1033'
        },
        { id: 2,
          caption: 'Second slide',
          text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
          imgSrc: 'https://picsum.photos/500/500?image=1060'
        },
        { id: 3,
          caption: 'Third slide',
          text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
          imgSrc: 'https://picsum.photos/500/500?image=1059'
        }
      ],

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
  }
}
</script>

<style scoped>
</style>
