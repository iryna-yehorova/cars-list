<template>
	<v-card
		elevation="2"
		class="my-5"
	>
		<v-form>
			<v-container>
				<v-row>
					<v-col class="pb-0">
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

					<v-col 
						class="pb-0 d-flex flex-row-reverse align-start" 
						:style="{cursor: 'pointer'}"
						@click="$emit('delete', carInfo)"
					>
						<v-icon>mdi-delete-forever-outline</v-icon>
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