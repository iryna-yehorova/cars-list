import Vue from 'vue'
import Vuetify from 'vuetify'
import { mount, createLocalVue } from '@vue/test-utils'
import Main from '@/components/Main.vue'
import CarCard from '@/components/CarCard.vue'
import AddCar from '@/components/AddCar.vue'

Vue.use(Vuetify)

const localVue = createLocalVue()

describe('CarCard ', () => {
  let vuetify
  beforeEach(() => {
    vuetify = new Vuetify()
  })

  it('renders on the screen', () => {
    const wrapper = mount(CarCard, {
      localVue,
      vuetify,
      propsData: { 
        value: {
          id: 1234,
          title: 'New Car',
          description: '123'
        }
       }
    })

    expect(wrapper.exists()).toBe(true)
  })

  it('gets value prop', () => {
    const wrapper = mount(CarCard, {
      localVue,
      vuetify,
      propsData: { 
        value: {
          id: 1234,
          title: 'New Car',
          description: '123'
        }
       }
    })

    expect(wrapper.vm.value.id).toBe(1234)

    const input = wrapper.find('[data-test="input-title"]')
    expect(input.exists()).toBe(true)

    expect(input.element.value).toBe('New Car')
  })

  it('emits input event', async () => {
    const wrapper = mount(CarCard, {
      localVue,
      vuetify,
      propsData: { 
        value: {
          id: 1234,
          title: 'New Car',
          description: '123'
        }
       }
    })

    const input =  wrapper.find('[data-test="input-title"]')
    expect(input.exists()).toBe(true)

    await input.setValue('updated title car')
    
    expect(wrapper.emitted()).toHaveProperty('input');
  })

  it('emits delete event', () => {
    const wrapper = mount(CarCard, {
      localVue,
      vuetify,
      propsData: { 
        value: {
          id: 1234,
          title: 'New Car',
          description: '123'
        }
       }
    })


    wrapper.find('[data-test="delete-button"]').trigger('click')

    expect(wrapper.emitted()).toHaveProperty('delete');
  })
})
