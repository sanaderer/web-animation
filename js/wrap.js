import { gsap } from "gsap";

//? - ===========  ELEMENTS  =========== -//
//? - ===========  ELEMENTS  =========== -//
const items = document.querySelectorAll('.item');


//? - ===========  wrap()  =========== -//
//? - ===========  wrap()  =========== -//
gsap.from(items, {
    duration: 4,
    ease: 'power3.out',
    stagger: 0.1,
    scale: gsap.utils.wrap([0, 1.5 ]),
})
gsap.to(items, {
    duration: 4,
    ease: 'power3.out',
    stagger: 0.1,
    backgroundColor: gsap.utils.wrap(['yellow', 'red', 'blue', 'green']),
})