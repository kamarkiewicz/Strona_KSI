<template>
  <div class="container gallery-container">
    <div class="tz-gallery">
      <div class="row">
        <div class="col-sm-12 col-md-4">
          <a class="lightbox" href="https://picsum.photos/800/600?image=1010">
            <img src="https://picsum.photos/800/600?image=1010" alt="Bridge">
          </a>
        </div>
        <div class="col-sm-6 col-md-4">
          <a class="lightbox" href="https://picsum.photos/800/600?image=1011">
            <img src="https://picsum.photos/800/600?image=1011" alt="Park">
          </a>
        </div>
        <div class="col-sm-6 col-md-4">
          <a class="lightbox" href="https://picsum.photos/800/600?image=1012">
            <img src="https://picsum.photos/800/600?image=1012" alt="Tunnel">
          </a>
        </div>
        <div class="col-sm-12 col-md-8">
          <a class="lightbox" href="https://picsum.photos/800/600?image=1013">
            <img src="https://picsum.photos/800/600?image=1013" alt="Traffic">
          </a>
        </div>
        <div class="col-sm-6 col-md-4">
          <a class="lightbox" href="https://picsum.photos/800/600?image=1014">
            <img src="https://picsum.photos/800/600?image=1014" alt="Coast">
          </a>
        </div>
        <div class="col-sm-6 col-md-4">
          <a class="lightbox" href="https://picsum.photos/800/600?image=1016">
            <img src="https://picsum.photos/800/600?image=1016" alt="Rails">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GalleryComponent',
  data () {
    return {}
  }
}
</script>

<style lang="scss">
.container.gallery-container {
  background-color: #fff;
  color: #35373a;
  min-height: 100vh;
  padding: 30px 50px;
}

.gallery-container p.page-description {
  text-align: center;
  margin: 25px auto;
  font-size: 18px;
  color: #999;
}

.tz-gallery {
  padding: 40px;
}

/* Override bootstrap column paddings */
.tz-gallery .row > div {
  padding: 2px;
}

.tz-gallery .lightbox img {
  width: 100%;
  border-radius: 0;
  position: relative;
}

.tz-gallery .lightbox:before {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -13px;
  margin-left: -13px;
  opacity: 0;
  color: #fff;
  pointer-events: none;
  z-index: 9000;
  transition: 0.3s;
}


.tz-gallery .lightbox:after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: rgba(46, 132, 206, 0.7);
  content: '';
  transition: 0.4s;
}

.tz-gallery .lightbox:hover:after,
.tz-gallery .lightbox:hover:before {
  opacity: 0.4;
}
</style>
