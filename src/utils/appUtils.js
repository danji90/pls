export const moveToSection = divId => {
  const anchor = document.querySelector(`#${divId}`)
  return anchor && anchor.scrollIntoView({ behavior: 'smooth', inline: 'start' })
};

export const tabValues = ['home', 'individual', 'professional', 'business', 'test', 'contact']