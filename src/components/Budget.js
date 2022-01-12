import React from "react";
import "../style.css"

export default function Budget(props){

    return(
            <div className={"item"}>
                <p>Vendedor: {props.seller}</p>
                <p>Cliente: {props.customer}</p>
                {/*<p>Descrição: {props.description}</p>*/}
                <p>Valor: {props.value}</p>
                <button className="btn btn-primary btn-budget " onClick={props.editModal}>Mostrar</button>
            </div>
    )
}
