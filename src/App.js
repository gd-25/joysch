import logo from './logo.svg';
import './styles/index.css';
import { Switch, Route } from 'react-router-dom';

import Landing from './components/views/Landing'
import Paire from './components/views/Paire'
import Contact from './components/views/Contact'

import Navbar from './components/navigation/Navbar'
import Footer from './components/navigation/Footer'

import Carreau from './components/cartes/Carreau'
import Trefle from './components/cartes/Trefle'
import Pique from './components/cartes/Pique'

import Sojasun from './components/campagnes/carreau/Sojasun'
import Inegalites from './components/campagnes/carreau/Inegalites'
import Eure from './components/campagnes/carreau/Eure'
import CR from './components/campagnes/carreau/CR'

import Inceste from './components/campagnes/pique/Inceste'
import SantePublique from './components/campagnes/pique/SantePublique'
import LaCimade from './components/campagnes/pique/LaCimade'
import WWF from './components/campagnes/pique/WWF'

import Cajo from './components/campagnes/trefle/Cajo'
import Contexte from './components/campagnes/trefle/Contexte'
import M from './components/campagnes/trefle/M'
import MaisonMacci from './components/campagnes/trefle/MaisonMacci'

import Joy from './components/views/cv/Joy'
import Lea from './components/views/cv/Lea'

function App() {
   return (
      <>
         <Navbar />
         <Switch>
            <Route exact path="/" component={Landing}></Route>
            <Route path="/pique" component={Pique}></Route>
            <Route path="/trefle" component={Trefle}></Route>
            <Route path="/carreau" component={Carreau}></Route>

            <Route path="/cv" component={Paire}></Route>
            <Route path="/contact" component={Contact}></Route>

            <Route path="/sojasun" component={Sojasun}></Route>
            <Route path="/eure" component={Eure}></Route>
            <Route path="/inegalites-salariales" component={Inegalites}></Route>
            <Route path="/cr" component={CR}></Route>

            <Route path="/inceste" component={Inceste}></Route>
            <Route path="/sante-publique" component={SantePublique}></Route>
            <Route path="/la-cimade" component={LaCimade}></Route>
            <Route path="/wwf" component={WWF}></Route>

            <Route path="/cajo" component={Cajo}></Route>
            <Route path="/contexte" component={Contexte}></Route>
            <Route path="/m" component={M}></Route>
            <Route path="/maison-macci" component={MaisonMacci}></Route>

            <Route path="/cv/joy" component={Joy}></Route>

         </Switch>
         <Footer />
      </>
   );
}

export default App;
