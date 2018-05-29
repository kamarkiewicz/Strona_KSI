import Vue from 'vue'
import { shallowMount, mount } from '@vue/test-utils'
import HomeNews from '~/components/HomeNews.vue'

Vue.config.ignoredElements = [
  'b-row', 'b-col'
];

const cfg = {
  mocks: {
    $t: (label) => { return label },
    $d: (label) => { return label },
  },
}

describe('HomeNews', () => {
  it('renders correctly', () => {
    const wrapper = mount(HomeNews, cfg)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('contains News header', () => {
    const label = 'general.news'
    const wrapper = shallowMount(HomeNews, cfg)
    expect(wrapper.text()).toMatch(label)
  })
})
