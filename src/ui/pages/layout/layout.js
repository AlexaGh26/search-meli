import React from 'react';
import HeaderComponent from '../../components/header/header';

const LayoutPage = ({ children }) => {
    return (<>
        <section className="layout">
            <HeaderComponent></HeaderComponent>
        </section>
        <main>{children}</main>
    </>)
}
export default LayoutPage;