import React, { useState, useEffect } from 'react';
import ProductTable from './ProductTable';
import ProductForm from './ProductForm';
import { Product } from './types';
import './App.css'; 

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [productToEdit, setProductToEdit] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  // Load products from localStorage when app loads
  useEffect(() => {
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, []);

  // Save products to localStorage whenever they are updated
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const addProduct = (product: Product) => {
    setProducts([...products, product]);
  };

  const editProduct = (updatedProduct: Product) => {
    setProducts(products.map(p => (p.id === updatedProduct.id ? updatedProduct : p)));
    setProductToEdit(null); // Reset edit mode after update
  };

  const deleteProduct = (id: number) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const handleEditClick = (product: Product) => {
    setProductToEdit(product); // Set product to edit
  };

  const handleSelectProduct = (id: number) => {
    setSelectedProducts(prevSelected => 
      prevSelected.includes(id) 
        ? prevSelected.filter(productId => productId !== id) 
        : [...prevSelected, id]
    );
  };

  const deleteSelectedProducts = () => {
    setProducts(products.filter(product => !selectedProducts.includes(product.id)));
    setSelectedProducts([]); // Reset selected products
  };

  // Pagination 
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(products.length / productsPerPage);

  // Filtered products based on search term
  const filteredProducts = currentProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    (product.category && product.category.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="App">
      <h1>Product Management App</h1>
      
      {/* Product Form */}
      <ProductForm addProduct={addProduct} editProduct={editProduct} productToEdit={productToEdit} />

      {/* Search Input */}
      <input 
        type="text" 
        placeholder="Search by name or category" 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} 
      />

      {/* Bulk Delete Button */}
      <button onClick={deleteSelectedProducts} disabled={selectedProducts.length === 0}>
        Delete Selected
      </button>

      {/* Product Table */}
      <ProductTable 
        products={filteredProducts} 
        deleteProduct={deleteProduct} 
        handleEditClick={handleEditClick}
        handleSelectProduct={handleSelectProduct}
        selectedProducts={selectedProducts}
      />

      {/* Pagination Controls */}
      <div>
        <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1}>Previous</button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
};

export default App;
