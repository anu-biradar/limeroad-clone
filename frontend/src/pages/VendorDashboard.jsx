import { useState } from 'react';
import { addProduct } from '../api/products';
import './VendorDashboard.css';

export default function VendorDashboard() {
  const [form, setForm] = useState({
    title: '', brand: '', price: '', category: 'men', size: '',
  });
  const [images, setImages] = useState([]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImages([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    if (images.length === 0) {
      setError('Please select at least one image');
      return;
    }

    const formData = new FormData();
    formData.append('title', form.title);
    formData.append('brand', form.brand);
    formData.append('price', form.price);
    formData.append('category', form.category);
    formData.append('size', form.size);
    images.forEach((img) => formData.append('images', img));

    try {
      setLoading(true);
      await addProduct(formData);
      setMessage('Product added successfully!');
      setForm({ title: '', brand: '', price: '', category: 'men', size: '' });
      setImages([]);
      document.getElementById('imageInput').value = '';
    } catch {
      setError('Failed to add product');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="vendor-page">
      <div className="vendor-container">
        {/* Header */}
        <div className="vendor-page-header">
          <div className="vendor-header-icon">🏪</div>
          <div className="vendor-header-text">
            <h1>Vendor Dashboard</h1>
            <p>Add and manage your products</p>
          </div>
        </div>

        {/* Toasts */}
        {message && <div className="vendor-toast success">✅ {message}</div>}
        {error && <div className="vendor-toast error">⚠️ {error}</div>}

        {/* Form Card */}
        <div className="vendor-form-card">
          <h2>📦 Add New Product</h2>

          <form className="vendor-form" onSubmit={handleSubmit}>
            <div className="vendor-form-grid">
              <div className="vendor-input-group">
                <label className="vendor-label">Title <span className="required">*</span></label>
                <input
                  className="vendor-input"
                  name="title"
                  value={form.title}
                  placeholder="e.g. Floral Print Kurti"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="vendor-input-group">
                <label className="vendor-label">Brand</label>
                <input
                  className="vendor-input"
                  name="brand"
                  value={form.brand}
                  placeholder="e.g. FabIndia"
                  onChange={handleChange}
                />
              </div>

              <div className="vendor-input-group">
                <label className="vendor-label">Price (₹) <span className="required">*</span></label>
                <input
                  className="vendor-input"
                  name="price"
                  value={form.price}
                  type="number"
                  placeholder="799"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="vendor-input-group">
                <label className="vendor-label">Category</label>
                <select className="vendor-select" name="category" value={form.category} onChange={handleChange}>
                  <option value="men">Men</option>
                  <option value="women">Women</option>
                  <option value="kids">Kids</option>
                </select>
              </div>

              <div className="vendor-input-group">
                <label className="vendor-label">Size</label>
                <input
                  className="vendor-input"
                  name="size"
                  value={form.size}
                  placeholder="e.g. S, M, L, XL"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Image Upload */}
            <div className="vendor-input-group full">
              <label className="vendor-label">Product Images (max 2) <span className="required">*</span></label>
              <div className="image-upload-zone">
                <input
                  id="imageInput"
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageChange}
                />
                <span className="upload-icon">📷</span>
                <p className="upload-text">Click to upload images</p>
                <p className="upload-hint">JPG, PNG up to 5MB each</p>
                {images.length > 0 && (
                  <div className="upload-selected">✅ {images.length} image{images.length > 1 && 's'} selected</div>
                )}
              </div>
            </div>

            <button className="vendor-submit-btn" type="submit" disabled={loading}>
              {loading ? 'Adding product…' : '🚀 Add Product'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}