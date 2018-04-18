<template>
  <section class="history-page outer">
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
  data() {
    return {
      subtitle: "Quibusdam dicentibus",
      title: "Alii sementem faciunt, alii metunt"
    }
  }
}
</script>

<style lang="scss">
@import '~assets/scss/utils';

$bg-color: #f5f8fa;
$subheadtitle-color: #00a6d9;
$content-color: #637485;

.footer {
  padding-top: 7em;
}

.history-page {
  &.outer {
    background-color: $bg-color;
    color: $content-color;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;

      width: 100%;
      height: 5em;

      @include bg-triangle($bg-color);
      transform: translateY(100%) rotate(180deg);
    }
  }

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
