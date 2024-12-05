//* eslint-disable */
// 유효성 검사 무시용1
/* eslint-disable react/prop-types */
import {Suspense} from 'react';
// Suspense, useEffect, useState lazy
import {Routes, Route, Link} from 'react-router-dom'
// Link, useNavigate
import {useSelector } from 'react-redux'
// useDispatch
import './App.css'
import Intro from './pages/Intro.jsx'
// import Greeting from './pages/greeting.jsx'
import Portpolio from './pages/portpolio.jsx'
import NightSky from './js/Nightsky.jsx'

function App() {

	// redux 변수 - 네비탭용
	let naviTitle = useSelector((state)=> state.naviTitle)

	return (
		<div className='App'>
			<NightSky></NightSky>
			<Routes>
				<Route path="/" element={
					<Suspense fallback={<div>로딩중!</div>}>
						<Intro></Intro>
					</Suspense>
					

				} />

				{/* <Route path="/greeting" element={
					<Greeting naviTitle={naviTitle}></Greeting>
				} /> */}

				<Route path="/portpolio" element={
					<Suspense fallback={<div>로딩중!</div>}>
						<Portpolio></Portpolio>
					</Suspense>
				} />
			</Routes>

			<Navigater naviTitle={naviTitle}></Navigater>
		</div>
	)
}

function Navigater({ naviTitle }) {

	// const navigate = useNavigate();

	return (
		<div id="Navi">
			<Link className='DGMo' to="/"><span>{naviTitle[0]}</span></Link>
			{/* <Link className='DGMo' onClick={()=> {navigate('/pages/greeting')}}><span>I&#39;AM...</span></Link> */}
			{/* <Link className='DGMo' to="/greeting"><span>{naviTitle[1]}</span></Link> */}
			<Link className='DGMo' to="/portpolio"><span>{naviTitle[1]}</span></Link>
			<Link className='DGMo' to="/github"><span>{naviTitle[2]}</span></Link>
		</div>
	)
}

export default App
