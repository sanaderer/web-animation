import { gsap } from "gsap";

//? - ===========  ELEMENTS  =========== -//
//? - ===========  ELEMENTS  =========== -//
const item4 = document.querySelectorAll('.item4');
const item3 = document.querySelector('.item3');

//? - ===========  from  =========== -//
//? - ===========  from  =========== -//
gsap.from(item3, { duration: 3, opacity: 0.5, x: -100, y: 50 })

gsap.from(item4, { duration: 6, opacity: 0.9, scale: 0.5, x:100, y:100, backgroundColor: "red", boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" })