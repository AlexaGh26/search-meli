import React, { useContext } from "react";
import ProductContext from "../../../context/product.context";

const HeaderComponent = () => {
  const productCtx = useContext(ProductContext);
  const amendSearch = () => {
    productCtx.getSearchResults(productCtx.lookupValue);
  };
  return (
    <>
      <header id="header-search" className="header-search">
        <div className="content">
          <img id="logo" className="logo" alt="logo" src="/img/Logo_ML.png"></img>
          <section className="input-search">
            <input
              id="search"
              placeholder="Nunca dejes de buscar"
              className="search"
              onKeyUp={(e) => e.key === "Enter" && amendSearch()}
              onChange={(e) => productCtx.getlookUpValue(e.target.value)}
            />
            <button className="container-icon-search" onClick={(e) => amendSearch()}>
              <img
                id="icon-search"
                alt="icon-search"
                src="/img/ic_Search.png"
                className="icon-search"
              ></img>
            </button>
          </section>
        </div>
      </header>
    </>
  );
};

export default HeaderComponent;