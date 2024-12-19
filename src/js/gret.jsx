/* eslint-disable */
import { useEffect, useLayoutEffect  } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useSelector } from 'react-redux'


export function useComtBox() {

   let moonData = useSelector((state)=> state.moonData);

   useEffect(() => {
      let imgBox = document.querySelector('#career .img');

      if (imgBox) {
         moonData.forEach((data, index) => {
            if (['블루웨일브루하우스', '청호불교문화원', '대전문화재단'].includes(data.title)) {
               // 중복 체크를 위한 고유 ID 설정
               const uniqueId = `moon-${index+1}`;
               if (!imgBox.querySelector(`#${uniqueId}`)) {
                  const moon = document.createElement("a");
                  moon.href = data.url;
                  moon.target = "_blank";
                  moon.rel = "noopener noreferrer";
                  moon.style.backgroundImage = `url(${data.moonbg})`;
                  moon.id = uniqueId; // 고유 ID 부여
                  
                  imgBox.appendChild(moon);
               }
            }
         });
      }

   }, []);

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
     
      // sec1 Timeline 생성
      const timelineSec1 = gsap.timeline();
      
      // from 애니메이션 추가
      timelineSec1
         .fromTo(
            '#gr_body .sec1 .bg_box',
            { width: 0},
            { 
               width: '100%',
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
               y: 0, opacity: 1,
               scrollTrigger: {
                  trigger: '#gr_body .sec1',
                  start: '-200px top',
                  end: '+=200',
                  scrub: 1, // 스크롤과 동기화
                  // markers: true, // 디버그용 마커
               },
            }
         )


      // sec2 Timeline 생성
      const timelineSec2 = gsap.timeline();
   
      timelineSec2
         .fromTo('#gr_body .sec2 #education .img', 
            {x: 800,}, 
            { x: 0,
               scrollTrigger: {
                  trigger: '#gr_body .sec2',
                  start: '-900px top',
                  end: '+=900',
                  scrub: 1,
                  markers: true, // 디버그용 마커
               },
             }
         )
         .fromTo('#gr_body .sec2 #education .text_box', 
            { y: 30, opacity: 0}, 
            { y: 0, opacity: 1,
               scrollTrigger: {
                  trigger: '#gr_body .sec2',
                  start: '-300px top',
                  end: '+=200',
                  scrub: 1,
                  // markers: true, // 디버그용 마커
               },
             }
         )
         .fromTo('#gr_body .sec2 #career .img', 
            {x: 800,}, 
            { x: 0,
               scrollTrigger: {
                  trigger: '#gr_body .sec2 #career',
                  start: '-900px top',
                  end: '+=800',
                  scrub: 1,
                  // markers: true, // 디버그용 마커
               },
             }
         )
         .fromTo('#gr_body .sec2 #career .text_box', 
            { y: 30, opacity: 0}, 
            { y: 0, opacity: 1,
               scrollTrigger: {
                  trigger: '#gr_body .sec2 #career',
                  start: '-400px top',
                  end: '+=200',
                  scrub: 1,
                  markers: true, // 디버그용 마커
               },
             }
         );

      return () => {
         // ScrollTrigger와 타임라인 정리(중복 내용 예상하고 forEach 작업)
         ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
         // ScrollTrigger 및 타임라인 정리
         timelineSec1.kill();
         timelineSec2.kill();
      };
   }, []);
}


