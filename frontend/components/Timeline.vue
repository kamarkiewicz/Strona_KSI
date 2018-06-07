<template>
  <div class="timeline container">

    <article class="row dotline" v-for="el in entries" :key="el.id">
      <div class="p-4 col-md-12">
        <div class="row dotline-row pl-2">
          <header class="col-md-6 col-lg-3">
            <time class="text-secondary font-weight-bold" v-text="el.date"></time>
            <h2 class="pt-2 text-primary font-weight-bold text-uppercase" v-text="el.title"></h2>
          </header>
          <section class="col-md-6 py-3 col-lg-4 text-center">
            <img class="img-fluid d-block mx-auto" :src="el.image" width="290">
          </section>
          <section class="col-md-12 col-lg-5">
            <p class="my-1" v-text="el.content"></p>
          </section>
        </div>
      </div>
    </article>

  </div>
</template>

<script>
export default {
  props: {
    entries: {
      type: Array,
      required: true
    },
  },
}
</script>

<style lang="scss">

$dotline-color: #bbb;

.timeline {
  h2 {
    font-size: 1.1em;
    line-height: 1.3;
  }
}

.dotline {
  /// line
  border-color: $dotline-color;
  border-left: solid 1px;
  &:last-child {
    border-left: none;
  }
  border-left-color: $dotline-color;
  position: relative;

  /// dots
  &::before {
    background-color: $dotline-color;
    position: absolute;
    content: '';
    border-radius: 100%;
    width: 1em;
    height: 1em;
    left: -0.5em;
    top: 0;
  }

  /// content row
  .dotline-row {
    margin-top: -1.75em;
    margin-bottom: 1.75em
  }
}

</style>
