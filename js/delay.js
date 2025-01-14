import { gsap } from "gsap";

const title = document.querySelector('.title h1');
const pre = document.querySelectorAll('pre');
const items = document.querySelectorAll('.item');

gsap.from(title, { duration: 2, opacity: 0, y: 100, ease: 'power3.out' })
gsap.from(pre, { delay: .5, duration: 2, opacity: 0, y: 100, ease: 'power3.out' })
gsap.from(items, { delay: 1, duration: 2, opacity: 0, y: 100, ease: 'power3.out', stagger: .1 })