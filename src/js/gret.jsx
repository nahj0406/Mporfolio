/* eslint-disable */
import { useEffect, useLayoutEffect  } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";


export function useComtBox() {
   useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);

      ScrollTrigger.create({
         trigger: '#gr_body .sec1',
         start: '-200px top',
         end: '+=600',
         pin: true, // 섹션 고정
         // markers: true, // 디버그용 마커 표시
         // onLeave: () => {
         //    // end 지점에서 실행할 애니메이션
         //    gsap.to('#gr_body .sec1 .bg_box', { backgroundColor: 'red', duration: 1 });
         // },
      });
     
      // Timeline 생성
      const timeline = gsap.timeline();
      
      // from 애니메이션 추가
      timeline
         .fromTo(
            '#gr_body .sec1 .bg_box',
            { width: 0},
            { 
               width: '100%', duration: 1.5,
               scrollTrigger: {
                  trigger: '#gr_body .sec1',
                  start: 'top center',
                  end: '+=200',
                  scrub: 1, // 스크롤과 동기화
                  // markers: true, // 디버그용 마커
               },
            }
         )
         .fromTo(
            '#gr_body .sec1 .comt_unit_1',
            { y: 50, opacity: 0 },
            { 
               y: 0, opacity: 1, duration: 1,
               scrollTrigger: {
                  trigger: '#gr_body .sec1',
                  start: '-200px top',
                  end: '+=200',
                  scrub: 1, // 스크롤과 동기화
                  // markers: true, // 디버그용 마커
               },
            }
         )

      return () => {
         // ScrollTrigger와 타임라인 정리(중복 내용 예상하고 forEach 작업)
         ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
         timeline.kill();
      };
   }, []);
}


