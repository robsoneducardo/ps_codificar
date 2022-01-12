import React from "react";
// import '../borders.css';

export default function Modal(props){

    function modalDescribeHide(){
        document.getElementById("modal-describe").style.visibility="hidden";
    }

    // document.getElementById("modal-describe").style.visibility="hidden";

    return(
        <div id="modal-describe" className="modal modal-container">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body">
                        <p id="modal-seller">
                            Vendedor:
                            João Pedro Barcelos
                        </p>
                        <p id="modal-customer">
                            Cliente:
                            Sônia Borges Mattos
                        </p>
                        <p id="modal-description">
                            Descrição: Suspensão de Caminhão
                        </p>
                        <p id="modal-value">
                            Valor:
                            R$3.500,00
                        </p>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-primary btn-modal" onClick={modalDescribeHide}>ok</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
