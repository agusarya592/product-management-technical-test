import React from 'react';
import { Product } from './types';

interface ProductTableProps {
  products: Product[];
  deleteProduct: (id: number) => void;
  handleEditClick: (product: Product) => void;
  handleSelectProduct: (id: number) => void;
  selectedProducts: number[];
}

const ProductTable: React.FC<ProductTableProps> = ({ 
  products, 
  deleteProduct, 
  handleEditClick, 
  handleSelectProduct,
  selectedProducts
}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Select</th>
          <th>Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.length > 0 ? products.map(product => (
          <tr key={product.id}>
            <td>
              <input 
                type="checkbox" 
                checked={selectedProducts.includes(product.id)} 
                onChange={() => handleSelectProduct(product.id)}
              />
            </td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.category || 'Unknown'}</td>
            <td>
              <button onClick={() => handleEditClick(product)}>Edit</button>
              <button onClick={() => deleteProduct(product.id)}>Delete</button>
            </td>
          </tr>
        )) : (
          <tr>
            <td colSpan={5}>No products available.</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default ProductTable;
