import { gsap } from "gsap";

//? - ===========  ELEMENTS  =========== -//
//? - ===========  ELEMENTS  =========== -//
const items = document.querySelectorAll('.item');

//? - ===========  loops  =========== -//
//? - ===========  loops  =========== -//
gsap.from('.item3', {  duration: 2, scale: 0.5, ease: 'power2.inOut', repeat: -1, yoyo: true, repeatDelay: 1 })