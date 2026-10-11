import guideIcon from '@/assets/svg/guide.svg'
import safeIcon from '@/assets/svg/safe.svg'
import priceIcon from '@/assets/svg/price.svg'
import { image } from '@/utils/images'

const placeholderText =
  'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.'

export const offers = [
  { icon: guideIcon, title: 'Опытный гид', description: placeholderText },
  { icon: safeIcon, title: 'Безопасный поход', description: placeholderText },
  { icon: priceIcon, title: 'Лояльные цены', description: placeholderText },
]

export const offerPhotos = [1, 2, 3, 4].map((n) => image(`offer-${n}.png`))
