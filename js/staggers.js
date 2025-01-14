import { gsap } from "gsap";

const items = document.querySelectorAll(".item");

gsap.from(items, {
  duration: 2,
  scale: 0,
  stagger: {
    duration: 1,
    rotation: 360,
    opacity: 1,
    delay: 0.5,
    stagger: 0.2,
    ease: "sine.out",
    force3D: true,
  },
});

document.querySelectorAll(".item").forEach(function(item) {
    item.addEventListener("click", function() {
      gsap.to(".item", {
        duration: 0.5, 
        opacity: 0, 
        y: -100, 
        stagger: 0.1,
        ease: "back.in"
      });
    });
  });