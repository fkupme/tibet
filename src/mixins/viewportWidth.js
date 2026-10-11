export default {
  data() {
    return {
      width: window.innerWidth,
    }
  },
  computed: {
    isMobile() {
      return this.width < 640
    },
    isTablet() {
      return this.width >= 640 && this.width < 1024
    },
  },
  methods: {
    updateWidth() {
      this.width = window.innerWidth
    },
  },
  beforeMount() {
    window.addEventListener('resize', this.updateWidth)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateWidth)
  },
}
