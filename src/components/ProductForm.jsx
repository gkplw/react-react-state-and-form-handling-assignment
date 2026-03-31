import { useState } from "react";

function ProductForm() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;

    if (name === "name") setName(value);
    if (name === "image") setImage(value);
    if (name === "price") setPrice(value);
    if (name === "description") setDescription(value);
    if (name === "email") setEmail(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validateForm()) {
      return;
    }

    let newData = {
      name: name,
      image: image,
      price: price,
      description: description,
      email: email,
    };

    alert(JSON.stringify(newData,null,2));
  }

  // function validateEmail(email) {
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return emailRegex.test(email);
  // }

  function validateForm() {
    let newError = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) {
      newError.name = "Name is required.";
    }

    if (!image) {
      newError.image = "Image is required.";
    }

    if (!price) {
      newError.price = "Price is required.";
    } else if (price < 0) {
      newError.price = "Price cannot be less than 0.";
    }

    if (!description) {
      newError.description = "Description is required.";
    }
    
    if (!email) {
      newError.email = "Email is required.";
    } else if (!emailRegex.test(email)) {
      newError.email = "Invalid email format.";
    }

    // if (!email) {
    //   newError.email = "Email is required.";
    // } else if (!validateEmail(email)) {
    //   newError.email = "Invalid email format.";
    // }

    setError(newError);
    return Object.keys(newError).length;
  }

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <h1>Create Product Form</h1>

      <div className="input-container">
        <label>
          Name
          <input
            name="name"
            type="text"
            placeholder="Enter name here"
            value={name}
            onChange={handleChange}
          />
        </label>
        {error.name && <p className="error">{error.name}</p>}
      </div>

      <div className="input-container">
        <label>
          Image Url
          <input
            name="image"
            type="text"
            placeholder="Enter image url here"
            value={image}
            onChange={handleChange}
          />
        </label>
        {error.image && <p className="error">{error.image}</p>}
      </div>

      <div className="input-container">
        <label>
          Price
          <input
            name="price"
            type="number"
            placeholder="Enter price here"
            value={price}
            onChange={handleChange}
          />
        </label>
        {error.price && <p className="error">{error.price}</p>}
      </div>

      <div className="input-container">
        <label>
          Description
          <textarea
            name="description"
            placeholder="Enter description here"
            value={description}
            onChange={handleChange}
            rows={4}
            cols={30}
          />
        </label>
        {error.description && <p className="error">{error.description}</p>}
      </div>

      <div className="input-container">
        <label>
          User's email
          <input
            name="email"
            type="email"
            placeholder="Enter your email here"
            value={email}
            onChange={handleChange}
          />
        </label>
        {error.email && <p className="error">{error.email}</p>}
      </div>

      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default ProductForm;
