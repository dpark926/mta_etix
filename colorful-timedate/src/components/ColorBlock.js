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
      colorToggle: false,
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

  toggleColor = () => {
    this.setState({
      colorToggle: !this.state.colorToggle
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
      blocks.push(<div className={`each-block block${i + 1}`} onClick={this.toggleColor} style={divStyle[i]}></div>)
    }

    return (
      <div className="colorblock-main">
        {/* {blocks} */}
        <div className='each-block block1' onClick={this.toggleColor} style={{backgroundColor: this.state.block1}}></div>
        <div className='each-block block2' onClick={this.toggleColor} style={{backgroundColor: this.state.block2}}></div>
        <div className='each-block block2' onClick={this.toggleColor} style={{backgroundColor: this.state.block3}}></div>
        <div>
          <div>
            {this.state.colorToggle ?
              <SketchPicker
                color={ this.state.block1 }
                onChangeComplete={ this.handleChangeComplete1 }
              /> : null}
          </div>
          <div>
            {this.state.colorToggle ?
              <SketchPicker
                color={ this.state.block2 }
                onChangeComplete={ this.handleChangeComplete2 }
              /> : null}
          </div>
          <div>
            {this.state.colorToggle ?
              <SketchPicker
                color={ this.state.block3 }
                onChangeComplete={ this.handleChangeComplete3 }
              /> : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ColorBlock
