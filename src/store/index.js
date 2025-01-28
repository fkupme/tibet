/* eslint-disable */
import { createStore } from 'vuex';
import searchModule from '@/store/searchModule';
import trendsModule from '@/store/trendsModule';
import blogModule from '@/store/blogModule';

export default createStore({
	modules: {
		search: searchModule,
		trends: trendsModule,
		blog: blogModule,
	},
});
