import React from "react";
import { useState } from "react";

const Count = (props)=>{

    const [contador, setContador] = useState (props.valorInicial);

    return (
        <>
            <div>contador: {contador}</div>
            <button onClick={ ()=> {setContador(contador + props.valor)}}>adicionar</button>
            <button onClick={ ()=> {setContador(contador - props.valor)}}>Decrementar</button>
            <button onClick={ ()=> {setContador(0)}}>Reset</button>
        </>
    )
}

export default Count;