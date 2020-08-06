export const moveToSection = divId => {
  console.log(divId);
  
  const anchor = document.querySelector(`#${divId}`)
  return anchor && anchor.scrollIntoView({ behavior: 'smooth', inline: 'start' })
} 