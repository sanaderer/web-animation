import { gsap } from "gsap";

//? - ===========  ELEMENTS  =========== -//
//? - ===========  ELEMENTS  =========== -//
const items = document.querySelectorAll('.item');

//? - ===========  callbacks  =========== -//
//? - ===========  callbacks  =========== -//
gsap.to('.item3', { delay:1, duration: 3, scale: 0,

    onStart: function() {
        console.log('The animation has started')
    },
    onComplete: onComplete,
    onUpdate: onUpdateExternal,
    onRepeat: function() {
        console.log('The animation is repeating')
    },
})

function onUpdateExternal() {
    console.log('The animation is in progress, its an external function')
}
function onComplete() {
    gsap.to(items, { duration: 3, opacity: 0, stagger: 0.2 })
}