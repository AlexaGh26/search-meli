import React from 'react';

const HeaderComponent = () => {
    return <>
    <header id="header-search">
        <img id="logo" alt="logo" src="/img/Logo_ML.png"></img>
        <section id="input-search" >
            <input id="search" placeholder="Nunca dejes de buscar" ></input>
            <section id="container-icon-search" >
                <img id="icon-search" alt="icon-search" src="/img/ic_Search.png"></img>
            </section>
        </section>
    </header>
    </>
}

export default HeaderComponent;