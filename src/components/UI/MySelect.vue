<template>
  <label class="select-label" :for="id">
    <select
      v-if="type === 'dropdown'"
      :id="id"
      :value="modelValue"
      :name="id"
      class="select-field noselect"
      @input="upd"
    >
      <option
        v-for="option in normalizedOptions"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
    <input
      v-if="type === 'date'"
      :id="id"
      type="date"
      class="select-field noselect"
      :name="id"
      :value="modelValue"
      @input="upd"
    />
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: 'my-select',
  props: {
    options: [Object, Array],
    id: String,
    modelValue: [String, Number],
    type: {
      type: String,
      required: true,
    },
  },
  emits: ['update:modelValue'],
  computed: {
    // { key: label } -> value=key, [item] -> value=item
    normalizedOptions() {
      if (Array.isArray(this.options)) {
        return this.options.map((item) => ({ value: item, label: item }))
      }
      return Object.entries(this.options || {}).map(([value, label]) => ({
        value,
        label,
      }))
    },
  },
  methods: {
    upd(event) {
      this.$emit('update:modelValue', event.target.value)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/fieldStyles.scss';
</style>
