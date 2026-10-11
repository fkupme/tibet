import { responsiveImage } from '@/utils/images'

export const galleryPhotos = [1, 2, 3, 4, 5, 6].map((n) => ({
  id: n,
  ...responsiveImage(`gallery-${n}`),
}))
