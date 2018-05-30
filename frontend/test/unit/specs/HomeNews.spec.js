import Vue from 'vue'
import { mount } from '@vue/test-utils'
import HomeNews from '~/components/HomeNews.vue'

Vue.config.ignoredElements = [
  'b-row', 'b-col', 'nuxt-link'
];

describe('HomeNews', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(HomeNews, {
      mocks: {
        $t: (label) => { return label },
        $d: (label) => { return label },
      },
    })
  })

  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('contains News header', () => {
    const label = 'general.news'
    expect(wrapper.text()).toMatch(label)
  })
})
