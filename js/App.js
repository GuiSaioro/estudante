// React
import React, {Component} from 'react'

// Rotas e views
import Footer from './components/views/Shared/_Footer'
import Header from './components/views/Shared/_Header'
import Alertas from './components/views/Shared/Alertas'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomePage from './components/views/Home/HomePage'
import Lei from "./components/views/ALei/ALei"
import Validador from "./components/views/Validador/Validador"
import ValidacaoCie from "./components/views/Validador/ValidacaoCie"
import IntegrarFormPage from "./components/views/Validador/IntegrarFormPage"
import BancoDeDadosNacional from "./components/views/BancoDeDadosNacional/BancoDeDadosNacional"
import Perguntas from "./components/views/PerguntasRespostas/Perguntas"

import Texto40 from "./components/views/Texto40/Texto40"
import Termos from "./components/views/Termos/Termos"
import Noticias from "./components/views/Noticias/Noticias"
import SingleNoticia from "./components/views/Noticias/SingleNoticia"

// Funcionalidades
import ScrollToTop from "./components/ScrollToTop";
import ReactGA from 'react-ga'


// Class "Master" default!
class App extends Component {
  componentDidMount(){
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  render() {
   

    return (
      <Router>
        <ScrollToTop>
          <div className="App">
            <Header/>

            <div className="page-content">
              <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/lei" component={Lei}/>
                <Route exact path="/lei/:page" component={Lei}/>

                
                <Route exact path="/validador/:codigoUso/:dataNascimento" component={ValidacaoCie}/>

                <Route exact path="/val" component={Validador}/>
                <Route exact path="/val/integre" component={IntegrarFormPage}/>
                <Route exact path="/val/:page" component={Validador}/>
                <Route exact path="/val/:codigoUso/:dataNascimento" component={ValidacaoCie}/>

                <Route exact path="/noticias" component={Noticias} />
                <Route exact path="/noticias/:slug" component={SingleNoticia} />

                <Route exact path="/chaves-publicas" component={BancoDeDadosNacional}/>
                <Route exact path="/perguntas-e-respostas" component={Perguntas}/>
                <Route exact path="/cumprimento-da-cota" component={Texto40}/>

                <Route exact path="/termos" component={Termos}/>

                <Route exact path="/:codigoUso/:dataNascimento" component={ValidacaoCie}/>

                <Route path="/faq-app/index.html" onEnter={() => window.location.reload()} />

                <Route component={NotFound}/>
              </Switch>

              <Alertas/>
            </div>

            <Footer/>
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;


// WEBPACK FOOTER //
// ./src/App.js