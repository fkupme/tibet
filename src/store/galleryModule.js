import LinkCreator from '@/utils/linkCreator'

const link = new LinkCreator('@/assets/images/', 'gallery', '.png')

const galleryModule = {
  state: {
    galleryItems: [
      { mobile: link.create('1'), desktop: link.create('1', 'desktop') },
      { mobile: link.create('2'), desktop: link.create('2', 'desktop') },
      { mobile: link.create('3'), desktop: link.create('3', 'desktop') },
      { mobile: link.create('4'), desktop: link.create('4', 'desktop') },
      { mobile: link.create('5'), desktop: link.create('5', 'desktop') },
      { mobile: link.create('6'), desktop: link.create('6', 'desktop') },
    ],
  },
  namespaced: true,
}

export default galleryModule
