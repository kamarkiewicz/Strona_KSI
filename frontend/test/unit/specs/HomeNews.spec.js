import Vue from 'vue'
import { mount } from '@vue/test-utils'
import HomeNews from '~/components/HomeNews.vue'
import { Image } from '~/assets/js/utils'

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
      propsData: {
        news: [
          {
            id: 1,
            date: 1527628516335,
            title: 'Tytuł aktualności 1',
            excerpt: '<p>A party you cannot refuse...</p><p>Osoby zainteresowane proszone są o imienny zapis w pokoju KSI.</p>',
            image: new Image('https://picsum.photos/270/180?image=1024'),
            link: '#read-more-link'
          },
          {
            id: 2,
            date: 1527628516335,
            title: 'Tytuł aktualności 2',
            excerpt: '<p>A party you cannot refuse...</p><p>Osoby zainteresowane proszone są o imienny zapis w pokoju KSI.</p>',
            image: new Image('https://picsum.photos/270/180?image=1020'),
            link: '#read-more-link'
          },
          {
            id: 3,
            date: 1527628516335,
            title: 'Tytuł aktualności 3',
            excerpt: '<p>A party you cannot refuse...</p><p>Osoby zainteresowane proszone są o imienny zapis w pokoju KSI.</p>',
            image: new Image('https://picsum.photos/270/180?image=1010'),
            link: '#read-more-link'
          },
        ],
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
