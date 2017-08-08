import React from 'react'
import '../styles/ColorBlock.css';

function ColorBlock() {
  let blocks = []
  let divStyle = []

  for (var i = 0; i < 3; i++) {
    let threeColors = []
    for (var j = 0; j < 3; j ++) {
      let r = Math.floor(Math.random() * 256)
      threeColors.push(r)
    }

    divStyle.push({backgroundColor: 'rgba(' + threeColors + ',1)'})
  }

  for (var i = 0; i < 3; i++) {
    blocks.push(<div className={`each-block block${i + 1}`} style={divStyle[i]}></div>)
  }

  return (
    <div className="colorblock-main">
      {/* <h1>Color Block 1</h1> */}
      {blocks}
    </div>
  )
}

export default ColorBlock
