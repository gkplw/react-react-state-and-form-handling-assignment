import { useState } from "react";

function ProductForm() {
const [inputName, setInputName] = useState("")
const [inputImageUrl, SetInputImageUrl] = useState("")
const [inputPrice, setInputPrice] = useState("")
const [inputDescription, setInputDescription] =useState("")
const [inputEmail, setInputEmail] = useState("")

const [alertNameMessage, setAlertNameMessage] = useState("")
const [alertImageMessage, setAlertImageMessage] = useState("")
const [alertPriceMessage, setAlertPriceMessage] = useState("")
const [alertDesciptionMessage, setAlertDescriptionMessage] = useState("")
const [alertEmailMessage, setAlertEmailMessage] = useState("")

  return (
    <form className="post-form"
    onSubmit={(e) => {
      e.preventDefault();
      if (!inputName){
        setAlertNameMessage("Name is required.")
      } else {
        setAlertNameMessage(null)
      };
      if (!inputImageUrl){
        setAlertImageMessage("Image URL is required.")
      } else {
        setAlertImageMessage(null)
      };
      if (inputPrice < 0) {
        setAlertPriceMessage("Price cannot be less than 0.")
      } else if (!inputPrice){
        setAlertPriceMessage("Price is required.")
      } else {
        setAlertPriceMessage(null)
      };
      if (!inputDescription){
        setAlertDescriptionMessage("Description is required.")
      } else {
        setAlertDescriptionMessage(null)
      };
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(inputEmail)) {
        setAlertEmailMessage(null)
      } else if (!inputEmail){
        setAlertEmailMessage("Email is required")
      } else {
        setAlertEmailMessage("Invalid email format.")
      };
    }}
    >
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            value={inputName}
            onChange={(event) => setInputName(event.target.value)}
          />
        </label>
        <div>{alertNameMessage}</div>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            value={inputImageUrl}
            onChange={(event) => SetInputImageUrl(event.target.value)}
          />
        </label>
        <div>{alertImageMessage}</div>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            value={inputPrice}
            onChange={(event) => setInputPrice(event.target.value)}
          />
        </label>
        <div>{alertPriceMessage}</div>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            value={inputDescription}
            onChange={(event) => setInputDescription(event.target.value)}
            rows={4}
            cols={30}
          />
        </label>
        <div>{alertDesciptionMessage}</div>
      </div>
      <div className="input-container">
        <label>
          User's email
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email here"
            value={inputEmail}
            onChange={(event) => setInputEmail(event.target.value)}
          />
        </label>
        <div>{alertEmailMessage}</div>
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default ProductForm;
