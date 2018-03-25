<template>
  <section class="timeline">
    <section v-for="el in timeline" :key="el.id">
      <header>
        <p>{{ el.date }}</p>
        <h4>{{ el.title }}</h4>
      </header>
      <div class="image">
        <img :src="el.image" alt="">
      </div>
      <div class="content">
        <p>{{ el.content }}</p>
        <ul class="actions">
          <li>
            <a class="button" :href="el.moreUrl">More</a>
          </li>
        </ul>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      timeline: [
        {
          id: 1,
          date: "09.04.16",
          title: "Magna etiam sed lorem ipsum dolor amet",
          image: "https://picsum.photos/g/264/134?image=81",
          content: "Phasellus in ante vitae nibh porttitor tempus vitae ut ante. Vestibulum blandit dolor elementum viverra. Sed quat a diam, aliquet tempus felis. Phasellus et magna vitae nibh porttitor tempus vitae.",
          moreUrl: "#"
        },
        {
          id: 2,
          date: "08.28.16",
          title: "Sed feugiat et mauris adipiscing dolor",
          image: "https://picsum.photos/g/264/134?image=82",
          content: "Phasellus in ante vitae nibh porttitor tempus vitae ut ante. Vestibulum blandit dolor elementum viverra. Sed quat a diam, aliquet tempus felis. Phasellus et magna vitae nibh porttitor tempus vitae.",
          moreUrl: "#"
        },
        {
          id: 3,
          date: "08.22.16",
          title: "Tellus magna dolore sed elementum",
          image: "https://picsum.photos/g/264/134?image=83",
          content: "Phasellus in ante vitae nibh porttitor tempus vitae ut ante. Vestibulum blandit dolor elementum viverra. Sed quat a diam, aliquet tempus felis. Phasellus et magna vitae nibh porttitor tempus vitae.",
          moreUrl: "#"
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

$dotline-color: #bbb;
$timedate-color: #00a6d9;
$timetitle-color: #637485;
$morebutton-color: #637485;

.timeline {
  /// dotline: line
  > section {
    border-color: $dotline-color;
    display: flex;
    border-left: solid 1px;
    border-left-color: $dotline-color;
    position: relative;
    &:last-child {
      border-left: none;
    }
  }

  /// dotline: dots
  > section::before {
    background-color: $dotline-color;
    position: absolute;
    content: '';
    border-radius: 100%;
    width: 1em;
    height: 1em;
    left: -0.5em;
    top: 0;
  }

  header {
    flex-shrink: 0;
    margin-bottom: 2em;
    padding: 0 2.5em;
    width: 25%;

    /// date
    p {
      color: $timedate-color;
      margin-bottom: 0.5em;
      font-weight: 700;
    }

    /// titles under dates
    h4 {
      font-weight: 700;
      font-size: 1.1em;
      text-transform: uppercase;
      color: $timetitle-color;
      line-height: 1.3;
      margin: 0 0 1em 0;
    }
  }

  /// images on timeline
  .image {
    margin-bottom: 2em;
    margin-right: 2.5em;
    border: 0;
    display: inline-block;
    position: relative;
    img {
      display: block;
    }
  }

  .content {
    margin-bottom: 2em;
    flex: 1;
    p {
      margin: 0 0 2em 0;
    }
  }

  /// [More] button container
  ul {
    &.actions {
      padding-left: 0;
    }
    margin: 0 0 2em 0;
    padding-left: 1em;
    &.actions li {
      &:last-child {
        padding-right: 0;
      }
      display: inline-block;
      padding: 0 1em 0 0;
      padding-right: 1em;
      vertical-align: middle;
    }
    li {
      padding-left: 0.5em;
    }
  }

  /// [More] button
  .button {
    background-color: transparent;
    box-shadow: inset 0 0 0 1px rgba(99, 116, 133, 0.25);
    color: $morebutton-color;
    border-radius: 8px;
    display: inline-block;
    font-size: 0.8em;
    font-weight: 700;
    line-height: 3.5em;
    padding: 0 2.25em;
    text-transform: uppercase;
  }
}
</style>
