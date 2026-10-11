<script setup>
defineProps({
  id: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'select',
    validator: (value) => ['select', 'date'].includes(value),
  },
  // [{ value, label }] for type="select"
  options: {
    type: Array,
    default: () => [],
  },
  hint: {
    type: String,
    default: '',
  },
  // Mobile panel mode: fields are hidden until the search panel is opened
  active: {
    type: Boolean,
    default: false,
  },
})

const model = defineModel({ type: [String, Number], default: '' })
</script>

<template>
  <label
    class="select-label"
    :class="{ 'select-label_active': active }"
    :for="id"
  >
    <select
      v-if="type === 'select'"
      :id="id"
      v-model="model"
      :name="id"
      class="select-field noselect"
    >
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
    <input
      v-else
      :id="id"
      v-model="model"
      type="date"
      :name="id"
      class="select-field noselect"
    />
    {{ hint }}
  </label>
</template>

<style lang="scss" scoped>
.select-label {
  display: none;
  opacity: 0;
  transform: scale(0);
  transition: 0.5s ease-in;

  &_active {
    @include font-mobile(10, $color-light-gray, 'regular');
    text-align: center;
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    align-items: center;
    opacity: 1;
    transform: scale(1);
    transition: 0.5s ease-in;
  }

  .select-field {
    @include font-mobile(12, $color-light-gray, 'bold');
    background: transparent;
    border: 1px solid #e1e3e4;
    border-radius: 4px;
    padding: 0 8px;
    height: 10vw;
    width: 100%;

    &:focus {
      outline: none;
    }
  }

  @media (width > 640px) {
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    align-items: center;
    @include font-tablet(8, $color-light-gray, 'regular');
    opacity: 1;
    transform: scale(1);
    text-align: center;

    option {
      color: #1a3e3e;
      background: #2600e70d;
    }

    .select-field {
      @include font-tablet(12, $color-light-gray, 'bold');
      margin-bottom: 8px;
      height: 5vw;
      width: 100%;
    }
  }

  @media (width > 1024px) {
    @include font-desktop(14, false, false);

    .select-field {
      @include font-desktop(14, false, false);
      height: 2.86vw;
    }
  }
}
</style>
