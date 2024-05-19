import React from 'react'
import {Route ,Routes} from "react-router-dom"
import MainPage from '../pages/MainPage/MainPage'
import DetailPage from '../pages/detailPage/DetailPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<MainPage/>}></Route>
        <Route path='/:id' element={<DetailPage/>}></Route>
        <Route path='/:' element={<ErrorPage/>}></Route>
    </Routes>
  )
}

export default MainRoutes