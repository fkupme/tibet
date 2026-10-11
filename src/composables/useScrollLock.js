import { onBeforeUnmount, onMounted } from 'vue'

// Locks page scroll while the calling component is mounted (modals, overlays)
export function useScrollLock() {
  let previousOverflow = ''

  onMounted(() => {
    previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
  })

  onBeforeUnmount(() => {
    document.body.style.overflow = previousOverflow
  })
}
