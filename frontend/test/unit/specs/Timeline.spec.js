import { mount } from '@vue/test-utils'
import Timeline from '~/components/Timeline.vue'
import { Image } from '~/assets/js/utils'

describe('Timeline', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Timeline, {
      mocks: {
        $t: (label) => { return label },
        $d: (label) => { return label },
      },
      propsData: {
        entries: [
          {
            id: 1,
            date: "09.04.16",
            title: "Magna etiam sed lorem ipsum dolor amet",
            image: "https://picsum.photos/g/300/180?image=81",
            content: "Phasellus in ante vitae nibh porttitor tempus vitae ut ante. Vestibulum blandit dolor elementum viverra. Sed quat a diam, aliquet tempus felis. Phasellus et magna vitae nibh porttitor tempus vitae.",
          },
          {
            id: 2,
            date: "08.28.16",
            title: "Sed feugiat et mauris adipiscing dolor",
            image: "https://picsum.photos/g/300/180?image=82",
            content: "Phasellus in ante vitae nibh porttitor tempus vitae ut ante. Vestibulum blandit dolor elementum viverra. Sed quat a diam, aliquet tempus felis. Phasellus et magna vitae nibh porttitor tempus vitae.",
          },
          {
            id: 3,
            date: "08.22.16",
            title: "Tellus magna dolore sed elementum",
            image: "https://picsum.photos/g/300/180?image=83",
            content: "Phasellus in ante vitae nibh porttitor tempus vitae ut ante. Vestibulum blandit dolor elementum viverra. Sed quat a diam, aliquet tempus felis. Phasellus et magna vitae nibh porttitor tempus vitae.",
          },
        ],
      },
    })
  })

  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
