import React from 'react'
import Navbar from '../Navbar/Navbar'

export default function Container(props:any) {
// export default function Container({children}:any) {
  return (
    <>
      <Navbar />
      {/* {children} */}
      {props.children}
    </>
  )
}
