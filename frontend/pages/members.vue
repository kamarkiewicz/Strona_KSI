<template>
  <div class="py-5 text-center bg-light">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1>Członkowie Koła Studentów Informatyki</h1>
          <p class="lead">I TY możesz znaleźć się wśród nas!</p>
        </div>
      </div>
      <div class="row">

        <div class="col-md-4 p-4" v-for="el in members" :key="el">
          <img class="img-fluid d-block rounded-circle mx-auto" :src="el.image">
          <p class="my-4">
            <i>{{ el.description }}</i>
          </p>
          <p>
            <b>{{ el.name }}</b>
            <br>{{ el.title }}</p>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      members: [
        {
          image: 'https://picsum.photos/200/200?image=818',
          description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
          name: 'Bruce Lee',
          title: 'Przewodniczący',
        },
        {
          image: 'https://picsum.photos/200/200?image=768',
          description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
          name: 'Chuck "Half-kick" Norris',
          title: 'Zastępca przewodniczącego',
        },
        {
          image: 'https://picsum.photos/200/200?image=669',
          description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
          name: 'Carlito',
          title: 'Skarbnik',
        },
        {
          image: 'https://picsum.photos/200/200?image=818',
          description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
          name: 'Bruce Lee',
          title: 'Przewodniczący',
        },
        {
          image: 'https://picsum.photos/200/200?image=768',
          description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
          name: 'Chuck "Half-kick" Norris',
          title: 'Zastępca przewodniczącego',
        },
        {
          image: 'https://picsum.photos/200/200?image=669',
          description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
          name: 'Carlito',
          title: 'Skarbnik',
        },
        {
          image: 'https://picsum.photos/200/200?image=818',
          description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
          name: 'Bruce Lee',
          title: 'Przewodniczący',
        },
        {
          image: 'https://picsum.photos/200/200?image=768',
          description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
          name: 'Chuck "Half-kick" Norris',
          title: 'Zastępca przewodniczącego',
        },
        {
          image: 'https://picsum.photos/200/200?image=669',
          description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
          name: 'Carlito',
          title: 'Skarbnik',
        },
        {
          image: 'https://picsum.photos/200/200?image=818',
          description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
          name: 'Bruce Lee',
          title: 'Przewodniczący',
        },
        {
          image: 'https://picsum.photos/200/200?image=768',
          description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
          name: 'Chuck "Half-kick" Norris',
          title: 'Zastępca przewodniczącego',
        }
      ]
    }
  }
}
</script>
