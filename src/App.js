import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  return (
    <div className="container-fluid background-image custom-font">
      <div className="row menu">
        <div className="col-6">League of Libertalia</div>
        <div className="col-6">
          <div className="row d-flex justify-content-end">
            <div className="col d-flex justify-content-end">Champion Select</div>
            <div className="col-2 d-flex justify-content-end">OP.GG</div>
            <div className="col-1 d-flex justify-content-end"><i className="fa-solid fa-gear"></i>
            </div>
          </div>
        </div>
      </div>
      {/*Settings*/}
      <div className="container-full">
      <div className="row mb-2">
        <div className="col">Settings</div>
      </div>
      {/*Client Hook*/}
      <div className="row others">
        <div className="col">
          <div className="row">
            <div className="col-6">Client Hook</div>
        </div>
        <div className="row">
          <div className="col-6">
            Possibilita a interpretação e modificação de dados do client
          </div>
        </div>
        </div>
        <div className="col d-flex justify-content-end"><i className="fa-solid fa-toggle-off"></i></div>
      </div>
      {/* End Client Hook*/}
      <hr />
      {/* Exibir Nome de Invocador*/}
      <div className="row others">
        <div className="col">
          <div className="row">
            <div className="col-6">Exibir nome de invocador</div>
          </div>
          <div className="row">
            <div className="col-6">
              Exibe o nome de todos os invocadores na champion select da solo Queue
            </div>
          </div>
        </div>
        <div className="col d-flex justify-content-end"><i className="fa-solid fa-toggle-off"></i></div>
      </div>
      {/* End Exibir Nome de Invocador*/}
      <hr />
      {/* Auto Pick*/}
      <div className="row others">
        <div className="col">
          <div className="row">
            <div className="col-6">Auto Pick</div>
          </div>
          <div className="row">
            <div className="col-6">
              Serve para Selecionar o Champion no client automaticamente
            </div>
          </div>
        </div>
        <div className="col d-flex justify-content-end"><input className="form-check-input" type="checkbox" checked="">{/*test of toggle*/}</input></div>
        {/* End Auto Pick*/}
      </div>
    </div>
    </div>
  );
}

export default App;
