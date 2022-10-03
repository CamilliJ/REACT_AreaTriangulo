import './App.css'
import { useState, Component } from 'react'
import logo from './assets/logo.png'

class App extends Component{

  constructor(props) {
    super(props)
    this.state = {
      altura: 0,
      base: 0,
      resultado: 0,
      mensage: ""
    }
    this.DescobrirArea = this.DescobrirArea.bind(this)
  }

  DescobrirArea = () => {
    var base = document.getElementById("base").value
    var altura = document.getElementById("altura").value

    if(base == "" && altura == ""){
      this.setState({ mensage: "Digite a Base e a Altura!"})
    }else{
      var resultado = (base * altura) / 2
      var mensagem = "Área: " + resultado
      this.setState({ resultado: resultado, mensage:mensagem})

    }
    
    console.log(resultado)
  }

  render(){
    return (
      <div className="App">
         <img src={logo} alt="" className='image'/>
          <p className='title'>Área do Triângulo</p>
         <div className="inputs">
            <input type="number" name="base" id="base" placeholder='Base' className='input-text' />
            <input type="number" name="altura" id="altura" placeholder='Altura' className='input-text' />
         </div>
         <button className='button' onClick={this.DescobrirArea}> Resultado </button>
  
         <p className='resultado'>{this.state.mensage}</p>
      </div>
    )
  }
 
}

export default App
