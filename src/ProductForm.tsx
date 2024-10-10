import React, { useState, useEffect } from 'react';
import { Product } from './types';

interface ProductFormProps {
  addProduct: (product: Product) => void;
  editProduct: (product: Product) => void;
  productToEdit?: Product | null;
}

const ProductForm: React.FC<ProductFormProps> = ({ addProduct, editProduct, productToEdit }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState('');

  useEffect(() => {
    if (productToEdit) {
      setName(productToEdit.name);
      setPrice(productToEdit.price);
      setCategory(productToEdit.category || '');
    } else {
      setName('');
      setPrice(0);
      setCategory('');
    }
  }, [productToEdit]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || price <= 0) {
      alert('Please fill in a valid name and price greater than 0.');
      return;
    }

    if (productToEdit) {
      editProduct({ ...productToEdit, name, price, category });
    } else {
      addProduct({ id: Date.now(), name, price, category });
    }

    setName('');
    setPrice(0);
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        Price:
        <input type="number" value={price} onChange={(e) => setPrice(parseFloat(e.target.value))} required />
      </label>
      <label>
        Category:
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
      </label>
      <button type="submit">{productToEdit ? 'Update Product' : 'Add Product'}</button>
    </form>
  );
};

export default ProductForm;
