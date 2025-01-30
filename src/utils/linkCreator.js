/* eslint-disable */
// usage const linkCreator = new LinkCreator('https://example.com/images', 'moduleName');
// example new LinkCreator('@/assets/images/', 'gallery', '.jpg');
// example linkCreator.create('1', 'desktop'); returns '@/assets/images/gallery-1-desktop.jpg'
export default class LinkCreator {
  constructor(baseUrl, module, format = '.jpg') {
    this.baseUrl = baseUrl
    this.format = format
    this.module = module
    this.imageContext = require.context(
      '@/assets/images',
      false,
      /\.(png|jpe?g|jpg)$/
    )
  }

  create(name, width = '') {
    try {
      const fileName = `./${this.module}-${name}${width === 'desktop' ? '-desktop' : ''}${this.format}`
      return this.imageContext(fileName)
    } catch (error) {
      console.error(`Failed to load image: ${name}`, error)
      return '' // or a default image path
    }
  }
}
