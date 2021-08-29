import React, { useContext } from "react";
import ProductContext from "../../../context/product.context";
import LayoutPage from "../layout/layout";

const DetailsPage = () => {
    // Pasando el contexto a una variable para usarlo en mi componente
    const productCtx = useContext(ProductContext);

    //Esta función formatea el valor de cada producto
    const formatPrice = (price) => {
        return `$ ${new Intl.NumberFormat().format(price)}`
    }

    return (
        <>
            <LayoutPage>
                {productCtx.details && <div className="container-details">
                    <section className="card-details">
                        <section className="container-img-details">
                            <img id="img-product-details" className="img-product-details" alt="img-product" src={productCtx.details.item.thumbnail} />
                            <h3>Descripción del producto</h3>
                            <p>{productCtx.details.item.dataDescription}}</p>
                        </section>
                        <section className="container-title">
                            <p>{productCtx.details.item.condition ? 'Nuevo - ' : ''}{productCtx.details.item.sold_quantity} Vendidos</p>
                            <h3>{productCtx.details.item.title}</h3>
                            <p className="price-details">{formatPrice(productCtx.details.item.price.amount)}</p>
                            <button className="button-details">Comprar</button>
                        </section>
                    </section>
                </div>
                }
            </LayoutPage>
        </>
    );
};

export default DetailsPage;
