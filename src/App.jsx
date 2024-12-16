//* eslint-disable */
// 유효성 검사 무시용
/* eslint-disable react/prop-types */
import {Suspense, useState, useEffect} from 'react';
// lazy
import {Routes, Route, Link, useLocation} from 'react-router-dom'
// Link, useNavigate
import { useSelector } from 'react-redux'
// useDispatch
import './App.css'
import Intro from './pages/Intro.jsx'
import Greeting from './pages/greeting.jsx'
import Portfolio from './pages/portfolio.jsx'
// import NightSky from './js/Nightsky.jsx'
import Lenis from '@studio-freight/lenis';

function App() {

	// redux 변수 - 네비탭용
	let naviTitle = useSelector((state)=> state.naviTitle)

	useEffect(() => {
		// Lenis 인스턴스 생성
		const lenis = new Lenis({
			smoothWheel: true,
      	smoothTouch: true,
			wheelMultiplier: 0.3, // 휠 스크롤 속도 감소, 기본값 1
      	touchMultiplier: 2, // 터치 스크롤 속도 증가 기본값 2
		 });

		// 애니메이션 루프 설정
		function raf(time) {
		  lenis.raf(time);
		  requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);
  
		// 클린업: Lenis 인스턴스 제거
		return () => {
		  lenis.destroy();
		};
	}, []);

	return (
		<div className='App'>
			{/* <NightSky></NightSky> */}
			<Routes>
				<Route path="/" element={
					<Suspense fallback={<div>로딩중!</div>}>
						<>
							<Intro></Intro>
							<Greeting></Greeting>
						</>
					</Suspense>
					

				} />

				<Route path="/portfolio" element={
					<Suspense fallback={<div>로딩중!</div>}>
						<Portfolio></Portfolio>
					</Suspense>
				} />
			</Routes>

			<Navigater naviTitle={naviTitle}></Navigater>
		</div>
	)
}

function Navigater({ naviTitle }) {
	const location = useLocation();
 
	const Links = [
	  { to: '/' },
	  { to: '/portfolio' },
	  { to: '/github' },
	];
 
	return (
	  <div id="Navi">
		 {naviTitle.map((title, i) => {
			// 현재 경로와 to 값 비교
			const isActive = location.pathname === Links[i].to ? 'active' : '';
 
			return (
			  <Link key={i} className={`DGMo ${isActive}`} to={Links[i].to}>
				 <span>{title}</span>
			  </Link>
			);
		 })}
	  </div>
	);
 }

export default App
