import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import data from '../utils/routesData'

const Root = () => {
  return (
    <Routes>
      <Route element={<Navbar />}>
        {
          data.map(({ id, element, path }) => (
            <Route path={path} key={id} element={element} />
          ))
        }
        <Route path="*" element={<h1>404 NOT FOUND</h1>} />
      </Route>
    </Routes>
  )
}

export default Root