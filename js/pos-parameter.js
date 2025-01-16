import { gsap } from "gsap"

const title = document.querySelector('.title h1')
const code = document.querySelector('pre')
const items = document.querySelectorAll('.item')

const tl = gsap.timeline()
    .from(title, { duration: 1, opacity: 0, y: - 50  })

    //absolute position (values in seconds)
    .from(code, { duration: 1, opacity: 0, y: 50  }, .5)
    .from('.item1', { duration: 1, opacity: 0, y: 50 })

    //relative position ("-=50%" ) / ("+=3")
    .from('.item2', { duration: 1, opacity: 0, y: 50 }, '-=50%')
    .from('.item3', { duration: 1, opacity: 0, y: 50 }, '+=1.2')

    //labels ("myLabel") exact the same label as a position parameter
    .from('.item4', { duration: 1, opacity: 0, y: 50 }, 'myLabel')
    .from('.item5', { duration: 1, opacity: 0, y: 50 }, 'myLabel')
    .from('.item6', { duration: 1, opacity: 0, y: 50 }, 'myLabel')
 
    //align with previous ("<"), / ('<0.2') / ('<50%')
    .from('.item7', { duration: 1, opacity: 0, y: 50 }, "<")
    .from('.item8', { duration: 1, opacity: 0, y: 50 }, '<0.2')
    .from('.item9', { duration: 1, opacity: 0, y: 50 }, '<50%')