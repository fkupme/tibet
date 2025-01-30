export default {
  state: {
    contacts: {
      title: 'Компания «РумТибет»',
      description:
        'Мы организуем захватывающие путешествия в самые удивительные уголки планеты. Наша команда профессионалов обеспечит вам незабываемый опыт и безопасность в каждом приключении.',
      email: 'info@rumtibet.com',
      phone: '+7 (800) 555-23-45',
      socialMedia: [
        { icon: 'tg.svg', link: '#', alt: 'Telegram' },
        { icon: 'vk.svg', link: '#', alt: 'VKontakte' },
        { icon: 'pinterest.svg', link: '#', alt: 'Pinterest' },
        { icon: 'skype.svg', link: '#', alt: 'Skype' },
      ],
    },
    services: {
      title: 'Наши услуги',
      items: [
        { text: 'Трекинг в Гималаях', link: '#' },
        { text: 'Восхождение на Эверест', link: '#' },
        { text: 'Буддийские храмы Тибета', link: '#' },
        { text: 'Экспедиции в Каракорум', link: '#' },
        { text: 'Треккинг к Эвересту', link: '#', isNew: true },
        { text: 'Сафари в Танзании', link: '#' },
      ],
    },
    important: {
      title: 'Важно для путешествий',
      items: [
        { text: 'Подготовка к высотному треккингу', link: '#' },
        { text: 'Снаряжение для горных походов', link: '#' },
        { text: 'Страховка для экстремального туризма', link: '#' },
        { text: 'Акклиматизация в горах', link: '#' },
      ],
    },
  },
}
