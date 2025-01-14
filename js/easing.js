import { gsap } from "gsap";

const items = document.querySelectorAll('.item');

gsap.from(items, { duration: 3, scale:0, stagger: 0.1, ease: 'elastic.in(1, 0.3)'})