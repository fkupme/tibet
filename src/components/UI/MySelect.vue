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
      <option v-for="option in options" :key="option" :value="option.key">
        {{ option }}
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
    options: Object,
    id: String,
    modelValue: String,
    type: {
      type: String,
      required: true,
    },
  },
  emits: ['update:modelValue'],
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
