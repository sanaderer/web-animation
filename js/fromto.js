import { gsap } from "gsap";

//? - ===========  ELEMENTS  =========== -//
//? - ===========  ELEMENTS  =========== -//
const items = document.querySelectorAll('.item');

//? - ===========  fromTo  =========== -//
//? - ===========  fromTo  =========== -//
gsap.fromTo('.item3', { x: -50, y: -50 }, { duration: 3, opacity: 0.5, x: 100, y: 50 })