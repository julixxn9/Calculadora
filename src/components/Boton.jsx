import React from "react";
import '../styles/Botones.css'

function Boton(props){
    const operador = (valor)=>{
        if(!Number.isInteger(Number.parseInt(valor))){
            // si es un numero entero duevuelve nada por lo tanto si no es un numero se le asignara la clase
            // osea solamente los que no sean numeros enteros no tendran la clase operador
            return "operador";
        }
        return "";
    }
    const borrarAC = (valor) => {
        if(valor == "AC"){
            
            return " borrador";
        }
        return "";
    }
    
    return(
        <div>
            <button className={`${operador(props.children)}${borrarAC(props.children)}`}
            onClick={
                ()=>{
                    props.hacerClic(props.children);
                }
            }>
                {/* esta funcion evalua cuando son numeros para los estilos*/}
                {props.children}
                {/* concatena el contenido del elemento con el archivo donde lo esportemos */}
            </button>
        </div>
    )
}

export default Boton;