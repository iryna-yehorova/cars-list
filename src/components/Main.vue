<template>
  <div class="main">
	<div class="d-flex ma-5">
		<AddCar @add="addNewCar"/>
	</div>

	<v-expansion-panels class="pr-10 ml-5">
		<v-expansion-panel
			v-for="(item,i) in carOptions"
			:key="i"
		>
		<v-expansion-panel-header class="primary--text">
			{{ `${item.title} (${item.value.length})`  }}
		</v-expansion-panel-header>
		<v-expansion-panel-content>
			<div v-for="car in item.value" :key="car.id" class="d-flex flex-column">
				<CarCard 
					:value="car" 
					@input="updateCar" 
					@delete="deleteCar"
				/>
			</div>
		</v-expansion-panel-content>
		</v-expansion-panel>
	</v-expansion-panels>
  </div>	
</template>

<script>
import AddCar from './AddCar.vue'
import CarCard from './CarCard.vue'

export default {
	name: 'Main',

	components: {
		AddCar,
		CarCard
	},

	data() {
		return {
			datalist: [
				{
					id: 123123, 
					title: 'Old van', 
					description: 'Good car', 
					response: '',
					type: 'Van'
				},
				{
					id: 125431, 
					title: 'Old track', 
					description: 'Good car', 
					response: '',
					type: 'Track'
				},
			],
		}
	},

	computed: {
		tracks() {
			return this.datalist.filter(item => item.type === 'Track')
		},
		vans() {
			return this.datalist.filter(item => item.type === 'Van')
		},
		carOptions() {
			return [
				{title: 'Track', value: this.tracks}, 
				{title: 'Van', value: this.vans}
			]
		}
	},

	methods: {
		updateCar(updatedCar) {
			const index = this.datalist.findIndex((item) => 
			{item.id == updatedCar.id})

			this.datalist[index] = this.updatedCar
		},

		addNewCar(newCar) {
			this.datalist.push(newCar)
		},

		deleteCar(car) {
			const index = this.datalist.findIndex((item) => 
			{item.id == car.id})

			this.datalist.splice(index, 1)
		}
	}
}
</script>

<style>

</style>