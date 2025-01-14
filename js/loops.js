import { gsap } from "gsap";

const items = document.querySelectorAll('.item');

//repeat -1 means infinite
// yoyo - true means it will go back and forth
gsap.from(items, {  duration: 2, scale: 0.5, ease: 'power2.inOut', repeat: -1, yoyo: true, repeatDelay: 1 })