import { gsap } from "gsap"

const title = document.querySelector('.title h1')
const code = document.querySelector('pre')
const items = document.querySelectorAll('.item')

const tl = gsap.timeline()
    .from(title, { duration: 1, opacity: 0, y: - 50  })
    .from(code, { duration: 1, opacity: 0, y: 50  })
    .from(items, { duration: 1, opacity: 0, y: 50, stagger: 0.1  })