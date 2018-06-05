import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import { mount } from '@vue/test-utils'
import HomeCarousel from '~/components/HomeCarousel.vue'
import { Image } from '~/assets/js/utils'

Vue.use(BootstrapVue)
Vue.config.ignoredElements = [
  'nuxt-link'
];

describe('HomeCarousel', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(HomeCarousel, {
      mocks: {
        $t: (label) => { return label },
        localePath: (args) => { return JSON.stringify(args) },
      },
      propsData: {
        slides: [
          {
            caption: 'First slide',
            description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
            image: new Image('http://via.placeholder.com/500x500'),
          },
          {
            caption: 'Second slide',
            description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
            image: new Image('http://via.placeholder.com/500x500'),
          },
          {
            caption: 'Third slide',
            description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
            image: new Image('http://via.placeholder.com/500x500'),
          },
        ],
      },
    })
  })

  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
