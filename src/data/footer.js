import telegramIcon from '@/assets/svg/tg.svg'
import vkIcon from '@/assets/svg/vk.svg'
import pinterestIcon from '@/assets/svg/pinterest.svg'
import skypeIcon from '@/assets/svg/skype.svg'

export const contacts = {
  title: 'Компания «РумТибет»',
  description:
    'Мы организуем захватывающие путешествия в самые удивительные уголки планеты. Наша команда профессионалов обеспечит вам незабываемый опыт и безопасность в каждом приключении.',
  email: 'info@rumtibet.com',
  phone: '+7 (800) 555-23-45',
  socialMedia: [
    { icon: telegramIcon, href: '#', label: 'Telegram' },
    { icon: vkIcon, href: '#', label: 'VKontakte' },
    { icon: pinterestIcon, href: '#', label: 'Pinterest' },
    { icon: skypeIcon, href: '#', label: 'Skype' },
  ],
}

export const services = {
  title: 'Наши услуги',
  items: [
    { text: 'Трекинг в Гималаях', href: '#' },
    { text: 'Восхождение на Эверест', href: '#' },
    { text: 'Буддийские храмы Тибета', href: '#' },
    { text: 'Экспедиции в Каракорум', href: '#' },
    { text: 'Треккинг к Эвересту', href: '#', isNew: true },
    { text: 'Сафари в Танзании', href: '#' },
  ],
}

export const travelTips = {
  title: 'Важно для путешествий',
  items: [
    { text: 'Подготовка к высотному треккингу', href: '#' },
    { text: 'Снаряжение для горных походов', href: '#' },
    { text: 'Страховка для экстремального туризма', href: '#' },
    { text: 'Акклиматизация в горах', href: '#' },
  ],
}
