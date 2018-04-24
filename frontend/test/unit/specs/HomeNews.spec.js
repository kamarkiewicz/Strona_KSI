import { shallow, mount } from '@vue/test-utils'
import HomeNews from '@/components/HomeNews.vue'

const $t = () => {}

describe('HomeNews', () => {
  it('renders correctly', () => {
    const wrapper = mount(HomeNews, {mocks: { $t }})
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('contains News header', () => {
    const msg = 'ktualności'
    const wrapper = shallow(HomeNews, {mocks: { $t }})
    expect(wrapper.text()).toMatch(msg)
  })
})
