export default {
  data() {
    return {
      width: window.innerWidth,
    }
  },
  methods: {
    updateWidth() {
      this.width = window.innerWidth
    },
  },
  computed: {
    isMobile() {
      return this.width < 640
    },
    isTablet() {
      return this.width >= 640 && this.width < 1024
    },
  },
  beforeMount() {
    window.addEventListener('resize', this.updateWidth)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateWidth)
  },
}
