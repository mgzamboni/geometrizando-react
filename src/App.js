import React from 'react';

import Square from './Components/Square/index'

import Circle from './Components/Circle'

import Triangle from './Components/Triangle'

import Rectangle from './Components/Rectangle'

import Figure from './Components/Figure'

import Art from './Components/Art'

class App extends React.Component {

/*

  Componentes
  Props -> Propriedades

*/

  render () {
    return (
      <div>
        <h1 className="title">Geometrizando</h1>

        <Art>
        <Figure type="square" color="red" />
        <Figure type="circle" color="green" />
        <Figure type="triangle" color="blue" />
        <Figure type="rectangle" color="black" />
        <Figure type="square" color="red" />
        <Figure type="circle" color="green" />
        <Figure type="triangle" color="blue" />
        <Figure type="rectangle" color="black" />
        <Figure type="square" color="red" />
        <Figure type="circle" color="green" />
        <Figure type="triangle" color="blue" />
        <Figure type="rectangle" color="black" />
        <Figure type="square" color="red" />
        <Figure type="circle" color="green" />
        <Figure type="triangle" color="blue" />
        <Figure type="rectangle" color="black" />
        </Art>
        <Figure type="square" color="red" />
        <Figure type="circle" color="green" />
        <Figure type="triangle" color="blue" />
        <Figure type="rectangle" color="black" />

      </div>
    )
  }
}

export default App;