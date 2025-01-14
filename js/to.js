import { gsap } from "gsap";

//? - ===========  ELEMENTS  =========== -//
//? - ===========  ELEMENTS  =========== -//
const items = document.querySelectorAll('.item');

//? - ===========  TO  =========== -//
//? - ===========  TO  =========== -//
gsap.to('.item3', { duration: 3, opacity: 0.5, x:100, y: 50 })