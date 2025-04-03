import { useState } from "react"

function App(){

  const [nome, setNome] = useState('Ronaldo')

  const Formulario = (props) => {

    return (
      <div>
        <input
          placeholder={props.sombra}
          className="nome"
          onChange={(e)=>{setNome(e.target.value)}}
          name="nome"
          type="text" />
        <button
        onClick={()=>{(props.mensagem != null) ? alert(props.mensagem) : alert("TEXTO PADRAO")}}
        className= "botao">
        {(props.textoBotao != null) ? props.textoBotao : "CLIQUE AQUI"}
        </button>
      </div>
    )
  }
  return (
    <div>
      <h3>Pizzaria 2C</h3>
      <Formulario sombra="Digite seu nome..." textoBotao="ENVIAR NOME" />
      <Formulario sombra="Digite seu e-mail..." textoBotao="E-MAIL" />
      <Formulario sombra="(11) 90000-0000" textoBotao="CELULAR" />
      <Formulario mensagem="Mensagem enviada pelo App" />
      <Formulario/>
    </div>
  )
}

export default App
