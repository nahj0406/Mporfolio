/* eslint-disable */
import {useState, useEffect} from 'react';
import axios from 'axios';
import {useSelector } from 'react-redux';
import gsapAni from '../js/pot';
import { gsap } from "gsap";

function Portpolio() {

   useEffect(() => {
      gsapAni();

      const planitDraw = () => {
         const canvas = document.getElementById('planit_ik');
         let canvasWidth = canvas.width = 500;
         let canvasHeight = canvas.height = 400;
         const ctx = canvas.getContext('2d');
         const imgElem = new Image();
         imgElem.src = '/public/img/@port_planit_01.png';
         
   
         imgElem.addEventListener('load', ()=> {
            ctx.clearRect(0, 0, canvasWidth, canvasHeight); // 기존 그림 초기화
            ctx.drawImage(imgElem, 0, 0, canvasWidth, canvasHeight);
         });
   
      };

      planitDraw();
   }, []);
   
   let portItem = useSelector((state)=> state.portItem);

   return (
      <div id="pot_body" className='body_sty'>
         <section className="sec1">
            <div className="canvasBox">
               <canvas id='planit_ik'></canvas>
               <h2 className='rubik'>
                  <span>아이케이 에이전시</span> <br />
                  2022.03 ~ 2024.07
               </h2>
            </div>

            <div className="ComtBox Comt__ty1 containerV1">
               <p className="text1 DGMo">
                  그린컴퓨터아카데미를 수료한 뒤 아이케이라는 웹에이전시에 입사했습니다. <br />
                  아이케이에서는 3개월의 수습기간 이후 정규직으로 전환한 뒤 기업, 공공기관, 프렌차이즈 등 <br />
                  여러가지 프로젝트를 그누보드를 토대로 메인 퍼블리싱부터 약간의 php 개발 등을 맡아 작업했습니다. <br />
                  약 2년 9개월의 시간 동안 아이케이에 머물면서 저는 더욱 성장할 수 있었고 <br />
                  이내 곧 다시 우주로 떠나야 함을 직감했습니다.
               </p>
            </div>
         </section>

         <section className="sec2 containerV1">
            <ul className="listBox">
               {
                  portItem.map(function(a, i) {
                     return (
                        <ListItem key={i} i={i} plItem={a}></ListItem>
                     )
                  })
               }
            </ul>
         </section>
      </div>
   )
}

function ListItem({plItem, i}) {
   return (
      <li>
         <div className="hover_box">
            {plItem.title}
         </div>
      </li>
   )
}

export default Portpolio;