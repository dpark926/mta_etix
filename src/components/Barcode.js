import React from 'react'
import barcodeImg from '../styles/imgs/2d-barcode.png'

function Barcode () {
  return (
    <div>
      <div className='barcode-main'>
        <img src={barcodeImg}></img>
      </div>
    </div>
  )
}

export default Barcode
