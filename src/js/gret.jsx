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
         end: '+=1500',
         pin: true, // 섹션 고정
         markers: true, // 디버그용 마커 표시
      });
     
       // Timeline 생성
      const timeline = gsap.timeline({
         scrollTrigger: {
            trigger: '#gr_body .sec1',
            start: '-200px top',
            end: '+=100',
            scrub: 1, // 스크롤과 동기화
            markers: true, // 디버그용 마커
         },
      });
     
      // from 애니메이션 추가
      timeline
         .fromTo(
            '#gr_body .sec1 .comt_unit_1',
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1 }
         )

      return () => {
         // ScrollTrigger와 타임라인 정리
         ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
         timeline.kill();
      };
   }, []);
}


export function useGret() {
   useEffect(() => {

      // 행성 애니메이션
      const drawImageOnCanvas = (id, src) => {
         const canvas = document.getElementById(id);
         if (canvas) {
            const ctx = canvas.getContext('2d');
            const imgElem = new Image();
            imgElem.src = src;
   
            const drawImage = () => {
               ctx.clearRect(0, 0, canvas.width, canvas.height); // 기존 그림 초기화
               ctx.drawImage(imgElem, 0, 0);
            };
   
            imgElem.addEventListener('load', drawImage);
   
            // cleanup 함수로 이벤트 리스너 제거
            return () => {
               imgElem.removeEventListener('load', drawImage);
            };
         }
         return () => {}; // 아무것도 반환하지 않을 경우 기본적으로 빈 함수 반환
      };
   
      const cleanupFunctions = [
         drawImageOnCanvas('planit_01', '/public/img/@planit_01.png'),
         drawImageOnCanvas('planit_02', '/public/img/@planit_02.png'),
         drawImageOnCanvas('planit_03', '/public/img/@planit_03.png'),
      ];
   
   
      
      // skill 퍼센티지 그래프
      const circleChts = document.querySelectorAll('.circle_cht');
      circleChts.forEach((idx) => {
         const ctx = idx.getContext('2d');
   
         // 사이즈 설정
         const circleSize = 120;
         idx.width = circleSize;
         idx.height = circleSize;
   
         idx.style.width = `${circleSize}px`;
         idx.style.height = `${circleSize}px`;
   
         // 중심좌표, 반지름 설정
         const centerXY = circleSize / 2; // 중심 좌표
         const radius = 55; // 반지름
   
         // 그려지는 값 설정
         const dataPercent = idx.dataset.percent; // 리덕스에 정해둔 각 객체의 값을 가져옴.
         const percentage = dataPercent; // 원하는 퍼센트 (0 ~ 100)
         const maxValue = 100;
         const targetAngle = (percentage / maxValue) * Math.PI * 2; // 목표 각도
         const startAngle = -Math.PI / 2; // 12시 방향
         const endAngle = startAngle + targetAngle; // 끝 각도
   
         // 애니메이션 변수
         let currentAngle = startAngle; // 현재 각도 (애니메이션 시작 각도)
   
         const animateStroke = () => {
            ctx.clearRect(0, 0, idx.width, idx.height); // 기존 그림 초기화
   
            // 선 스타일 설정
            ctx.lineWidth = 10;
            ctx.strokeStyle = 'rgba(255,255,0,1)';
            ctx.lineCap = 'round';
   
            // 원 그리기
            ctx.beginPath();
            ctx.arc(centerXY, centerXY, radius, startAngle, currentAngle, false); // currentAngle 사용
            ctx.stroke();
            ctx.closePath();
   
            // 현재 각도를 증가
            currentAngle += 0.1; // 애니메이션 속도
   
            // 목표 각도까지 애니메이션 실행
            if (currentAngle <= endAngle) {
               requestAnimationFrame(animateStroke); // 다음 프레임 호출
            }
         };
   
         // 애니메이션 시작
         animateStroke();
      });
   
   
   
      // cleanup 함수로 이벤트 리스너 및 초기화
      return () => {
         cleanupFunctions.forEach((cleanup) => cleanup());
      };
   }, []);

}

