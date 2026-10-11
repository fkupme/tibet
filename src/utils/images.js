const files = import.meta.glob('@/assets/images/*.{png,jpg}', {
  eager: true,
  import: 'default',
})

const urlsByName = Object.fromEntries(
  Object.entries(files).map(([path, url]) => [path.split('/').pop(), url])
)

export function image(fileName) {
  const url = urlsByName[fileName]
  if (!url) console.warn(`Image not found: ${fileName}`)
  return url
}

// Mobile and desktop variants follow the "<name>.<ext>" / "<name>-desktop.<ext>" convention
export function responsiveImage(name, ext = 'png') {
  return {
    mobile: image(`${name}.${ext}`),
    desktop: image(`${name}-desktop.${ext}`),
  }
}
