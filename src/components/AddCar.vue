<template>
  <div class="add-car">
		<v-btn
          color="primary"
          class="my-5"
          @click="showModal = !showModal"
        >
          Add new car
        </v-btn>

        <v-overlay
			absolute="absolute"
			:dark="false"
			:value="showModal"
			opacity="0.5"
        >	
			<v-card
				elevation="2"
				class="my-5"
				:style="{width: '50vw'}"
			>
				<v-form>
					<v-container>
						<v-row>
							<v-col class="pb-0">
								<p>Car type:</p>
								<v-autocomplete
									v-model="newCar.type"
									:items="carOptions"
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
									class=""
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
				</v-form>

				<v-card-actions class="d-flex flex-row-reverse">
					<v-btn
						color="primary"
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
</template>

<script>
export default {
	name: 'AddCar',

	data() {
		return {
			showModal: false,
			newCar: {},
			carOptions: ['Van', 'Track']
		}
	},

	computed: {
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
			this.$emit('add', this.newCar);
			this.showModal = false
		}
	}
}
</script>
