// Resolves bundled images from src/assets/images by naming convention:
// new LinkCreator('gallery', '.png').create('1', 'desktop') -> gallery-1-desktop.png
export default class LinkCreator {
  constructor(module, format = '.jpg') {
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
      return ''
    }
  }
}
