<template>
  <section class="history-page bg-light">
    <div class="container pt-5">

      <header class="major">
        <p>{{ subtitle }}</p>
        <h2>{{ title }}</h2>
      </header>

      <timeline />

    </div>
  </section>
</template>

<script>
import Timeline from '~/components/Timeline.vue'

export default {
  components: {
    Timeline
  },
  data () {
    return {
      subtitle: "Quibusdam dicentibus",
      title: "Alii sementem faciunt, alii metunt"
    }
  },
  head () {
    return {
      title: 'O nas',
    }
  }
}
</script>

<style lang="scss" scoped>

$subheadtitle-color: #00a6d9;

.history-page {
  header.major {
    p {
      color: $subheadtitle-color;
      font-weight: 700;
      margin-bottom: 0.25em;
      text-transform: uppercase;
    }
    &::after {
      content: '';
      display: block;
      border-bottom: 1px solid #dadada;
      width: 8em;
      height: 1em;
    }
    margin-bottom: 2.25em;
  }
}
</style>
