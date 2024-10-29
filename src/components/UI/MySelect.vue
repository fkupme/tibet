<template>
  <label class="select-label" :for="id">
		<select :value='modelValue' @input='upd' class="select-field" :name="id" :id="id">
			<option :value="option.key" v-for="option in options" :key="option">{{ option }}</option>
		</select>
		<slot></slot>
	</label>
</template>

<script>
export default {
	name: "my-select",
	props: {
		options: Array,
		id: String,
		modelValue: String,
	},

	methods: {
		upd(event) {
			this.$emit('update:modelValue', event.target.value);
		},
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/fieldStyles.scss'
</style>
