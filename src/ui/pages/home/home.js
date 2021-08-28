import React, { useContext, useEffect } from "react";
import ProductContext from "../../../context/product.context";
import LayoutPage from "../layout/layout";

const HomePage = () => {
  const productCtx = useContext(ProductContext);

  const formatPrice = (price) => {
    return `$ ${new Intl.NumberFormat().format(price)}`
  }

  useEffect(() => {
    productCtx.setMatch();
    console.log(productCtx.match);
  }, [])

  return (
    <LayoutPage>
      <section id="container-cards" className="container-cards">
        {productCtx.match &&
          <p>No se encontraron coincidencias, por favor intentelo de nuevo</p>
        }
        {productCtx.information && productCtx.information.map((product, index) => {
          return <div id="card" className="card" >
            <section className="container-imgs ">
              <img id="img-product" className="img-product" alt="ima-product" src={product.thumbnail} />
            </section>
            <section className="container-information">
              <div id="name-product" className="name-product">
                <p id="price" className="price">{formatPrice(product.price)}{product.shipping.free_shipping &&
                  <img id="icon-shipping" className="icon-shipping" src="/img/ic_shipping.png" alt="icon-shipping" />
                }</p>
                {product.title}</div>
            </section>
            <section id="container-city">
              <p>{product.address.city_name}</p>
            </section>
          </div>
        })}
      </section>
    </LayoutPage>
  );
};

export default HomePage;
