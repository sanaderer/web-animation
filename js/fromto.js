import { gsap } from "gsap";

const items = document.querySelectorAll('.item');

gsap.fromTo(items, { x: -50, y: -50 }, { duration: 3, opacity: 0.5, x: 100, y: 50 })