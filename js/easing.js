import { gsap } from "gsap";

//? - ===========  ELEMENTS  =========== -//
//? - ===========  ELEMENTS  =========== -//
const items = document.querySelectorAll('.item');

//? - ===========  easing  =========== -//
//? - ===========  easing  =========== -//
gsap.from(items, { duration: 2, scale: 0, stagger: 0.1, ease: 'expo.inOut' })