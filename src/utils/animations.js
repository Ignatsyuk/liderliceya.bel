export function observeAnimations(selectorToObserve, classToAdd) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(classToAdd)
      }
    })
  })

  const allElements = document.querySelectorAll(selectorToObserve)

  for (let el of allElements) {
    observer.observe(el)
  }
}