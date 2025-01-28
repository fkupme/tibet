<template>
  <label class="select-label" :for="id">
		<select v-if="type === 'dropdown'" :value='modelValue' @input='upd' class="select-field noselect" :name="id" :id="id">
			<option :value="option.key" v-for="option in options" :key="option">{{ option }}</option>
		</select>
		<input v-if="type === 'date'" type="date" class="select-field noselect" :name="id" :id="id" :value='modelValue' @input='upd'>
		<slot></slot>
	</label>
</template>

<script>
export default {
	name: "my-select",
	props: {
		options: Object,
		id: String,
		modelValue: String,
		type: {
			type:String,
			required: true,
		}
	},

	methods: {
		upd(event) {
			this.$emit('update:modelValue', event.target.value);
		},
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/fieldStyles.scss';
</style>
