/* eslint-disable */
import {useState, useEffect} from 'react';
import axios from 'axios';
import {useSelector } from 'react-redux'
import useGret from '../js/gret.jsx'; // 전용 js 파일

function Greeting() {

   // redux
   let naviTitle = useSelector((state)=> state.naviTitle);
   let skillSet = useSelector((state)=> state.skillSet);
   
   useGret();

   let [행성갯수, 행성갯수변경] = useState(3);
   let [체류일자, 체류일변경] = useState(['2020 ~ 2021...', '2022.03 ~ 2024.07...', '2024.07 ~']);
   let [행성설명, 행성설명변경] = useState([
      `지구에서 저는 군대를 전역한 뒤 대전에 있는 그린컴퓨터 아카데미에서 웹디자인, 
      퍼블리싱 교육 5개월 과정을 수료했습니다. 이때까진 아직 웹이라는 우주가 얼마나 드넓고 복잡한 것인지 
      잘 이해하지 못했습니다...`,

      `취업을 위해 5개월 정도 우주를 떠돌던 중, 아이케이라는 웹에이전시에 입사했습니다. 
      아이케이에서는 3개월의 수습기간 이후 정규직으로 전환한 뒤 기업, 공공기관, 프렌차이즈 등 여러가지 프로젝트를 
      그누보드를 토대로 메인 퍼블리싱부터 약간의 php 개발 등을 맡아 작업했습니다. 
      약 2년 9개월의 시간 동안 아이케이에 머물면서 저는 더욱 성장할 수 있었고 
      이내 곧 다시 우주로 떠나야 함을 직감했습니다.`,

      `현재는 아이케이를 떠나 새로운 별에 닿기 위해 계속 코딩의 바다를 여행하고 있습니다. 
      여행하는 동안 평소에 관심을 가지고 있던 프론트엔드와 인터렉티브앱에 대해서 좀 더 
      관심을 가지고 공부할 시간을 가질 수 있었으며 연료가 다 떨어지기 전에 저를 반겨줄 새로운 행성으로 
      계속 나아가는 중입니다.`
   ])

   return (
      <div id="gr_body" className='body_sty'>
         {/* <section className="containerV1"> */}
            <article className="sec1 ComtBox containerV1">
               <h2 className='rubik'>
                  Thank you for <br /> visiting my spacecship!
               </h2>

               <p className="text1 DGMo">
                  안녕하세요! 웹퍼블리셔 나현종이라고 합니다. <br />
                  저는 약 2년 9개월 정도 코딩 우주에서의 항해를 계속하고 있으며 <br />
                  현재는 프론트엔드와 인터렉티브앱에 대해서 관심을 가지고 <br />
                  드넓은 우주같은 코딩의 바다를 떠돌고 있습니다!
               </p>
            </article>

            <article className="sec2 containerV1">
               <ul className="skill_list">
                  {
                     skillSet.map(function(a, i) {
                        return (
                           <Skill_list key={i} i={i} skill ={a}></Skill_list>
                        )
                     })
                  }
               </ul>
            </article>

            <article className="sec3">
               <div className="planit_wrap">
                  {
                     Array(행성갯수).fill().map(function(_, i) {
                        return (
                           <Planit key={i} i={i} 체류일자={체류일자} 행성설명={행성설명}></Planit>
                        )
                     })
                  }
               </div>
            </article>


         {/* </section> */}

         <h2 id="page_title" className="DGMo">{naviTitle[1]}</h2>
      </div>
   )
}


// sec2 component
function Skill_list({skill, i}) {

   let skill_count = i + 1;
   if(skill_count < 10) { // 두자릿수부터는 앞자리에 0 추가 안함.
      skill_count = `0` + `${i + 1}`;
   }

   return (
      <li>
         <div className='chart_box'>
            <figure className='img'>
               <img src={`./img/@skill_logo_${skill_count}.png`} alt={skill.title} />
            </figure>
         </div>
         <span className='data-percent'>{skill.percent}</span>
         <h4 className='rubik'>{skill.title}</h4>
      </li>
   )
}


// sec3 component
function Planit(props) {
   return (
      <div id={`Pitem_0${props.i+1}`} className='planit_box'>
         <div className="unit">
            <div className="row">
               <div className="item">
                  <canvas id={`planit_0${props.i+1}`} className='planit' width="388" height="480"></canvas>
                  <h3 className="days rubik">{props.체류일자[props.i]}</h3>
                  <div className="ComtBox Comt__ty1">
                     <p className="text1 DGMo">
                        {props.행성설명[props.i]}
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Greeting;