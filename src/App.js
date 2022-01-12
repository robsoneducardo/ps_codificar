import logo from './logo.svg';
import './App.css';
import Filter from "./components/Filter";
import Budget from "./components/Budget";


function App(props) {
  // console.log(props.budgets.length)
  if (!(props.budgets.length)){
    return (<div className="alert alert-danger" role="alert">
      Houve um erro ao Carregar os dados.
    </div>);
  }

  const budgetList = props.budgets?.map(budget => (
          <Budget key={budget.id} customer={budget.customer}
                  seller={budget.seller} description={budget.description}
                  value={budget.value} />
          )
  );

  return (
    <div className="App">
      <header className="row">
        <div className="col-12">
          <h1>Oficina Online</h1>
        </div>
      </header>
      <main>
        <div className="container-fluid">
          <div className="row justify-content-center" >
            <div className="col-lg-5 col-md-8 col-sm-11 col-12 sizer">
              <h2>Orçamentos</h2>
              <div className="row">
                <div className="col-12">
                  <Filter/>
                </div>
                <div className="row justify-content-center rowling" >
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
            <img src="./logo-cod.png" width="80" />
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
