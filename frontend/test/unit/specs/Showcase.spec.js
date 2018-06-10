import Vue from 'vue'
import { mount } from '@vue/test-utils'
import Showcase from '~/components/Showcase.vue'
import { Image } from '~/assets/js/utils'

Vue.config.ignoredElements = [
  'b-row', 'b-col', 'nuxt-link'
];

describe('Showcase', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Showcase, {
      mocks: {
        $t: (label) => { return label },
        $d: (label) => { return label },
        localePath: (args) => { return JSON.stringify(args) },
      },
      propsData: {
        entries: [
          {
            id: 1,
            title: 'O nas. Historia KSI',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            image: new Image('https://picsum.photos/270/180?image=985'),
            link: 'about-us',
          },
          {
            id: 2,
            title: 'Projekty',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            image: new Image('https://picsum.photos/270/180?image=986'),
            link: 'projects',
          },
          {
            id: 3,
            title: 'Członkowie',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            image: new Image('https://picsum.photos/270/180?image=987'),
            link: 'members',
          },
        ],
      },
    })
  })

  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
