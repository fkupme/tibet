/* eslint-disable */
/**
* Creates a link to an image based on the provided name and width.
*
* @param {string} name - The name of the blog post used to generate the image link.
* @param {string} width - The width type, which determines the format of the image link.
* @returns {string} The generated image link, which varies based on the width parameter.
*/
class LinkCreator {
  create(name, width = '') {
    return width === 'desktop' ? require(`@/assets/images/blog-${name}-desktop.png`) : require(`@/assets/images/blog-${name}.png`)
  }
}

const link = new LinkCreator()
const blogModule = {
  state: () => ({
    slides: [
      {
        image: {
          mobile: link.create('1'),
          desktop: link.create('1', 'desktop'),
        },
        title: 'Красивая Италия: что ждет вас в реальности?',
        description: 'Откройте для себя удивительные уголки Италии и узнайте, как она выглядит на самом деле.',
        date: '01/04/2023',
        link: '#',
      },
      {
        image: {
          mobile: link.create('2'),
          desktop: link.create('2', 'desktop'),
        },
        title: 'Долой сомнения! Путешествие ждет вас!',
        description: 'Готовы к приключениям? Начните свое путешествие с нами и откройте для себя мир без границ.',
        date: '01/04/2023',
        link: '#',
      },
      {
        image: {
          mobile: link.create('3'),
          desktop: link.create('3', 'desktop'),
        },
        title: 'Как подготовиться к путешествию в одиночку?',
        description: 'Путешествие в одиночку может быть увлекательным и полезным. Узнайте, как подготовиться к нему.',
        date: '01/04/2023',
        link: '#',
      },
      {
        image: {
          mobile: link.create('4'),
          desktop: link.create('4', 'desktop'),
        },
        title: 'Индия: готовы к полету?',
        description: 'Откройте для себя красоты Индии и начните свое путешествие с нашей туркомпанией.',
        date: '01/04/2023',
        link: '#',
      },
    ],
  }),
  namespaced: true,
}

export default blogModule