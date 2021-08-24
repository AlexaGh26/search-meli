import React from 'react';

const HeaderComponent = () => {
    return <>
    <header id="header-search" className="header">
        <img id="logo" alt="logo" src="/img/Logo_ML.png"></img>
        <section id="input-search" className="input-search">
            <input id="search" className="search"></input>
            <section id="container-icon-search" className="container-icon-search">
                <img id="icon-search" alt="icon-search" className="icon-search" src="/img/ic_Search.png"></img>
            </section>
        </section>
    </header>
    </>
}

export default HeaderComponent;