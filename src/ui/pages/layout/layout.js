import React from 'react';
import HeaderComponent from '../../components/header/header';

/*Este componente Layout lo creé para que la App quede escalable
   Es decir, no tener que repetir el componente Header(contiene el buscador) cada
   que lo necesite sino que se usa el layout y se manda el componente que deseo renderizar
   como children en la segunda sectión*/
const LayoutPage = ({ children }) => {
    return (<>
        <section id="section-searcher" className="layout">
            <HeaderComponent></HeaderComponent>
        </section>
        <main id="contenido" >{children}</main>
    </>)
}
export default LayoutPage;