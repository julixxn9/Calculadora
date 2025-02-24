import React, { useState } from "react";
import Boton from "./Boton.jsx";
import '../styles/App.css'
import Pantalla from "./Pantalla.jsx";
import { evaluate } from 'mathjs';

function App() {

    const[ operacion, cambiarOperacion ] = useState("")

    const agregarCaracter = (caracter) => {
        cambiarOperacion(operacion + caracter)   
    }
    // esto sirve para borrar el campo de texto de la pantalla
    const borrar = () => {
        cambiarOperacion(operacion.slice(0,-1)); // elimina el último carácter de la operación
    };

    const borrarTodo = () => {
        cambiarOperacion("");
    }

    const calcular = () => {
        cambiarOperacion(evaluate(operacion))
    }

    return (
        <div className="App">
            <h1>Calculadora</h1>
            <div className="contenedor">
                <Pantalla entrada={operacion} />
                <div className="fila">
                    <Boton hacerClic= {agregarCaracter}>{"("}</Boton>
                    <Boton hacerClic= {agregarCaracter}>{")"}</Boton>
                    <Boton hacerClic= {borrar}>&#9003;</Boton>
                    <Boton hacerClic= {agregarCaracter}>/</Boton>
                </div>
                <div className="fila">
                    <Boton hacerClic= {agregarCaracter}>7</Boton>
                    <Boton hacerClic= {agregarCaracter}>8</Boton>
                    <Boton hacerClic= {agregarCaracter}>9</Boton>
                    <Boton hacerClic= {agregarCaracter}>*</Boton>
                </div>
                <div className="fila">
                    <Boton hacerClic= {agregarCaracter}>6</Boton>
                    <Boton hacerClic= {agregarCaracter}>5</Boton>
                    <Boton hacerClic= {agregarCaracter}>4</Boton>
                    <Boton hacerClic= {agregarCaracter}>-</Boton>
                </div>
                <div className="fila">
                    <Boton hacerClic= {agregarCaracter}>3</Boton>
                    <Boton hacerClic= {agregarCaracter}>2</Boton>
                    <Boton hacerClic= {agregarCaracter}>1</Boton>
                    <Boton hacerClic= {agregarCaracter}>+</Boton>
                </div>
                <div className="fila">
                    <Boton hacerClic= {borrarTodo}>AC</Boton>
                    <Boton hacerClic= {agregarCaracter}>0</Boton>
                    <Boton hacerClic= {agregarCaracter}>.</Boton>
                    <Boton hacerClic= {calcular}>=</Boton>
                </div>
            </div>
        </div>
    )
}

// agregar funcionalidad a los demas botones

export default App;