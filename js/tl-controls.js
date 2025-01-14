import { gsap } from "gsap";

//? - ===========  ELEMENTS  =========== -//
//? - ===========  ELEMENTS  =========== -//
const items = document.querySelectorAll('.item');
const play = document.querySelector('.play')
const pause = document.querySelector('.pause')
const resume = document.querySelector('.resume')
const reverse = document.querySelector('.reverse')
const restart = document.querySelector('.restart')
const scale_dowmn = document.querySelector('.scale_dowmn')
const scale_normal = document.querySelector('.scale_normal')
const scale_up = document.querySelector('.scale_up')
const seek = document.querySelector('.seek')
const total = document.querySelector('.total')

//? - ===========  timeline  =========== -//
//? - ===========  timeline  =========== -//
const tl = gsap.timeline({ paused: true })
    .from(items, { duration: 5.375, scale: 0, ease: 'power3.out', stagger: 0.5 })

//? - ===========  CONTROLS  =========== -//
//? - ===========  CONTROLS  =========== -//
play.addEventListener('click', () => tl.play())
pause.addEventListener('click', () => tl.pause())
resume.addEventListener('click', () => tl.resume())
reverse.addEventListener('click', () => tl.reverse())
restart.addEventListener('click', () => tl.restart())
scale_dowmn.addEventListener('click', () => tl.timeScale(0.25))
scale_normal.addEventListener('click', () => tl.timeScale(1))
scale_up.addEventListener('click', () => tl.timeScale(2))
seek.addEventListener('click', () => tl.seek(4))
total.addEventListener('click', () =>{ 
    const duration = tl.totalDuration()
    console.log(duration)
    tl.seek(duration)
})
