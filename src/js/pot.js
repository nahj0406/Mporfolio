/* eslint-disable */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";


function gsapAni() {
gsap.registerPlugin(ScrollTrigger);

let $Banner_text = document.querySelector('#pot_body .sec1 .ComtBox');
// let $bannerWidth = $Banner_text.width();
// let $Banner_text2 = $('.main_banner .pin_text h3');

gsap.to('#pot_body .sec1', {
   y: 0, // y축 최종 위치
   opacity: 1,
   startAt: {y: 400, opacity: 0}, // 시작 위치 설정
   duration: 0.5,
   scrollTrigger: {
       trigger: $Banner_text,
       start: 'top top',
       end: '+=400',
       ease: 'power1.inOut',
       pin: true,
       scrub: 1,
       markers: true,
   },
});

}

export default gsapAni;