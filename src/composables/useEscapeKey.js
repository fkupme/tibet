import { onBeforeUnmount, onMounted } from 'vue'

export function useEscapeKey(handler) {
  const onKeydown = (event) => {
    if (event.key === 'Escape') handler()
  }

  onMounted(() => document.addEventListener('keydown', onKeydown))
  onBeforeUnmount(() => document.removeEventListener('keydown', onKeydown))
}
