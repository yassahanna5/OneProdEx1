/* import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// مكون لإدارة المنتجات
const ProductManagement = ({ products, categories, onAddProduct, onUpdateProduct, onDeleteProduct }) => {
  const [editingProduct, setEditingProduct] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newProduct, setNewProduct] = useState({
    title: '',
    description: '',
    price: '',
    images: '',
    category_id: '',
    stock: '',
    brand: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value
    });
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditingProduct({
      ...editingProduct,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct(newProduct);
    setNewProduct({
      title: '',
      description: '',
      price: '',
      images: '',
      category_id: '',
      stock: '',
      brand: ''
    });
    setShowAddForm(false);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    onUpdateProduct(editingProduct);
    setEditingProduct(null);
  };

  return (
    <div className="management-section">
      <div className="section-header">
        <h2>Products Management</h2>
        <button 
          className="add-btn"
          onClick={() => setShowAddForm(!showAddForm)}
        >
          {showAddForm ? 'Cancel' : 'Add Product'}
        </button>
      </div>

      {showAddForm && (
        <div className="form-container">
          <h3>Add New Product</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                name="title"
                value={newProduct.title}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                name="description"
                value={newProduct.description}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Price ($)</label>
              <input
                type="number"
                name="price"
                value={newProduct.price}
                onChange={handleInputChange}
                min="0"
                step="0.01"
                required
              />
            </div>
            <div className="form-group">
              <label>Images (comma separated URLs)</label>
              <input
                type="text"
                name="images"
                value={newProduct.images}
                onChange={handleInputChange}
                placeholder="https://example.com/image1.jpg, https://example.com/image2.jpg"
              />
            </div>
            <div className="form-group">
              <label>Category</label>
              <select
                name="category_id"
                value={newProduct.category_id}
                onChange={handleInputChange}
                required
              >
                <option value="">Select a category</option>
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Stock</label>
              <input
                type="number"
                name="stock"
                value={newProduct.stock}
                onChange={handleInputChange}
                min="0"
                required
              />
            </div>
            <div className="form-group">
              <label>Brand (Optional)</label>
              <input
                type="text"
                name="brand"
                value={newProduct.brand}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit" className="submit-btn">Add Product</button>
          </form>
        </div>
      )}

      {editingProduct && (
        <div className="form-container">
          <h3>Edit Product</h3>
          <form onSubmit={handleEditSubmit}>
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                name="title"
                value={editingProduct.title}
                onChange={handleEditInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                name="description"
                value={editingProduct.description}
                onChange={handleEditInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Price ($)</label>
              <input
                type="number"
                name="price"
                value={editingProduct.price}
                onChange={handleEditInputChange}
                min="0"
                step="0.01"
                required
              />
            </div>
            <div className="form-group">
              <label>Images (comma separated URLs)</label>
              <input
                type="text"
                name="images"
                value={editingProduct.images}
                onChange={handleEditInputChange}
                placeholder="https://example.com/image1.jpg, https://example.com/image2.jpg"
              />
            </div>
            <div className="form-group">
              <label>Category</label>
              <select
                name="category_id"
                value={editingProduct.category_id}
                onChange={handleEditInputChange}
                required
              >
                <option value="">Select a category</option>
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Stock</label>
              <input
                type="number"
                name="stock"
                value={editingProduct.stock}
                onChange={handleEditInputChange}
                min="0"
                required
              />
            </div>
            <div className="form-group">
              <label>Brand (Optional)</label>
              <input
                type="text"
                name="brand"
                value={editingProduct.brand}
                onChange={handleEditInputChange}
              />
            </div>
            <div className="form-actions">
              <button type="submit" className="submit-btn">Update Product</button>
              <button 
                type="button" 
                className="cancel-btn"
                onClick={() => setEditingProduct(null)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Category</th>
              <th>Stock</th>
              <th>Brand</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => {
              const category = categories.find(c => c.id === product.category_id);
              return (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.title}</td>
                  <td>${product.price}</td>
                  <td>{category ? category.name : 'N/A'}</td>
                  <td>{product.stock}</td>
                  <td>{product.brand || 'N/A'}</td>
                  <td className="actions">
                    <button 
                      className="edit-btn"
                      onClick={() => setEditingProduct(product)}
                    >
                      Edit
                    </button>
                    <button 
                      className="delete-btn"
                      onClick={() => onDeleteProduct(product.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// مكون لإدارة الفئات
const CategoryManagement = ({ categories, onAddCategory, onUpdateCategory, onDeleteCategory }) => {
  const [editingCategory, setEditingCategory] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newCategory, setNewCategory] = useState({
    name: '',
    slug: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCategory({
      ...newCategory,
      [name]: value
    });
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditingCategory({
      ...editingCategory,
      [name]: value
    });
  };

  // توليد slug تلقائي من الاسم
  useEffect(() => {
    if (newCategory.name && !newCategory.slug) {
      const slug = newCategory.name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
      setNewCategory({
        ...newCategory,
        slug
      });
    }
  }, [newCategory.name]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCategory(newCategory);
    setNewCategory({
      name: '',
      slug: ''
    });
    setShowAddForm(false);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    onUpdateCategory(editingCategory);
    setEditingCategory(null);
  };

  return (
    <div className="management-section">
      <div className="section-header">
        <h2>Categories Management</h2>
        <button 
          className="add-btn"
          onClick={() => setShowAddForm(!showAddForm)}
        >
          {showAddForm ? 'Cancel' : 'Add Category'}
        </button>
      </div>

      {showAddForm && (
        <div className="form-container">
          <h3>Add New Category</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={newCategory.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Slug</label>
              <input
                type="text"
                name="slug"
                value={newCategory.slug}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit" className="submit-btn">Add Category</button>
          </form>
        </div>
      )}

      {editingCategory && (
        <div className="form-container">
          <h3>Edit Category</h3>
          <form onSubmit={handleEditSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={editingCategory.name}
                onChange={handleEditInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Slug</label>
              <input
                type="text"
                name="slug"
                value={editingCategory.slug}
                onChange={handleEditInputChange}
                required
              />
            </div>
            <div className="form-actions">
              <button type="submit" className="submit-btn">Update Category</button>
              <button 
                type="button" 
                className="cancel-btn"
                onClick={() => setEditingCategory(null)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Slug</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map(category => (
              <tr key={category.id}>
                <td>{category.id}</td>
                <td>{category.name}</td>
                <td>{category.slug}</td>
                <td className="actions">
                  <button 
                    className="edit-btn"
                    onClick={() => setEditingCategory(category)}
                  >
                    Edit
                  </button>
                  <button 
                    className="delete-btn"
                    onClick={() => onDeleteCategory(category.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// المكون الرئيسي للوحة التحكم
const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('products');
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  // التحقق من صلاحية المستخدم
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const adminEmail = "adminEngYassaHanna2030@gmail.com";
    
    if (!user || (user.role !== 'admin' && user.email !== adminEmail)) {
      navigate('/log');
      return;
    }
    
    // محاكاة جلب البيانات من API
    const mockProducts = [
      {
        id: 1,
        title: 'Product 1',
        description: 'Description for product 1',
        price: 19.99,
        images: 'https://example.com/image1.jpg',
        category_id: 1,
        stock: 100,
        brand: 'Brand 1',
        createdAt: '2023-01-01',
        updatedAt: '2023-01-01'
      },
      {
        id: 2,
        title: 'Product 2',
        description: 'Description for product 2',
        price: 29.99,
        images: 'https://example.com/image2.jpg',
        category_id: 2,
        stock: 50,
        brand: 'Brand 2',
        createdAt: '2023-01-02',
        updatedAt: '2023-01-02'
      }
    ];

    const mockCategories = [
      {
        id: 1,
        name: 'Category 1',
        slug: 'category-1',
        createdAt: '2023-01-01',
        updatedAt: '2023-01-01'
      },
      {
        id: 2,
        name: 'Category 2',
        slug: 'category-2',
        createdAt: '2023-01-02',
        updatedAt: '2023-01-02'
      }
    ];

    setProducts(mockProducts);
    setCategories(mockCategories);
  }, [navigate]);

  // دوال إدارة المنتجات
  const handleAddProduct = (product) => {
    const newProduct = {
      ...product,
      id: products.length + 1,
      createdAt: new Date().toISOString().split('T')[0],
      updatedAt: new Date().toISOString().split('T')[0]
    };
    setProducts([...products, newProduct]);
    // في تطبيق حقيقي، ستقوم بإرسال البيانات إلى API
    console.log('Product added:', newProduct);
  };

  const handleUpdateProduct = (updatedProduct) => {
    setProducts(products.map(product => 
      product.id === updatedProduct.id 
        ? { ...updatedProduct, updatedAt: new Date().toISOString().split('T')[0] } 
        : product
    ));
    // في تطبيق حقيقي، ستقوم بإرسال البيانات إلى API
    console.log('Product updated:', updatedProduct);
  };

  const handleDeleteProduct = (productId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(product => product.id !== productId));
      // في تطبيق حقيقي، ستقوم بإرسال طلب حذف إلى API
      console.log('Product deleted:', productId);
    }
  };

  // دوال إدارة الفئات
  const handleAddCategory = (category) => {
    const newCategory = {
      ...category,
      id: categories.length + 1,
      createdAt: new Date().toISOString().split('T')[0],
      updatedAt: new Date().toISOString().split('T')[0]
    };
    setCategories([...categories, newCategory]);
    // في تطبيق حقيقي، ستقوم بإرسال البيانات إلى API
    console.log('Category added:', newCategory);
  };

  const handleUpdateCategory = (updatedCategory) => {
    setCategories(categories.map(category => 
      category.id === updatedCategory.id 
        ? { ...updatedCategory, updatedAt: new Date().toISOString().split('T')[0] } 
        : category
    ));
    // في تطبيق حقيقي، ستقوم بإرسال البيانات إلى API
    console.log('Category updated:', updatedCategory);
  };

  const handleDeleteCategory = (categoryId) => {
    if (window.confirm('Are you sure you want to delete this category?')) {
      setCategories(categories.filter(category => category.id !== categoryId));
      // في تطبيق حقيقي، ستقوم بإرسال طلب حذف إلى API
      console.log('Category deleted:', categoryId);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate('/log');
  };

  return (
    <div className="admin-dashboard">
      <div className="sidebar">
        <div className="sidebar-header">
          <h2>Admin Panel</h2>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li>
              <button 
                className={activeTab === 'products' ? 'active' : ''}
                onClick={() => setActiveTab('products')}
              >
                Products
              </button>
            </li>
            <li>
              <button 
                className={activeTab === 'categories' ? 'active' : ''}
                onClick={() => setActiveTab('categories')}
              >
                Categories
              </button>
            </li>
            <li>
              <button onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <div className="main-content">
        <div className="header">
          <h1>Admin Dashboard</h1>
          <div className="user-info">
            <span>Admin User</span>
          </div>
        </div>

        <div className="content">
          {activeTab === 'products' && (
            <ProductManagement 
              products={products}
              categories={categories}
              onAddProduct={handleAddProduct}
              onUpdateProduct={handleUpdateProduct}
              onDeleteProduct={handleDeleteProduct}
            />
          )}

          {activeTab === 'categories' && (
            <CategoryManagement 
              categories={categories}
              onAddCategory={handleAddCategory}
              onUpdateCategory={handleUpdateCategory}
              onDeleteCategory={handleDeleteCategory}
            />
          )}
        </div>
      </div>

      <style jsx>{`
        .admin-dashboard {
          display: flex;
          min-height: 100vh;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #333;
        }

        .sidebar {
          width: 250px;
          background-color: #2c3e50;
          color: white;
          display: flex;
          flex-direction: column;
        }

        .sidebar-header {
          padding: 20px;
          border-bottom: 1px solid #34495e;
        }

        .sidebar-header h2 {
          margin: 0;
          font-size: 1.5rem;
        }

        .sidebar-nav ul {
          list-style: none;
          padding: 0;
          margin: 0;
          flex: 1;
        }

        .sidebar-nav li {
          padding: 0;
        }

        .sidebar-nav button {
          display: block;
          width: 100%;
          padding: 15px 20px;
          background: none;
          border: none;
          color: white;
          text-align: left;
          cursor: pointer;
          font-size: 1rem;
          transition: background-color 0.3s;
        }

        .sidebar-nav button:hover {
          background-color: #34495e;
        }

        .sidebar-nav button.active {
          background-color: #3498db;
        }

        .main-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          background-color: #f5f5f5;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          background-color: white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .header h1 {
          margin: 0;
          font-size: 1.8rem;
          color: #2c3e50;
        }

        .user-info {
          display: flex;
          align-items: center;
        }

        .content {
          flex: 1;
          padding: 20px;
          overflow-y: auto;
        }

        .management-section {
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          margin-bottom: 20px;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          border-bottom: 1px solid #eee;
        }

        .section-header h2 {
          margin: 0;
          font-size: 1.5rem;
          color: #2c3e50;
        }

        .add-btn {
          padding: 8px 16px;
          background-color: #3498db;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 0.9rem;
          transition: background-color 0.3s;
        }

        .add-btn:hover {
          background-color: #2980b9;
        }

        .form-container {
          padding: 20px;
          border-bottom: 1px solid #eee;
        }

        .form-container h3 {
          margin-top: 0;
          margin-bottom: 20px;
          color: #2c3e50;
        }

        .form-group {
          margin-bottom: 15px;
        }

        .form-group label {
          display: block;
          margin-bottom: 5px;
          font-weight: 500;
          color: #555;
        }

        .form-group input,
        .form-group textarea,
        .form-group select {
          width: 100%;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 1rem;
        }

        .form-group textarea {
          resize: vertical;
          min-height: 100px;
        }

        .form-actions {
          display: flex;
          gap: 10px;
          margin-top: 20px;
        }

        .submit-btn {
          padding: 10px 20px;
          background-color: #27ae60;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 1rem;
          transition: background-color 0.3s;
        }

        .submit-btn:hover {
          background-color: #219653;
        }

        .cancel-btn {
          padding: 10px 20px;
          background-color: #e74c3c;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 1rem;
          transition: background-color 0.3s;
        }

        .cancel-btn:hover {
          background-color: #c0392b;
        }

        .table-container {
          padding: 20px;
          overflow-x: auto;
        }

        table {
          width: 100%;
          border-collapse: collapse;
        }

        table th,
        table td {
          padding: 12px 15px;
          text-align: left;
          border-bottom: 1px solid #eee;
        }

        table th {
          background-color: #f8f9fa;
          font-weight: 600;
          color: #2c3e50;
        }

        table tr:hover {
          background-color: #f8f9fa;
        }

        .actions {
          display: flex;
          gap: 10px;
        }

        .edit-btn {
          padding: 6px 12px;
          background-color: #f39c12;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 0.85rem;
          transition: background-color 0.3s;
        }

        .edit-btn:hover {
          background-color: #e67e22;
        }

        .delete-btn {
          padding: 6px 12px;
          background-color: #e74c3c;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 0.85rem;
          transition: background-color 0.3s;
        }

        .delete-btn:hover {
          background-color: #c0392b;
        }

        @media (max-width: 768px) {
          .admin-dashboard {
            flex-direction: column;
          }
          
          .sidebar {
            width: 100%;
            flex-direction: row;
            justify-content: space-between;
            padding: 10px;
          }
          
          .sidebar-nav ul {
            display: flex;
            flex-direction: row;
          }
          
          .sidebar-nav li {
            margin-right: 10px;
          }
          
          .form-actions {
            flex-direction: column;
          }
          
          .actions {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default AdminDashboard;*/






















