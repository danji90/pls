export const moveToSection = divId => {
  const anchor = document.querySelector(`#${divId}`)
  return anchor && anchor.scrollIntoView({ behavior: 'smooth', inline: 'end' })
} 