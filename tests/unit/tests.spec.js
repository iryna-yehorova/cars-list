import Vue from 'vue'
import Vuetify from 'vuetify'
import { mount, createLocalVue} from '@vue/test-utils'
import Main from '@/components/Main.vue'

Vue.use(Vuetify)

const localVue = createLocalVue()

describe('Main ', () => {
	let vuetify
	beforeEach(() => {
		vuetify = new Vuetify()
	})

	it('renders successfully', () => {
		const wrapper = mount(Main, {
			localVue,
			vuetify,
		})
	
		expect(wrapper.exists()).toBe(true)
	})

	it('renders default list', () => {
		const wrapper = mount(Main, {
			localVue,
			vuetify,
		})
	
		expect(wrapper.vm.datalist.length).toBe(2)

		const cards = wrapper.findAll('[data-test="card"]')

		expect(cards.length).toBe(2)
	})

	it('adds new car', async () => {
		const wrapper = mount(Main, {
			localVue,
			vuetify,
		})
	
		expect(wrapper.vm.datalist.length).toBe(2)
		const cards = wrapper.findAll('[data-test="card"]')
		expect(cards.length).toBe(2)

		const addButton = wrapper.find('[data-test="add-button"]')
		expect(addButton.exists()).toBe(true)
		addButton.vm.$emit('click')
		
		await Vue.nextTick()

		expect(wrapper.vm.showModal).toBeTruthy()

		const modal = wrapper.find('[data-test="add-card"]')
		expect(modal.exists()).toBe(true)

		wrapper.setData({
			newCar: {
				title: '123',
				type: 'Van'
			}
		})
		expect(wrapper.vm.validate).toBeTruthy()

		const saveButton = wrapper.find('[data-test="save-button"]')
		expect(saveButton.exists()).toBe(true)
		saveButton.vm.$emit('click')

		await Vue.nextTick()
		expect(wrapper.vm.datalist.length).toBe(3)
		const newList = wrapper.findAll('[data-test="card"]')
		expect(newList.length).toBe(3)
	})

	it('deletes car', async () => {
		const wrapper = mount(Main, {
			localVue,
			vuetify,
		})
	
		expect(wrapper.vm.datalist.length).toBe(2)
		const cards = wrapper.findAll('[data-test="card"]')
		expect(cards.length).toBe(2)

		const removeButton = wrapper.find('[data-test="delete-button"]')
		expect(removeButton.exists()).toBe(true)
		removeButton.trigger('click')
		
		await Vue.nextTick()

		expect(wrapper.vm.datalist.length).toBe(1)
		const newList = wrapper.findAll('[data-test="card"]')
		expect(newList.length).toBe(1)
	})


})
