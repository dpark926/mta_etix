import React from 'react'
import { SketchPicker } from 'react-color';
import '../styles/ColorBlock.css';

function ColorBlock(props) {

  return (
    <div className="colorblock-main">
      <div className='each-block block1' onClick={props.toggleColor} style={{backgroundColor: props.block1}}></div>
      <div className='each-block block2' onClick={props.toggleColor} style={{backgroundColor: props.block2}}></div>
      <div className='each-block block3' onClick={props.toggleColor} style={{backgroundColor: props.block3}}></div>
      <div className="sketch-picker-wrapper">
        <div className='sketch-picker'>
          {props.colorToggle ?
            <SketchPicker
              color={ props.block1 }
              onChangeComplete={ props.handleChangeComplete1 }
            /> : null}
        </div>
        <div className='sketch-picker'>
          {props.colorToggle ?
            <SketchPicker
              color={ props.block2 }
              onChangeComplete={ props.handleChangeComplete2 }
            /> : null}
        </div>
        <div className='sketch-picker'>
          {props.colorToggle ?
            <SketchPicker
              color={ props.block3 }
              onChangeComplete={ props.handleChangeComplete3 }
            /> : null}
        </div>
      </div>
    </div>
  )
}

export default ColorBlock
