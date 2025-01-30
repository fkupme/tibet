/* eslint-disable */
import LinkCreator from '@/utils/linkCreator'

const link = new LinkCreator('@/assets/images/', 'blog', '.png')
const blogModule = {
  state: () => ({
    slides: [
      {
        image: {
          mobile: link.create('1'),
          desktop: link.create('1', 'desktop'),
        },
        title: 'Красивая Италия: что ждет вас в реальности?',
        description:
          'Откройте для себя удивительные уголки Италии и узнайте, как она выглядит на самом деле.',
        date: '01/04/2023',
        link: '#',
      },
      {
        image: {
          mobile: link.create('2'),
          desktop: link.create('2', 'desktop'),
        },
        title: 'Долой сомнения! Путешествие ждет вас!',
        description:
          'Готовы к приключениям? Начните свое путешествие с нами и откройте для себя мир без границ.',
        date: '01/04/2023',
        link: '#',
      },
      {
        image: {
          mobile: link.create('3'),
          desktop: link.create('3', 'desktop'),
        },
        title: 'Как подготовиться к путешествию в одиночку?',
        description:
          'Путешествие в одиночку может быть увлекательным и полезным. Узнайте, как подготовиться к нему.',
        date: '01/04/2023',
        link: '#',
      },
      {
        image: {
          mobile: link.create('4'),
          desktop: link.create('4', 'desktop'),
        },
        title: 'Индия: готовы к полету?',
        description:
          'Откройте для себя красоты Индии и начните свое путешествие с нашей туркомпанией.',
        date: '01/04/2023',
        link: '#',
      },
    ],
  }),
  namespaced: true,
}

export default blogModule
