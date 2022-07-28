<template>
	<v-card
		elevation="2"
		class="my-5"
	>
		<v-form>
			<v-container>
				<v-row>
					<v-col
						cols="12"
						sm="6"
						class="pb-0"
					>
						<p>Car title:</p>
						<v-text-field
							v-model="carInfo.title"
							class=""
							clearable
							dense
							solo
							label="Car title"
							@input="$emit('input', carInfo)"
						/>
					</v-col>
				</v-row>

				<v-row>
					<v-col class="py-0">
						<p>Car description:</p>
						<v-text-field
							v-model="carInfo.description"
							clearable
							dense
							solo
							label="Car description"
							@input="$emit('input', carInfo)"
						/>
					</v-col>
				</v-row>

				<v-row>
					<v-col class="py-0">
						<p>Risk response:</p>				 
						<v-text-field
							v-model="carInfo.response"
							clearable
							dense
							solo
							label="Risk response"
							@input="$emit('input', carInfo)"
						/>
					</v-col>
				</v-row>
			</v-container>
		</v-form>
	</v-card>
</template>

<script>
export default {
	name: 'CarCard',

	props: {
		value: {
			type: Object,
			default: () => {}
		}
	},

	data() {
		return {
			carInfo: {}
		}
	},

	created() {
		this.carInfo = this.value
	}

}
</script>

<style>

</style>