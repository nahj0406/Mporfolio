/* eslint-disable */
// import {IntroMain} from 'react-router-dom'
import {useState, useEffect} from 'react';
import useTypeWriter from '../js/TypeWriter.jsx';
import axios from 'axios';
import {useSelector } from 'react-redux'

function Intro() {

   // redux 변수
   let loadComponent = useSelector((state)=> state.loadComponent);

   //페이지 로드 애니메이션
   let [loadPage, setPage] = useState('');

   // 타이핑
   const [위치좌표, 좌표수정] = useState("123.456.789"); // 위치좌표 상태
   const [delayPassed, setDelayPassed] = useState(false);

   useEffect(() => {

      let loadAni = setTimeout(()=> {setPage('loadPage')}, 100);


      const delayTimeout = setTimeout(() => {
         setDelayPassed(true);
      }, 1000);

      return () => {
         clearTimeout(loadAni);
         setPage('');
         clearTimeout(delayTimeout);
      }
   }, []);
   
   useTypeWriter(위치좌표, delayPassed);
   return (
      <div id="intro_body" className={`body_sty ${loadComponent} ${loadPage}`}>
         <img className="int_name" src="./img/@intro_name_img.png" alt="이름" />
         <img className="rocket" src="./img/@intro_rocket.png" alt="로켓" />

         <div className="textBox">
            <h2 className="rubik">
               <b>w</b>eb <br />
               portpolio
            </h2>
            <h5 className="rubik">2024</h5>
         </div>

         <p className="ip_address DGMo">
            <span id='text'></span>
            <span className='cursor'></span>
         </p>
      </div>
   )
}

export default Intro;