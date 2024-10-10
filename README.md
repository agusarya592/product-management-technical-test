# Product Management App

A simple product management app built using **ReactJS** with **TypeScript**. This app allows users to manage a list of products by adding, editing, deleting, and searching products. All product data is stored in **localStorage** for persistence even after the page is reloaded.

## Features

- **View Product List**: Displays a table of products with columns for product name, price, and category. Actions to edit or delete a product are also provided.
- **Add a Product**: Users can add new products through a form. Fields include product name (required), price (required, must be greater than 0), and category (optional).
- **Edit a Product**: Users can edit any product by clicking the "Edit" button, which pre-fills the form with the product’s current data.
- **Delete a Product**: Users can remove a product by clicking the "Delete" button, which removes the product from the list and from localStorage.
- **LocalStorage Integration**: The product list is saved to and loaded from localStorage, so the list persists across page reloads.
- **Search Functionality**: Users can search for products by name or category.
- **Pagination**: Displays a limited number of products per page with buttons to navigate through pages.
- **Bulk Delete**: Users can select multiple products and delete them all at once.

## Technologies Used

- **ReactJS** (with hooks: `useState`, `useEffect`)
- **TypeScript** for static typing
- **CSS** for styling (or Tailwind CSS if applicable)
- **localStorage** for data persistence

## Prerequisites

- **Node.js** (>= 14.x.x)
- **npm** or **yarn**

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/agusarya592/product-management-technical-test.git
2. Navigate into the project directory:

   ```bash
   cd product-management-app
3. Install the dependencies:

   Using npm:
   ```bash
   npm install
   ```

   Or using yarn:
   ```bash
   yarn install
   ```
4. Running the Project
   To run the project locally, use the following command:

   Using npm:
   ```bash
   npm start
   ```

   Or using yarn:
   ```bash
   yarn start
   ```
   
