import { createStore } from 'vuex';
import searchModule from '@/store/searchModule';

export default createStore({
	modules: {
		search: searchModule,
	},
});
