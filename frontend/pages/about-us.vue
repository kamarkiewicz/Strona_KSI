<template>
  <section class="history-page bg-light">
    <div class="container py-5">
      <header class="major">
        <p>{{ subtitle }}</p>
        <h2>{{ title }}</h2>
      </header>
    </div>
    <timeline :entries="entries" />
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
      title: "Alii sementem faciunt, alii metunt",
      entries: [
        {
          id: 1,
          date: "09.04.16",
          title: "Magna etiam sed lorem ipsum dolor amet",
          image: "https://picsum.photos/g/300/180?image=81",
          content: "Phasellus in ante vitae nibh porttitor tempus vitae ut ante. Vestibulum blandit dolor elementum viverra. Sed quat a diam, aliquet tempus felis. Phasellus et magna vitae nibh porttitor tempus vitae.",
        },
        {
          id: 2,
          date: "08.28.16",
          title: "Sed feugiat et mauris adipiscing dolor",
          image: "https://picsum.photos/g/300/180?image=82",
          content: "Phasellus in ante vitae nibh porttitor tempus vitae ut ante. Vestibulum blandit dolor elementum viverra. Sed quat a diam, aliquet tempus felis. Phasellus et magna vitae nibh porttitor tempus vitae.",
        },
        {
          id: 3,
          date: "08.22.16",
          title: "Tellus magna dolore sed elementum",
          image: "https://picsum.photos/g/300/180?image=83",
          content: "Phasellus in ante vitae nibh porttitor tempus vitae ut ante. Vestibulum blandit dolor elementum viverra. Sed quat a diam, aliquet tempus felis. Phasellus et magna vitae nibh porttitor tempus vitae.",
        },
      ]
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
