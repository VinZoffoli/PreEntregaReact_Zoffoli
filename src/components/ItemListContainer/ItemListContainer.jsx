import React from 'react';

const products = [
    { id: 1, nombre: 'Guts', precio: 19.99 },
    { id: 2, nombre: 'Mewtwo', precio: 24.99 },
    { id: 3, nombre: 'Sora', precio: 29.99 },
    { id: 4, nombre: 'Link', precio: 22.99 },
];

function ItemListContainer({ greeting }) {
    return (
        <div className="container">
            <h1>{greeting}</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <strong>{product.nombre}</strong> - ${product.precio}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ItemListContainer;
