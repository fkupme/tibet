import { onScopeDispose, ref } from 'vue'

export const breakpoints = {
  tablet: 640,
  desktop: 1024,
}

// Reactive matchMedia: updates only when the query starts or stops matching,
// unlike a resize listener that fires on every pixel
export function useMediaQuery(query) {
  const mediaQuery = window.matchMedia(query)
  const matches = ref(mediaQuery.matches)
  const update = (event) => {
    matches.value = event.matches
  }

  mediaQuery.addEventListener('change', update)
  onScopeDispose(() => mediaQuery.removeEventListener('change', update))

  return matches
}

export function useIsMobile() {
  return useMediaQuery(`(max-width: ${breakpoints.tablet - 0.02}px)`)
}
