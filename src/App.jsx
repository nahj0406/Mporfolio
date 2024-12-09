//* eslint-disable */
// 유효성 검사 무시용1
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
import NightSky from './js/Nightsky.jsx'

function App() {

	// redux 변수 - 네비탭용
	let naviTitle = useSelector((state)=> state.naviTitle)

	// useEffect(() => {
	// 	액티브업셋('active');
	// }, []);

	return (
		<div className='App'>
			<NightSky></NightSky>
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
