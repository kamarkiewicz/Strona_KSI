import { shallowMount, mount } from '@vue/test-utils'
import Timeline from '@/components/Timeline.vue'

describe('Timeline', () => {
  it('renders correctly', () => {
    const wrapper = mount(Timeline)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('contains some events', () => {
    const msg = '09.04.16 Magna etiam'
    const wrapper = shallowMount(Timeline)
    expect(wrapper.text()).toMatch(msg)
  })
})
