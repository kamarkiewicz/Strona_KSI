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
            id: "5b16e3ae076badoc882781130",
            date: Date.parse("2017-08-10"),
            title: "Sed feugiat et mauris adipiscing dolor",
            image: new Image('https://picsum.photos/g/264/134?image=82'),
            content: "<p>Phasellus in ante vitae nibh porttitor tempus vitae ut ante. Vestibulum blandit dolor elementum viverra. Sed quat a diam, aliquet tempus felis. Phasellus et magna vitae nibh porttitor tempus vitae.</p>"
          },
          {
            id: "5b16e3ae0777adoc182324768",
            date: Date.parse("2016-04-09"),
            title: "Magna etiam sed lorem ipsum dolor amet",
            image: new Image('https://picsum.photos/g/264/134?image=81'),
            content: "<p>Phasellus in ante vitae nibh porttitor tempus vitae ut ante. Vestibulum blandit dolor elementum viverra. Sed quat a diam, aliquet tempus felis. Phasellus et magna vitae nibh porttitor tempus vitae.</p>"
          },
          {
            id: "5b16e3ae077e9doc180358326",
            date: Date.parse("2008-10-14"),
            title: "Tellus magna dolore sed elementum",
            image: new Image('https://picsum.photos/g/264/134?image=83'),
            content: "<p>Phasellus in ante vitae nibh porttitor tempus vitae ut ante. Vestibulum blandit dolor elementum viverra. Sed quat a diam, aliquet tempus felis. Phasellus et magna vitae nibh porttitor tempus vitae.</p>"
          },
        ],
      },
    })
  })

  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
