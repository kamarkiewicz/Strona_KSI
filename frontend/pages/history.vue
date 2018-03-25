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

.history-page {
  &.outer {
    background-color: $bg-color;
    color: $content-color;
    padding: 6em 0 4em 0;
    padding-bottom: 4em;
    position: relative;
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
    h2 {
      margin-bottom: 0;
    }
    padding: 0 0 3.5em 0;
    border-bottom: solid 1px #dadada;
    margin: 0 0 3em 0;
  }
}

/// leaning bar on the bottom of site content
// TODO: background-image is not flexible (color)
.history-page.outer::after {
  transform: translateY(100%) rotate(180deg);
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;

  width: 100%;
  height: 6em;

  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMDAnIGhlaWdodD0nMTAwJyB2aWV3Qm94PScwIDAgMTAwIDEwMCcgcHJlc2VydmVBc3BlY3RSYXRpbz0nbm9uZSc+PHBvbHlnb24gcG9pbnRzPScwLDAgMCwxMDAgMTAwLDEwMCcgc3R5bGU9J2ZpbGw6I2Y1ZjhmYTsnIC8+PC9zdmc+");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.footer {
  padding-top: 7em;
}
</style>
