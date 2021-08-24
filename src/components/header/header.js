import React from 'react';

const HeaderComponent = () => {
    return <>
    <header id="header-search" className="header-search">
        <img id="logo" className="logo" alt="logo" src="/img/Logo_ML.png"></img>
        <section className="input-search" >
            <input id="search" placeholder="Nunca dejes de buscar" className="search" ></input>
            <section className="container-icon-search" >
                <img id="icon-search" alt="icon-search" src="/img/ic_Search.png" className="icon-search"></img>
            </section>
        </section>
    </header>
    </>
}

export default HeaderComponent;