import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("products");
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({ show: false, message: "", type: "" });

  // Products state
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [viewingProduct, setViewingProduct] = useState(null);

  // Categories state
  const [categories, setCategories] = useState([]);
  const [editingCategory, setEditingCategory] = useState(null);
  const [viewingCategory, setViewingCategory] = useState(null);

  // Show notification
  const showNotification = (message, type = "success") => {
    setNotification({ show: true, message, type });
    setTimeout(() => setNotification({ show: false, message: "", type: "" }), 3000);
  };

  // التحقق من صلاحية المستخدم
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const adminEmail = "adminEngYassaHanna2030@gmail.com";
    
    if (!user || (user.role !== 'admin' && user.email !== adminEmail)) {
      navigate('/log');
      return;
    }
    
    fetchProducts();
    fetchCategories();
  }, [navigate]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("http://localhost:7000/api/products");
      setProducts(data.products || data);
    } catch (err) {
      console.error("Error fetching products:", err);
      showNotification("Failed to fetch products", "error");
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("http://localhost:7000/api/categories");
      setCategories(data.categories || data);
    } catch (err) {
      console.error("Error fetching categories:", err);
      showNotification("Failed to fetch categories", "error");
    } finally {
      setLoading(false);
    }
  };

  // -------- Products Operations --------
  const handleAddProduct = async () => {
    if (!editingProduct.title || !editingProduct.price || !editingProduct.category) {
      showNotification("Please fill in all required fields", "error");
      return;
    }

    try {
      const { data } = await axios.post("http://localhost:7000/api/products", editingProduct);
      setProducts([...products, data.product || data]);
      setEditingProduct(null);
      showNotification("Product added successfully");
      fetchProducts(); // Refresh the list
    } catch (err) {
      console.error("Error adding product:", err);
      showNotification(err.response?.data?.message || "Failed to add product", "error");
    }
  };

  const handleUpdateProduct = async () => {
    if (!editingProduct.title || !editingProduct.price || !editingProduct.category) {
      showNotification("Please fill in all required fields", "error");
      return;
    }

    try {
      const { data } = await axios.put(
        `http://localhost:7000/api/products/${editingProduct._id}`,
        editingProduct
      );
      setProducts(products.map((p) => (p._id === editingProduct._id ? data.product || data : p)));
      setEditingProduct(null);
      showNotification("Product updated successfully");
      fetchProducts(); // Refresh the list
    } catch (err) {
      console.error("Error updating product:", err);
      showNotification(err.response?.data?.message || "Failed to update product", "error");
    }
  };

  const handleDeleteProduct = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await axios.delete(`http://localhost:7000/api/products/${id}`);
        setProducts(products.filter((p) => p._id !== id));
        showNotification("Product deleted successfully");
      } catch (err) {
        console.error("Error deleting product:", err);
        showNotification(err.response?.data?.message || "Failed to delete product", "error");
      }
    }
  };

  // -------- Categories Operations --------
  const handleAddCategory = async () => {
    if (!editingCategory.name || !editingCategory.slug) {
      showNotification("Please fill in all required fields", "error");
      return;
    }

    try {
      const { data } = await axios.post("http://localhost:7000/api/categories", editingCategory);
      
      if (data.success) {
        setCategories([...categories, data.category]);
        setEditingCategory(null);
        showNotification(data.message || "Category added successfully");
        fetchCategories(); // Refresh the list
      } else {
        showNotification(data.message || "Failed to add category", "error");
      }
    } catch (err) {
      console.error("Error adding category:", err);
      showNotification(err.response?.data?.message || "Failed to add category", "error");
    }
  };

  const handleUpdateCategory = async () => {
    if (!editingCategory.name || !editingCategory.slug) {
      showNotification("Please fill in all required fields", "error");
      return;
    }

    try {
      const { data } = await axios.put(
        `http://localhost:7000/api/categories/${editingCategory._id}`,
        editingCategory
      );
      
      if (data.success) {
        setCategories(categories.map((c) => (c._id === editingCategory._id ? data.category : c)));
        setEditingCategory(null);
        showNotification(data.message || "Category updated successfully");
        fetchCategories(); // Refresh the list
      } else {
        showNotification(data.message || "Failed to update category", "error");
      }
    } catch (err) {
      console.error("Error updating category:", err);
      showNotification(err.response?.data?.message || "Failed to update category", "error");
    }
  };

  const handleDeleteCategory = async (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      try {
        const { data } = await axios.delete(`http://localhost:7000/api/categories/${id}`);
        
        if (data.success) {
          setCategories(categories.filter((c) => c._id !== id));
          showNotification(data.message || "Category deleted successfully");
        } else {
          showNotification(data.message || "Failed to delete category", "error");
        }
      } catch (err) {
        console.error("Error deleting category:", err);
        showNotification(err.response?.data?.message || "Failed to delete category", "error");
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/log");
  };

  // Auto-generate slug from name
  useEffect(() => {
    if (editingCategory && editingCategory.name && !editingCategory.slug) {
      const slug = editingCategory.name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      setEditingCategory({ ...editingCategory, slug });
    }
  }, [editingCategory?.name]);

  // Format images string for display
  const formatImages = (images) => {
    if (Array.isArray(images)) {
      return images.join(", ");
    }
    return images || "";
  };

  return (
    <div className="admin-dashboard">
      {/* Notification */}
      {notification.show && (
        <div className={`notification ${notification.type}`}>
          {notification.message}
        </div>
      )}

      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <h2>Admin Panel</h2>
        </div>
        <div className="user-info">
          <span>Admin User</span> 
          <button onClick={handleLogout} className="logout-btn" style={{ marginLeft: '10px' }}>
              Logout    
          </button>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li>
              <button
                className={activeTab === "products" ? "active" : ""}
                onClick={() => setActiveTab("products")}
              >
                Products
              </button>
            </li>
            <li>
              <button
                className={activeTab === "categories" ? "active" : ""}
                onClick={() => setActiveTab("categories")}
              >
                Categories
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="header">
          <h1>Admin Dashboard</h1>
        </div>

        {loading ? (
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading data...</p>
          </div>
        ) : (
          <div className="content">
            {/* Products Tab */}
            {activeTab === "products" && (
              <div className="tab-content">
                <div className="tab-header">
                  <h2>Products Management ({products.length} products)</h2>
                  <button
                    onClick={() =>
                      setEditingProduct({
                        title: "",
                        description: "",
                        price: "",
                        category: "",
                        thumbnail: "",
                        images: [],
                        discountPercentage: 0,
                        rating: 0,
                        stock: 0,
                        brand: "",
                      })
                    }
                    className="add-btn"
                  >
                    Add Product
                  </button>
                </div>

                {/* Add/Edit Product Form */}
                {editingProduct && (
                  <div className="form-container">
                    <h3>
                      {editingProduct._id ? "Edit Product" : "Add New Product"}
                    </h3>
                    <div className="form-grid">
                      <div className="form-group">
                        <label>Title *</label>
                        <input
                          type="text"
                          value={editingProduct.title}
                          onChange={(e) =>
                            setEditingProduct({
                              ...editingProduct,
                              title: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>Price *</label>
                        <input
                          type="number"
                          value={editingProduct.price}
                          onChange={(e) =>
                            setEditingProduct({
                              ...editingProduct,
                              price: parseFloat(e.target.value) || 0,
                            })
                          }
                          min="0"
                          step="0.01"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>Category *</label>
                        <select
                          value={editingProduct.category}
                          onChange={(e) =>
                            setEditingProduct({
                              ...editingProduct,
                              category: e.target.value,
                            })
                          }
                          required
                        >
                          <option value="">Select Category</option>
                          {categories.map((c) => (
                            <option key={c._id} value={c._id}>
                              {c.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Stock</label>
                        <input
                          type="number"
                          value={editingProduct.stock}
                          onChange={(e) =>
                            setEditingProduct({
                              ...editingProduct,
                              stock: parseInt(e.target.value) || 0,
                            })
                          }
                          min="0"
                        />
                      </div>
                      <div className="form-group">
                        <label>Brand</label>
                        <input
                          type="text"
                          value={editingProduct.brand}
                          onChange={(e) =>
                            setEditingProduct({
                              ...editingProduct,
                              brand: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="form-group">
                        <label>Discount Percentage</label>
                        <input
                          type="number"
                          value={editingProduct.discountPercentage}
                          onChange={(e) =>
                            setEditingProduct({
                              ...editingProduct,
                              discountPercentage: parseFloat(e.target.value) || 0,
                            })
                          }
                          min="0"
                          max="100"
                        />
                      </div>
                      <div className="form-group">
                        <label>Rating</label>
                        <input
                          type="number"
                          value={editingProduct.rating}
                          onChange={(e) =>
                            setEditingProduct({
                              ...editingProduct,
                              rating: parseFloat(e.target.value) || 0,
                            })
                          }
                          min="0"
                          max="5"
                          step="0.1"
                        />
                      </div>
                      <div className="form-group full-width">
                        <label>Description</label>
                        <textarea
                          value={editingProduct.description}
                          onChange={(e) =>
                            setEditingProduct({
                              ...editingProduct,
                              description: e.target.value,
                            })
                          }
                          rows="3"
                        />
                      </div>
                      <div className="form-group full-width">
                        <label>Thumbnail URL</label>
                        <input
                          type="text"
                          value={editingProduct.thumbnail}
                          onChange={(e) =>
                            setEditingProduct({
                              ...editingProduct,
                              thumbnail: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="form-group full-width">
                        <label>Images (comma separated URLs)</label>
                        <input
                          type="text"
                          value={formatImages(editingProduct.images)}
                          onChange={(e) =>
                            setEditingProduct({
                              ...editingProduct,
                              images: e.target.value.split(",").map((img) => img.trim()),
                            })
                          }
                          placeholder="https://example.com/image1.jpg, https://example.com/image2.jpg"
                        />
                      </div>
                    </div>
                    <div className="form-actions">
                      <button
                        onClick={editingProduct._id ? handleUpdateProduct : handleAddProduct}
                        className="submit-btn"
                      >
                        {editingProduct._id ? "Update Product" : "Add Product"}
                      </button>
                      <button
                        onClick={() => setEditingProduct(null)}
                        className="cancel-btn"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}

                {/* Product Details Modal */}
                {viewingProduct && (
                  <div className="modal">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h3>Product Details</h3>
                        <button
                          onClick={() => setViewingProduct(null)}
                          className="close-btn"
                        >
                          ×
                        </button>
                      </div>
                      <div className="modal-body">
                        <div className="product-details">
                          <div className="product-image">
                            <img
                              src={viewingProduct.thumbnail}
                              alt={viewingProduct.title}
                              onError={(e) => {
                                e.target.src = "https://via.placeholder.com/300x200?text=No+Image";
                              }}
                            />
                          </div>
                          <div className="product-info">
                            <h4>{viewingProduct.title}</h4>
                            <p className="description">
                              {viewingProduct.description}
                            </p>
                            <div className="details-grid">
                              <div className="detail-item">
                                <span className="label">Price:</span>
                                <span className="value">${viewingProduct.price}</span>
                              </div>
                              <div className="detail-item">
                                <span className="label">Category:</span>
                                <span className="value">
                                  {viewingProduct.category?.name || "N/A"}
                                </span>
                              </div>
                              <div className="detail-item">
                                <span className="label">Stock:</span>
                                <span className="value">{viewingProduct.stock}</span>
                              </div>
                              <div className="detail-item">
                                <span className="label">Brand:</span>
                                <span className="value">
                                  {viewingProduct.brand || "N/A"}
                                </span>
                              </div>
                              <div className="detail-item">
                                <span className="label">Discount:</span>
                                <span className="value">
                                  {viewingProduct.discountPercentage}%
                                </span>
                              </div>
                              <div className="detail-item">
                                <span className="label">Rating:</span>
                                <span className="value">
                                  {viewingProduct.rating}/5
                                </span>
                              </div>
                            </div>
                            {viewingProduct.images && viewingProduct.images.length > 0 && (
                              <div className="image-gallery">
                                <h5>Additional Images:</h5>
                                <div className="images-list">
                                  {viewingProduct.images.map((img, index) => (
                                    <img 
                                      key={index} 
                                      src={img} 
                                      alt={`${viewingProduct.title} ${index + 1}`}
                                      onError={(e) => {
                                        e.target.src = "https://via.placeholder.com/100x100?text=No+Image";
                                      }}
                                    />
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Products Table */}
                <div className="table-container">
                  {products.length === 0 ? (
                    <div className="no-data">
                      <p>No products found. Add your first product!</p>
                    </div>
                  ) : (
                    <table>
                      <thead>
                        <tr>
                          <th>Image</th>
                          <th>Title</th>
                          <th>Price</th>
                          <th>Category</th>
                          <th>Stock</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {products.map((p) => (
                          <tr key={p._id}>
                            <td>
                              <img 
                                src={p.thumbnail} 
                                alt={p.title}
                                className="thumbnail"
                                onError={(e) => {
                                  e.target.src = "https://via.placeholder.com/50x50?text=No+Image";
                                }}
                              />
                            </td>
                            <td>{p.title}</td>
                            <td>${p.price}</td>
                            <td>{p.category?.name || "N/A"}</td>
                            <td>{p.stock}</td>
                            <td className="actions">
                              <button
                                onClick={() => setViewingProduct(p)}
                                className="view-btn"
                              >
                                View
                              </button>
                              <button
                                onClick={() => setEditingProduct({
                                  ...p,
                                  // أهم سطر: إذا كانت category كائن خذ الـ _id فقط
                                  category: typeof p.category === 'object' && p.category?._id ? p.category._id : p.category
                                })}
                                className="edit-btn"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => handleDeleteProduct(p._id)}
                                className="delete-btn"
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            )}

            {/* Categories Tab */}
            {activeTab === "categories" && (
              <div className="tab-content">
                <div className="tab-header">
                  <h2>Categories Management ({categories.length} categories)</h2>
                  <button
                    onClick={() =>
                      setEditingCategory({
                        name: "",
                        slug: "",
                      })
                    }
                    className="add-btn"
                  >
                    Add Category
                  </button>
                </div>

                {/* Add/Edit Category Form */}
                {editingCategory && (
                  <div className="form-container">
                    <h3>
                      {editingCategory._id ? "Edit Category" : "Add New Category"}
                    </h3>
                    <div className="form-grid">
                      <div className="form-group">
                        <label>Name *</label>
                        <input
                          type="text"
                          value={editingCategory.name}
                          onChange={(e) =>
                            setEditingCategory({
                              ...editingCategory,
                              name: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>Slug *</label>
                        <input
                          type="text"
                          value={editingCategory.slug}
                          onChange={(e) =>
                            setEditingCategory({
                              ...editingCategory,
                              slug: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                    </div>
                    <div className="form-actions">
                      <button
                        onClick={editingCategory._id ? handleUpdateCategory : handleAddCategory}
                        className="submit-btn"
                      >
                        {editingCategory._id ? "Update Category" : "Add Category"}
                      </button>
                      <button
                        onClick={() => setEditingCategory(null)}
                        className="cancel-btn"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}

                {/* Category Details Modal */}
                {viewingCategory && (
                  <div className="modal">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h3>Category Details</h3>
                        <button
                          onClick={() => setViewingCategory(null)}
                          className="close-btn"
                        >
                          ×
                        </button>
                      </div>
                      <div className="modal-body">
                        <div className="category-details">
                          <div className="detail-item">
                            <span className="label">ID:</span>
                            <span className="value">{viewingCategory._id}</span>
                          </div>
                          <div className="detail-item">
                            <span className="label">Name:</span>
                            <span className="value">{viewingCategory.name}</span>
                          </div>
                          <div className="detail-item">
                            <span className="label">Slug:</span>
                            <span className="value">{viewingCategory.slug}</span>
                          </div>
                          <div className="detail-item">
                            <span className="label">Created At:</span>
                            <span className="value">
                              {new Date(
                                viewingCategory.createdAt
                              ).toLocaleDateString()}
                            </span>
                          </div>
                          <div className="detail-item">
                            <span className="label">Updated At:</span>
                            <span className="value">
                              {new Date(
                                viewingCategory.updatedAt
                              ).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Categories Table */}
                <div className="table-container">
                  {categories.length === 0 ? (
                    <div className="no-data">
                      <p>No categories found. Add your first category!</p>
                    </div>
                  ) : (
                    <table>
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Slug</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {categories.map((c) => (
                          <tr key={c._id}>
                            <td>{c._id}</td>
                            <td>{c.name}</td>
                            <td>{c.slug}</td>
                            <td className="actions">
                              <button
                                onClick={() => setViewingCategory(c)}
                                className="view-btn"
                              >
                                View
                              </button>
                              <button
                                onClick={() => setEditingCategory({ ...c })}
                                className="edit-btn"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => handleDeleteCategory(c._id)}
                                className="delete-btn"
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <style jsx>{`
        .admin-dashboard {
          display: flex;
          min-height: 100vh;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f5f5f5;
        }

        .notification {
          position: fixed;
          top: 20px;
          right: 20px;
          padding: 15px 20px;
          border-radius: 4px;
          color: white;
          font-weight: 500;
          z-index: 1000;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .notification.success {
          background-color: #28a745;
        }

        .notification.error {
          background-color: #dc3545;
        }

        .sidebar {
          width: 250px;
          background-color: #2c3e50;
          color: white;
          display: flex;
          flex-direction: column;
        }

        .sidebar-header {
          padding: 20px;
          border-bottom: 1px solid #34495e;
        }

        .sidebar-header h2 {
          margin: 0;
          font-size: 1.5rem;
        }

        .user-info {
          padding: 20px;
          border-bottom: 1px solid #34495e;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logout-btn {
          padding: 6px 12px;
          background-color: #e74c3c;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 0.9rem;
        }

        .sidebar-nav ul {
          list-style: none;
          padding: 0;
          margin: 0;
          flex: 1;
        }

        .sidebar-nav li {
          padding: 0;
        }

        .sidebar-nav button {
          display: block;
          width: 100%;
          padding: 15px 20px;
          background: none;
          border: none;
          color: white;
          text-align: left;
          cursor: pointer;
          font-size: 1rem;
          transition: background-color 0.3s;
        }

        .sidebar-nav button:hover {
          background-color: #34495e;
        }

        .sidebar-nav button.active {
          background-color: #3498db;
        }

        .main-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: 20px;
        }

        .header {
          margin-bottom: 20px;
        }

        .header h1 {
          margin: 0;
          font-size: 2rem;
          color: #2c3e50;
        }

        .loading {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 200px;
        }

        .spinner {
          border: 4px solid rgba(0, 0, 0, 0.1);
          border-radius: 50%;
          border-top: 4px solid #3498db;
          width: 40px;
          height: 40px;
          animation: spin 1s linear infinite;
          margin-bottom: 10px;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .tab-content {
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
          overflow: hidden;
        }

        .tab-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          border-bottom: 1px solid #eee;
        }

        .tab-header h2 {
          margin: 0;
          font-size: 1.5rem;
          color: #2c3e50;
        }

        .add-btn {
          padding: 8px 16px;
          background-color: #28a745;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 0.9rem;
          transition: background-color 0.3s;
        }

        .add-btn:hover {
          background-color: #218838;
        }

        .form-container {
          padding: 20px;
          border-bottom: 1px solid #eee;
        }

        .form-container h3 {
          margin-top: 0;
          margin-bottom: 20px;
          color: #2c3e50;
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 25px;
        }

        .form-group.full-width {
          grid-column: 1 / -1;
        }

        .form-group label {
          display: block;
          margin-bottom: 5px;
          font-weight: 500;
          color: #555;
        }

        .form-group input,
        .form-group textarea,
        .form-group select {
          width: 100%;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 1rem;
        }

        .form-group textarea {
          resize: vertical;
          min-height: 100px;
        }

        .form-actions {
          display: flex;
          gap: 10px;
          margin-top: 20px;
        }

        .submit-btn {
          padding: 10px 20px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 1rem;
          transition: background-color 0.3s;
        }

        .submit-btn:hover {
          background-color: #0069d9;
        }

        .cancel-btn {
          padding: 10px 20px;
          background-color: #6c757d;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 1rem;
          transition: background-color 0.3s;
        }

        .cancel-btn:hover {
          background-color: #5a6268;
        }

        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .modal-content {
          background-color: white;
          border-radius: 8px;
          width: 90%;
          max-width: 600px;
          max-height: 90vh;
          overflow-y: auto;
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 20px;
          border-bottom: 1px solid #eee;
        }

        .modal-header h3 {
          margin: 0;
          font-size: 1.25rem;
          color: #2c3e50;
        }

        .close-btn {
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #999;
        }

        .modal-body {
          padding: 20px;
        }

        .product-details {
          display: flex;
          gap: 20px;
        }

        .product-image {
          flex: 1;
          max-width: 300px;
        }

        .product-image img {
          width: 100%;
          border-radius: 8px;
          object-fit: contain;
        }

        .product-info {
          flex: 2;
        }

        .product-info h4 {
          margin-top: 0;
          margin-bottom: 15px;
          font-size: 1.5rem;
          color: #2c3e50;
        }

        .description {
          margin-bottom: 20px;
          color: #666;
          line-height: 1.5;
        }

        .details-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }

        .detail-item {
          display: flex;
          flex-direction: column;
        }

        .detail-item .label {
          font-weight: 500;
          color: #777;
          margin-bottom: 5px;
        }

        .detail-item .value {
          font-weight: 600;
          color: #333;
        }

        .image-gallery {
          margin-top: 20px;
        }

        .image-gallery h5 {
          margin-bottom: 10px;
          color: #2c3e50;
        }

        .images-list {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .images-list img {
          width: 80px;
          height: 80px;
          object-fit: cover;
          border-radius: 4px;
        }

        .category-details {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .table-container {
          padding: 20px;
          overflow-x: auto;
        }

        .no-data {
          text-align: center;
          padding: 40px;
          color: #666;
        }

        table {
          width: 100%;
          border-collapse: collapse;
        }

        table th,
        table td {
          padding: 12px 15px;
          text-align: left;
          border-bottom: 1px solid #eee;
        }

        table th {
          background-color: #f8f9fa;
          font-weight: 600;
          color: #2c3e50;
        }

        table tr:hover {
          background-color: #f8f9fa;
        }

        .thumbnail {
          width: 50px;
          height: 50px;
          object-fit: cover;
          border-radius: 4px;
        }

        .actions {
          display: flex;
          gap: 8px;
        }

        .view-btn {
          padding: 6px 12px;
          background-color: #17a2b8;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 0.85rem;
          transition: background-color 0.3s;
        }

        .view-btn:hover {
          background-color: #138496;
        }

        .edit-btn {
          padding: 6px 12px;
          background-color: #ffc107;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 0.85rem;
          transition: background-color 0.3s;
        }

        .edit-btn:hover {
          background-color: #e0a800;
        }

        .delete-btn {
          padding: 6px 12px;
          background-color: #dc3545;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 0.85rem;
          transition: background-color 0.3s;
        }

        .delete-btn:hover {
          background-color: #c82333;
        }

        @media (max-width: 768px) {
          .admin-dashboard {
            flex-direction: column;
          }
          
          .sidebar {
            width: 100%;
            flex-direction: row;
            justify-content: space-between;
            padding: 10px;
          }
          
          .sidebar-nav ul {
            display: flex;
            flex-direction: row;
          }
          
          .form-grid {
            grid-template-columns: 1fr;
          }
          
          .product-details {
            flex-direction: column;
          }
          
          .details-grid {
            grid-template-columns: 1fr;
          }
          
          .actions {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}   