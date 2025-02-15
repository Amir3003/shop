import React, { useState, useEffect } from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import '../style/ProductList.css';

const ProductList = ({ addToCart }) => {
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "manga"));
                const productsData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setProducts(productsData);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProduct();
    }, []);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value.toLowerCase());
    };

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery)
    );

    return (
        <div className="container">
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            </div>
            <ul>
                {filteredProducts.map((product) => (
                    <li key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>Price: {product.price} тг.</p>
                        <button className="add-to-cart-button" onClick={() => addToCart(product)}>Add to cart</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;