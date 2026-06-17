import axios from "axios";
import { useState, useEffect } from "react";

import ProductCard from "./ProductCard";

export default function ProductPage() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("products.json");
            setProducts(response.data);
        }
        fetchData();
    }, []);

    return <div className="container">
        <h1>Our Products</h1>
        <div className="row">
            {
                products.map(p => (
                    <div key={p.id} className="col-md-3 mb-4">
                        <ProductCard
                            name={p.name}
                            price={p.price}
                            imageUrl={p.imageUrl}
                        />
                    </div>
                ))
            }
        </div>
    </div>
}