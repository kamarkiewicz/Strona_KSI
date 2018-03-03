<template>
  <div class="home-news py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2 class="text-primary">{{ title }}</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="row">

            <div class="col-md-4" v-for="news in newsList" :key="news.id">
              <img class="img-fluid d-block w-100 mb-3 rounded" :src="news.pic">
              <h2 class="text-primary">{{ news.title }}</h2>
              <p class="">{{ news.content }}</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeNewsComponent',
  data () {
    return {
      title: 'Aktualności',
      newsList: [
        { id: 1,
          pic: 'https://picsum.photos/270/180?image=1024',
          title: 'Tytuł aktualności 1',
          pubDate: 'wczoraj',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        { id: 2,
          pic: 'https://picsum.photos/270/180?image=1020',
          title: 'Tytuł aktualności 2',
          pubDate: '2 dni temu',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        { id: 3,
          pic: 'https://picsum.photos/270/180?image=1010',
          title: 'Tytuł aktualności 3',
          pubDate: '1 czerwca 2001',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
      ]
    }
  }
}
</script>
