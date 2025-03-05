import React, { useState, useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import ProductList from "./components/ProductList.jsx";
import SearchBar from "./components/SearchBar.jsx";
import Pagination from "./components/Pagination.jsx";
import LoadingSpinner from "./components/LoadingSpinner.jsx";
import ErrorMessage from "./components/ErrorMessage.jsx";
import { useTheme } from "./context/ThemeContext.jsx";
import "./App.css";

function AppContent() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 11;
  const { theme, toggleTheme } = useTheme();

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
    setCurrentPage(1); 
  };

  
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className={`app ${theme}`}>
      <header>
        <h1>Product Store</h1>
        <button className="theme-toggle" onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </header>
      <SearchBar search={search} setSearch={setSearch} onSearch={handleSearch} />
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      )}
      <ProductList products={paginatedProducts} />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;