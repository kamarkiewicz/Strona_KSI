import { shallow, mount } from '@vue/test-utils'
import HomeNews from '@/components/HomeNews.vue'

describe('HomeNews', () => {
  it('renders correctly', () => {
    const wrapper = mount(HomeNews)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('contains News header', () => {
    const msg = 'Aktualności'
    const wrapper = shallow(HomeNews)
    expect(wrapper.text()).toMatch(msg)
  })
})
