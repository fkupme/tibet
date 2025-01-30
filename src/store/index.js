/* eslint-disable */
import { createStore } from 'vuex'
import searchModule from '@/store/searchModule'
import trendsModule from '@/store/trendsModule'
import blogModule from '@/store/blogModule'
import galleryModule from '@/store/galleryModule'
import footerModule from '@/store/footerModule'

export default createStore({
  modules: {
    search: searchModule,
    trends: trendsModule,
    blog: blogModule,
    gallery: galleryModule,
    footer: footerModule,
  },
})
