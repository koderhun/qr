import domtoimage from 'dom-to-image-more'

const getName = (): string => {
  const d = new Date()
  return `qrcode_${d.getFullYear()}-${d.getMonth()}-${d.getDate()}-${
    d.getTime() % (24 * 1000)
  }.jpg`
}

export const elementToImage = (
  node: HTMLElement,
  typeHref: string = '',
): void => {
  domtoimage
    .toJpeg(node, {
      quality: 0.8,
      bgcolor: '#FF',
    })
    .then((dataUrl: string) => {
      const link = document.createElement('a')
      link.setAttribute('target', '_blank')

      link.download = getName()
      link.href = dataUrl

      link.click()
    })
    .catch((error: string) => {
      console.error('oops, something went wrong!', error)
    })
}
