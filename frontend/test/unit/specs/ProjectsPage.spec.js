import { shallowMount, mount } from '@vue/test-utils'
import ProjectsPage from '~/pages/projects/index.vue'

describe('ProjectsPage', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(ProjectsPage, {
    })
  })

  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
