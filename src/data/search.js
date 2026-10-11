import { trends } from '@/data/trends'

// Locations come from the trends list, so the two can no longer drift apart
export const locationOptions = [
  { value: '', label: 'Локация' },
  ...trends.map(({ name, title }) => ({ value: name, label: title })),
]

export const teamOptions = [4, 5, 6, 7, 8, 9, 10].map((size) => ({
  value: size,
  label: String(size),
}))
