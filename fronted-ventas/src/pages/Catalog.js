import React, { useEffect, useState } from 'react';

const Catalog = () => {
    const [products, setProducts] = useState([]); // Inicializa products como un array
    const [loading, setLoading] = useState(true); // Para manejar el estado de carga
    const [error, setError] = useState(null); // Para manejar errores de carga

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('URL_DE_TU_API'); // Reemplaza con la URL de tu API
                if (!response.ok) {
                    throw new Error('Error al cargar los productos');
                }
                const data = await response.json();
                console.log(data); // Verifica que sea un array
                setProducts(data.products || []); // Asegúrate de que sea un array
            } catch (err) {
                setError(err.message); // Captura el error
            } finally {
                setLoading(false); // Cambia el estado de carga
            }
        };

        fetchProducts();
    }, []);

    // Manejo de errores
    if (loading) {
        return <div>Cargando productos...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    // Asegúrate de que products sea un array
    if (!Array.isArray(products)) {
        return <div>No hay productos disponibles.</div>;
    }

    const productItems = products.map(product => (
        <div key={product.id}>
            <h2>{product.name}</h2>
            <p>Precio: {product.price}</p>
            {/* Aquí puedes añadir más detalles sobre el producto */}
        </div>
    ));

    return (
        <div>
            <h1>Catálogo de Productos</h1>
            {productItems}
        </div>
    );
};

export default Catalog;
