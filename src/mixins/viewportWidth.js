export default {
	data() {
		return {
			width: window.innerWidth,
		};
	},
	methods: {
		updateWidth() {
			this.width = window.innerWidth;
		},
	},
	computed: {
		isMobile() {
			return this.width < 640;
		},
	},
	beforeMount() {
		window.addEventListener('resize', this.updateWidth);
	},
	beforeDestroy() {
		window.removeEventListener('resize', this.updateWidth);
	}
};
