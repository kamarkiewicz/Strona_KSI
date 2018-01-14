import Vue from 'vue'
import HomeComponent from '@/components/Home'

describe('Home.vue', () => {
  it('should render a carousel', () => {
    const Constructor = Vue.extend(HomeComponent)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('div.home #carousel1'))
      .to.not.equal(null)
  })
})
