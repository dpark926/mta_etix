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
      block1: 'red',
      block2: 'orange',
      block3: 'blue',
      colorToggle1: false,
      colorToggle2: false,
      colorToggle3: false,
    }
  }

  handleChangeComplete1 = (color) => {
    this.setState({ block1: color.hex });
  }

  handleChangeComplete2 = (color) => {
    this.setState({ block2: color.hex });
  }

  handleChangeComplete3 = (color) => {
    this.setState({ block3: color.hex });
  }

  toggle1 = () => {
    this.setState({
      colorToggle1: !this.state.colorToggle1
    })
  }

  toggle2 = () => {
    this.setState({
      colorToggle2: !this.state.colorToggle2
    })
  }

  toggle3 = () => {
    this.setState({
      colorToggle3: !this.state.colorToggle3
    })
  }

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
        <div className='each-block block1' onClick={this.toggle1} style={{backgroundColor: this.state.block1}}></div>
        <div className='each-block block2' onClick={this.toggle2} style={{backgroundColor: this.state.block2}}></div>
        <div className='each-block block2' onClick={this.toggle3} style={{backgroundColor: this.state.block3}}></div>
        {this.state.colorToggle1 ?
          <SketchPicker
            color={ this.state.block1 }
            onChangeComplete={ this.handleChangeComplete1 }
          /> : null}
        {this.state.colorToggle2 ?
          <SketchPicker
            color={ this.state.block2 }
            onChangeComplete={ this.handleChangeComplete2 }
          /> : null}
        {this.state.colorToggle3 ?
          <SketchPicker
            color={ this.state.block3 }
            onChangeComplete={ this.handleChangeComplete3 }
          /> : null}
      </div>
    )
  }
}

export default ColorBlock
