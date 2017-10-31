// import React from 'react'
// import { SketchPicker } from 'react-color';
// import '../styles/ColorBlock.css';
//
// function ColorBlock() {
//   let blocks = []
//   let divStyle = []
//
//   for (var i = 0; i < 3; i++) {
//     let threeColors = []
//     for (var j = 0; j < 3; j ++) {
//       let r = Math.floor(Math.random() * 256)
//       threeColors.push(r)
//     }
//
//     divStyle.push({backgroundColor: 'rgba(' + threeColors + ',1)'})
//   }
//
//   for (var i = 0; i < 3; i++) {
//     blocks.push(<div className={`each-block block${i + 1}`} style={divStyle[i]}></div>)
//   }
//
//   return (
//     <div className="colorblock-main">
//       {blocks}
//       <SketchPicker />
//     </div>
//   )
// }
//
// export default ColorBlock


import React, {Component} from 'react'
import { SketchPicker } from 'react-color';
import '../styles/ColorBlock.css';

class ColorBlock extends Component {

  constructor() {
    super()

    let d = new Date()
    this.state = {
      block1: '',
      block2: '',
      block3: '',
    }
  }

  handleChangeComplete = (color) => {
    this.setState({ block1: color.hex });
    console.log(this.state.block1)
  };

  render() {
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
        {/* {blocks} */}
        <div className='each-block block1' style={{backgroundColor: this.state.block1}}></div>
        <div className='each-block block2' style={{backgroundColor: 'rgba(222, 222, 222, 1)'}}></div>
        <div className='each-block block2' style={{backgroundColor: 'rgba(222, 222, 222, 1)'}}></div>
        <SketchPicker
          color={ this.state.background }
          onChangeComplete={ this.handleChangeComplete }
        />
      </div>
    )
  }
}

export default ColorBlock
