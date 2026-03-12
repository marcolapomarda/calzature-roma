import Home from './pages/Home';
import Prodotti from './pages/Prodotti';
import IlNegozio from './pages/IlNegozio';
import Contatti from './pages/Contatti';
import CategoriaDettaglio from './pages/CategoriaDettaglio';
import ProdottoDettaglio from './pages/ProdottoDettaglio';
import SottocategoriaDettaglio from './pages/SottocategoriaDettaglio';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "Prodotti": Prodotti,
    "IlNegozio": IlNegozio,
    "Contatti": Contatti,
    "CategoriaDettaglio": CategoriaDettaglio,
    "ProdottoDettaglio": ProdottoDettaglio,
    "SottocategoriaDettaglio": SottocategoriaDettaglio,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};