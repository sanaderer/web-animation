import { gsap } from "gsap";

//? - ===========  ELEMENTS  =========== -//
//? - ===========  ELEMENTS  =========== -//
const items = document.querySelectorAll('.item');

//? - ===========  simple  =========== -//
//? - ===========  simple  =========== -//
// gsap.from(items, { duration: 2, scale: 0.2, stagger: - 0.2 })


//? - ===========  advanced  =========== -//
//? - ===========  advanced  =========== -//
gsap.from(items, { duration: 2, scale: 0, stagger: {
    each: 0.2,
    grid: 'auto',
    from: 'start',
} })
