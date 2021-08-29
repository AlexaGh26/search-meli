import React, { useContext } from "react";
import ProductContext from "../../../context/product.context";
import LayoutPage from "../layout/layout";
import { useHistory } from "react-router-dom";

const HomePage = () => {

  const history = useHistory();

  // Pasando el contexto a una variable para usarlo en mi componente
  const productCtx = useContext(ProductContext);

  //Esta función formatea el valor de cada producto
  const formatPrice = (price) => {
    return `$ ${new Intl.NumberFormat().format(price)}`
  }

  function redirectDetails(idProduct) {
    productCtx.getDetails(idProduct);
    history.push(`/items/${idProduct}`);
  }

  /* En el Html le puse los id a todos los elementos para que React sepa exactamente cual elemento actualizar
   al hacer un cambio, tambien por buena práctica*/
  return (
    <LayoutPage>
      <section id="container-cards" className="container-cards">
        <main>
          {productCtx.information && productCtx.information.items.map((product) => {
            return <div id="card" className="card" onClick={() => redirectDetails(product.id)}>
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
            <div className="divider"></div>
          </div>

        })}
        </main>
      </section>
    </LayoutPage>
  );
};

export default HomePage;
