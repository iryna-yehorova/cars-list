<template>
  <div class="main">
	<div class="d-flex ma-5">
		<v-btn
			data-test="add-button"
			color="primary"
			class="my-5"
			@click="showModal = !showModal"
        >
          Add new car
        </v-btn>

        <v-overlay
			:dark="false"
			:value="showModal"
			opacity="0.5"
        >	
			<v-card
				elevation="2"
				class="my-5 add-card"
				data-test="add-card"
				:style="{width: '50vw'}"
			>
				<v-container>
					<v-row>
						<v-col class="pb-0">
							<p>Car type:</p>
							<v-autocomplete
								v-model="newCar.type"
								data-test="car-type"
								:items="carOptionsNames"
								dense
								solo
								label="Car type"
							/>
						</v-col>
					</v-row>

					<v-row>
						<v-col class="py-0">
							<p>Car title:</p>
								<v-text-field
									v-model="newCar.title"
									data-test="title-input"
									clearable
									dense
									solo
									label="Car title"
								/>
						</v-col>
					</v-row>

					<v-row>
						<v-col class="py-0">
							<p>Car description:</p>
							<v-text-field
								v-model="newCar.description"
								clearable
								dense
								solo
								label="Car description"
							/>
						</v-col>
					</v-row>

					<v-row>
						<v-col class="py-0">
							<p>Risk response:</p>				 
							<v-text-field
								v-model="newCar.response"
								clearable
								dense
								solo
								label="Risk response"
							/>
						</v-col>
					</v-row>
				</v-container>


				<v-card-actions class="d-flex flex-row-reverse">
					<v-btn
						color="primary"
						data-test="save-button"
						class="ml-3"
						@click="addNewCar"
					>
						Save
					</v-btn>
					<v-btn
						@click="showModal = false"
					>
						Cancel
					</v-btn>
				</v-card-actions>
			</v-card>
        </v-overlay>
	</div>

	<v-expansion-panels class="pr-10 ml-5" 	
		v-model="panel" 
		multiple
	>
		<v-expansion-panel
			v-for="(item,i) in carOptions"
			:key="i"
		>
		<v-expansion-panel-header class="primary--text">
			{{ `${item.title} (${item.value.length})`  }}
		</v-expansion-panel-header>

		<v-expansion-panel-content>
			<div v-for="car in item.value" :key="car.id" class="d-flex flex-column">
					<v-card
						elevation="2"
						class="my-5"
						data-test="card"
					>
						<v-form>
							<v-container>
								<v-row>
									<v-col class="pb-0">
										<p>Car title:</p>
										<v-text-field
											v-model="car.title"
											data-test="input-title"
											clearable
											dense
											solo
											label="Car title"
										/>
									</v-col>

									<v-col 
										class="pb-0 d-flex flex-row-reverse align-start" 
										data-test="delete-button"
										:style="{cursor: 'pointer'}"
										@click="deleteCar"
									>
										<v-icon>mdi-delete-forever-outline</v-icon>
									</v-col>
								</v-row>

								<v-row>
									<v-col class="py-0">
										<p>Car description:</p>
										<v-text-field
											v-model="car.description"
											clearable
											dense
											solo
											label="Car description"
										/>
									</v-col>
								</v-row>

								<v-row>
									<v-col class="py-0">
										<p>Risk response:</p>				 
										<v-text-field
											v-model="car.response"
											clearable
											dense
											solo
											label="Risk response"
										/>
									</v-col>
								</v-row>
							</v-container>
						</v-form>
					</v-card>
				</div>
			</v-expansion-panel-content>
		</v-expansion-panel>
	</v-expansion-panels>
  </div>	
</template>

<script>
export default {
	name: 'Main',

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
			panel: [ 0, 1],
			showModal: false,
			newCar: {},
			carOptionsNames: ['Van', 'Track']
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
		},
		validate() {
			return this.newCar.type && this.newCar.title
		}
	},

	methods: {
		addNewCar() {
			if(!this.validate) {
				this.showModal = false
				return
			}

			this.newCar.id = Date.now()
			this.datalist.push(this.newCar)
			this.newCar = {}
			this.showModal = false
		},

		deleteCar(car) {
			const index = this.datalist.findIndex((item) => 
			{item.id == car.id})

			this.datalist.splice(index, 1)
		}
	}
}
</script>