<template>
  <section class="history-page outer">
    <div class="inner">

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

$bg-color: #f5f8fa;
$subheadtitle-color: #00a6d9;
$content-color: #637485;

@mixin bg-triangle($color) {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" preserveAspectRatio="none"><polygon points="0,0 0,100 100,100" style="fill: #{$color}"/></svg>');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.footer {
  padding-top: 7em;
}

.history-page {
  &.outer {
    background-color: $bg-color;
    color: $content-color;
    padding: 6em 0 4em 0;
    padding-bottom: 4em;
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

  .inner {
    margin: 0 auto;
    max-width: 75em;
    width: calc(100% - 4em);
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
