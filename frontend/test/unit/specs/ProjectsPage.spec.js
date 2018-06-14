import { shallowMount, mount } from '@vue/test-utils'
import ProjectsPage from '~/pages/projects/index.vue'

describe('ProjectsPage', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(ProjectsPage, {
      mocks: {
        $t: (label) => { return label },
        $d: (label) => { return label },
        localePath: (args) => { return JSON.stringify(args) },
      },
      computed: {
        entries: () => ([
          {
            id: 1,
            title: 'Drukarka 3D',
            excerpt: 'Krótki opis wprowadzający do projektu. Pełny opis projektu wraz z galerią z projektu powinien być raczej na podstronie.',
            icon: 'fa-print',
          },
          {
            id: 2,
            title: 'Strona_KSI.',
            excerpt: 'Jest to projekt zrodzony z potrzeby nowoczesnej, dostępnej na urządzeniach mobilnych wizytówce w sieci.',
            icon: 'fa-code',
          },
          {
            id: 3,
            title: 'S.O.F.A.',
            excerpt: 'Sofa na kółkach - korzystając z doświadczenia zebranego przy łaziku wysyłamy odrobinę luksusu na Księżyc!',
            icon: 'fa-microchip',
          },
          {
            id: 4,
            title: 'Elektroniczny zamek',
            excerpt: 'Nigdy więcej zgubionego kluczyka do pokoju koła ;)',
            icon: 'fa-key',
          },
        ])
      },
    })
  })

  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
