import React from "react";
import { useState } from "react";

const NewCount = (props)=>{

    const [newContador, setnewContador] = useState(props.valorInicial);

    return (
        <>
        <div>Contador: {newContador}</div>
        <button onClick={() => {setnewContador(newContador + props.valor)}}>Incrementar</button>
        <button onClick={() => {setnewContador(newContador - props.valor)}}>Decrementar</button>
        <button onClick={() => {setnewContador(10)}}>Reset</button>
        </>
    )

}

export default NewCount;