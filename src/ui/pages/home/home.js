import React, { useContext } from "react";
import ProductContext from "../../../context/product.context";
import LayoutPage from "../layout/layout";

const HomePage = () => {
  // Pasando el contexto a una variable para usarlo en mi componente
  const productCtx = useContext(ProductContext);

  //Esta función formatea el valor de cada producto
  const formatPrice = (price) => {
    return `$ ${new Intl.NumberFormat().format(price)}`
  }

  /* En el Html le puse los id a todos los elementos para que React sepa exactamente cual elemento actualizar
   al hacer un cambio, tambien por buena práctica*/
  return (
    <LayoutPage>
      <section id="container-cards" className="container-cards">
        {productCtx.information && productCtx.information.items.map((product, index) => {
          return <div id="card" className="card" >
            <section id="container-imgs" className="container-imgs">
              <img id="img-product" className="img-product" alt="ima-product" src={product.picture} />
            </section>
            <section className="container-information">
              <div id="name-product" className="name-product">
                <p id="price" className="price">{formatPrice(product.price)}{product.free_shipping &&
                  <img id="icon-shipping" className="icon-shipping" src="/img/ic_shipping.png" alt="icon-shipping" />
                }</p>
                {product.title}</div>
            </section>
            <section id="container-city">
              <p>{product.city_name}</p>
            </section>
          </div>
        })}
      </section>
    </LayoutPage>
  );
};

export default HomePage;
