export default {
	data() {
		return {
			width: window.innerWidth,
			// isMobile: this.width < 640,
		};
	},
	methods: {
		updateWidth() {
			this.width = window.innerWidth;
			// this.isMobile = this.width < 640;
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
};
