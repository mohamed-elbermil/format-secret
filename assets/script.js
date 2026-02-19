document.addEventListener('DOMContentLoaded', function () {
  const burgerMenu = document.querySelector('.burger-menu')
  const fullscreenMenu = document.querySelector('.fullscreen-menu')

  burgerMenu.addEventListener('click', function () {
    burgerMenu.classList.toggle('active')
    fullscreenMenu.classList.toggle('active')
  })

  // Fermer le menu quand on clique sur un lien
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a')
  mobileNavLinks.forEach((link) => {
    link.addEventListener('click', () => {
      burgerMenu.classList.remove('active')
      fullscreenMenu.classList.remove('active')
    })
  })
})

// Animation des chiffres clés
function animateValue(obj, start, end, duration) {
  let startTimestamp = null
  const hasPercent = obj.innerHTML.includes('%')
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp
    const progress = Math.min((timestamp - startTimestamp) / duration, 1)
    const currentValue = Math.floor(progress * (end - start) + start)
    obj.innerHTML = hasPercent ? currentValue + '%' : currentValue
    if (progress < 1) {
      window.requestAnimationFrame(step)
    }
  }
  window.requestAnimationFrame(step)
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const numberElements = entry.target.querySelectorAll('.figure-number')
        numberElements.forEach((numberElement) => {
          const end = parseInt(numberElement.getAttribute('data-target'))
          animateValue(numberElement, 0, end, 2000)
        })
        observer.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.5 },
)

document.addEventListener('DOMContentLoaded', () => {
  const keyFiguresSection = document.querySelector('.key-figures')
  if (keyFiguresSection) {
    observer.observe(keyFiguresSection)
  }
})

document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault()

  grecaptcha.ready(function () {
    grecaptcha
      .execute('6LecjB0qAAAAAOrwe5gY-DSf7lM09lhLqWyBhzm2', { action: 'submit' })
      .then(function (token) {
        document.getElementById('g-recaptcha-response').value = token

        var formData = new FormData(document.getElementById('contactForm'))

        fetch('contact.php', {
          method: 'POST',
          body: formData,
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.status === 'success') {
              Swal.fire({
                icon: 'success',
                title: 'Succès !',
                text: data.message,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK',
              }).then((result) => {
                if (result.isConfirmed) {
                  document.getElementById('contactForm').reset()
                  grecaptcha.reset()
                }
              })
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Erreur',
                text: data.message,
                confirmButtonColor: '#d33',
                confirmButtonText: 'OK',
              })
            }
          })
          .catch((error) => {
            console.error('Erreur:', error)
            Swal.fire({
              icon: 'error',
              title: 'Erreur',
              text: "Une erreur s'est produite lors de l'envoi du formulaire.",
              confirmButtonColor: '#d33',
              confirmButtonText: 'OK',
            })
          })
      })
  })
})
