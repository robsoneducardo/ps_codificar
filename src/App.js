import './App.css';
import Filter from "./components/Filter";
import Budget from "./components/Budget";
import Modal from "./components/Modal";


function App(props) {

    // EM CASO DE ERRO AO ACESSAR A API, MOSTRA TELA DE ERRO.
    if (!(props.budgets.length) && props.budgets.length !== 0) {
        return (<div className="alert alert-danger" role="alert">
            Houve um erro ao Carregar os dados.
        </div>);
    }

    // This function returns for the budgets the functions to be added to the buttons.
    // The returned function updates the values inhibited by modal and turns it to visible.
    function editModalMaker(id) {
        return () => {
            props.budgets.forEach(budget => {
                if (budget.id === id) {
                    console.log(budget.seller);
                    document.getElementById("modal-seller").innerHTML = "Vendedor: " + budget.seller;
                    document.getElementById("modal-customer").innerHTML = "Cliente: " + budget.customer;
                    document.getElementById("modal-description").innerHTML = "Descrição: " + budget.description;
                    document.getElementById("modal-value").innerHTML = "Valor: " + budget.value;
                }
            })
            document.getElementById("modal-describe").style.visibility = "visible";
        }
    }

    const budgetList = props.budgets?.map(budget => (
                    <Budget key={budget.id} customer={budget.customer}
                            seller={budget.seller} description={budget.description}
                            value={budget.value}
                            editModal={editModalMaker(budget.id)}
                    />
            )
    );

    return (
            <div className="App">
                <header className="row">
                    <div className="col-12">
                        <h1>Oficina Online</h1>
                        <Modal/>
                    </div>
                </header>
                <main>
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-lg-5 col-md-8 col-sm-11 col-12 sizer">
                                <h2>Orçamentos</h2>
                                <div className="row">
                                    {/*<div className="col-12">*/}
                                    {/*    <Filter/>*/}
                                    {/*</div>*/}
                                    <div className="row justify-content-center rowling">
                                        <div className="col-10 rolling">
                                            <ul>
                                                {/*<Budget/>*/}
                                                {budgetList}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <footer className="row align-items-center">
                    <div className="col-12">
                        <p>
                            Desenvolvido pela
                            <img src="./logo-cod.png" width="80px" alt="Codifica"/>
                        </p>
                    </div>
                </footer>
            </div>
    );
}

export default App;
