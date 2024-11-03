export default {
	data() {
		return {
			show: false,
		};
	},
	methods: {
		toggle(param) {
			if (param) {
				this.show = !this.show;
			}
		},
	},
};
