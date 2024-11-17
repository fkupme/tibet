import { createStore } from 'vuex';
import searchModule from '@/store/searchModule';
import trendsModule from './trendsModule';

export default createStore({
	modules: {
		search: searchModule,
		trends: trendsModule,
	},
});
