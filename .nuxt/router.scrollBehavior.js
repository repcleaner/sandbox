

export default function(to) {
      if (to.hash) {
        return window.scrollTo({
          top: document.querySelector(to.hash).offsetTop + -50,
          behavior: 'smooth'
        })
      }
      return window.scrollTo({ top: 0, behavior: 'smooth' })
    }
