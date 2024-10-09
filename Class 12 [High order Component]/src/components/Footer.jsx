import React from 'react'
import './Footer.module.css'
import css from './Footer.module.css'

const Footer = (props) => {
    const {data,setdata} = props;

    return (
    <>
    <div>Footer : {data}</div>
    <div className={`${css.boxs}`}>
    <h2>Jai shreee ram</h2>
    </div>
    </>
  )
}

export default Footer