import { gsap } from "gsap";

const item3 = document.querySelector(".item3");
const item4 = document.querySelector(".item4");

gsap.set([item3, item4], { opacity: 0.5, x: 100, y:-100, backgroundColor: "red" });
