import { configureStore, createSlice } from '@reduxjs/toolkit'
// import user from './store/userSlice.js'
// import data from './data.js'

// 공용
let naviTitle = createSlice({
   name : 'naviTitle',
   initialState : ['MAIN', 'PORTPOLIO', 'GITHUB']
   // `I'AM...`, 
})


// i'am...
// let skillSet = createSlice({
//    name: 'skillSet',
//    initialState : [
//       {title : 'html5', percent: 95},
//       {title : 'css3', percent: 95},
//       {title : 'javascript', percent: 70},
//       {title : 'jquery', percent: 85},
//       {title : 'react', percent: 50},
//       {title : 'redux', percent: 60},
//       {title : 'php', percent: 70},
//       {title : 'bootstrap', percent: 90},
//       {title : 'photoshop', percent: 60},
//       {title : 'illustrator', percent: 30}
//    ]
// })

let portItem = createSlice({
   name : 'portItem',
   initialState : [
      {title : '블루웨일브루하우스1',},
      {title : '블루웨일브루하우스2',},
      {title : '블루웨일브루하우스3',},
      {title : '블루웨일브루하우스4',}
   ]
})


// createSlice로 만든 state는 아래에 꼭 등록해야 사용 가능
export default configureStore({
   reducer: {
      naviTitle : naviTitle.reducer,
      portItem : portItem.reducer,
      // skillSet : skillSet.reducer,
   }
})