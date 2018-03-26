<template>
  <div class="container mt-5">
    <h4>{{album}}</h4>
    <h1>{{title}}</h1>
    <div class="gallery-container mt-4 mb-5">
      <a v-for="img in images" :key="img.id" :href="img.src">
        <b-img class="img-fluid"
               :src="img.src"
               :width="img.width"
               :height="img.height"
               alt="" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      album: 'Nazwa albumu',
      title: 'Tytuł przykładowej galerii',
      images: [
        { id: 1, src: 'https://picsum.photos/640/427?image=1021' },
        { id: 2, src: 'https://picsum.photos/640/1138?image=1022' },
        { id: 3, src: 'https://picsum.photos/640/427?image=1023' },
        { id: 4, src: 'https://picsum.photos/640/853?image=1024' },
        { id: 5, src: 'https://picsum.photos/640/427?image=1025' },
        { id: 6, src: 'https://picsum.photos/640/1138?image=1026' },
        { id: 7, src: 'https://picsum.photos/640/427?image=1027' },
        { id: 8, src: 'https://picsum.photos/640/853?image=1028' },
        { id: 9, src: 'https://picsum.photos/640/427?image=1029' },
        { id: 10, src: 'https://picsum.photos/640/427?image=1030' },
        { id: 11, src: 'https://picsum.photos/640/427?image=1031' },
        { id: 12, src: 'https://picsum.photos/640/427?image=1032' },
        { id: 13, src: 'https://picsum.photos/640/427?image=1033' },
        { id: 14, src: 'https://picsum.photos/640/427?image=1034' },
        { id: 15, src: 'https://picsum.photos/640/427?image=1035' },
        { id: 16, src: 'https://picsum.photos/640/853?image=1036' },
        { id: 17, src: 'https://picsum.photos/640/853?image=1037' },
        { id: 18, src: 'https://picsum.photos/640/427?image=1038' },
        { id: 19, src: 'https://picsum.photos/640/427?image=1039' },
        { id: 20, src: 'https://picsum.photos/640/427?image=1040' },
        { id: 21, src: 'https://picsum.photos/640/1138?image=1041' }
      ]
    }
  }
}
</script>

<style lang="scss">
.gallery-container {
  min-height: 100vh;

  img {
    padding: 8px 0;
  }

  column-count: 1;

  @media (min-width: 720px) { // md
    column-count: 4;
  }
}
</style>
