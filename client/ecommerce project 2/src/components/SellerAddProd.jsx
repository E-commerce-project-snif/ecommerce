import React, { useState, useEffect } from "react";
import "./SellerAddProd.css";
import { getAllProduct, addProducts } from "../services/productService";
import { jwtDecode } from "jwt-decode";
import { getProductsByUserId } from "../services/productService";
import { getCategories } from "../services/categoriesServices";
import "cloudinary-core";

function SellerAddProd() {
  const [sellerProduct, setSellerProduct] = useState([]);
  const [userId, setUserId] = useState("");

  const [productName, setProductName] = useState("");
  const [imagesUrl, setImagesUrl] = useState([]);
  const [categories, setCategories] = useState([]);
  const [choosedCategory, setChoosedCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [availability, setAvailability] = useState("");
  const [favoris, setFavoris] = useState("");

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const decodedToken = jwtDecode(storedToken);
    setUserId(decodedToken.id);
    getProductsByUserId(decodedToken.id)
      .then((res) => {
        setSellerProduct(res.products);
        console.log(res.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    getCategories()
      .then((res) => {
        setCategories(res.categories);
        // console.log(res, "category");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChangeName = (e) => {
    setProductName(e.target.value);
  };
  // const handleChangeImage = (e) => {
  //   setImagesUrl(e.target.value);
  // };
  const handleChangePrice = (e) => {
    setPrice(Number(e.target.value));
  };
  const handleChangeCategories = (e) => {
    console.log("hiiiiiii", e.target.value);
    setChoosedCategory(Number(e.target.value));
  };
  const handleChangeAvailability = (e) => {
    setAvailability(!!e.target.value);
  };
  const handleChangeFavoris = (e) => {
    setFavoris(Number(e.target.value));
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleUpload = () => {
    window.cloudinary.openUploadWidget(
      {
        cloudName: "drbgxo3ua",
        uploadPreset: "first project",
        sources: ["local", "url", "camera"],
        showAdvancedOptions: false,
        cropping: false,
        multiple: true,
        defaultSource: "local",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log(result);

          setImagesUrl((imagesUrl) => [...imagesUrl, result.info.secure_url]);
          console.log(result.info.secure_url, "Cla img");
        } else if (error) {
          console.error("Upload Error:", error);
        }
      }
    );
  };

  const handleAddProduct = () => {
    addProducts(
      productName,
      description,
      imagesUrl,
      price,
      choosedCategory,
      availability,
      favoris,
      userId
    )
      .then((res) => {
        console.log(res, "product is add");
      })
      .catch((err) => alert("the product is not added", err));
  };

  return (
    <div className="global__container__seller">
      <div className="header__seller__page">
        <div className="title__seller__page">
          <div className="red_mark__seller"></div>
          <span className="space__seller">Seller Space</span>
        </div>
        <div className="img__container">
          <img
            className="img__seller"
            src="https://img.freepik.com/premium-photo/showcase-electronic-items-black-background_893571-15169.jpg"
          />
          <img
            className="img__seller"
            src="https://techeconomy.ng/wp-content/uploads/2023/12/The-Most-Popular-Phone-Brands-in-Every-Country-in-2023.jpg"
          />
          <img
            className="img__seller"
            src="https://cdn.firstcry.com/education/2022/11/13120532/Summer-Clothes-Vocabulary-in-English-for-Kids.jpg"
          />
          <img
            className="img__seller"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr8e8EcPd0qv7NmXbLz5PTDyoKyAF2NVN_8Q&s"
          />
          <img
            className="img__seller"
            src="https://thegloss.ie/wp-content/uploads/2024/05/ms-beauty-bag.jpg"
          />
          <img
            className="img__seller"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7zeL8Pn9RcaPoHP_ewChKkRakyCdVDEfXUA&s"
          />
          <img
            className="img__seller"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH6bccm_FGkAfz7_EU_xZ96cd-EvDv7MCz3A&s"
          />
        </div>
      </div>
      <div className="seller__page__container">
        <h3 className="add__product__text">You Can Add Your Product Here</h3>
        <input
          type="text"
          placeholder="Product Name"
          onChange={handleChangeName}
        />

        <button onClick={handleUpload}> Add your photo</button>
        {/* <img
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.svgrepo.com%2Fsvg%2F508699%2Flandscape-placeholder&psig=AOvVaw2-sfXoza0x0D_7vNcSzW_-&ust=1722874721971000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOj2_8_e24cDFQAAAAAdAAAAABAE"
          alt="Preview"
          style={{ width: "100px", height: "100px" }}
        /> */}
        <input
          type="text"
          placeholder="Product description"
          onChange={handleChangeDescription}
        />
        <input
          type="text"
          placeholder="Product availability"
          onChange={handleChangeAvailability}
        />
        <input
          type="text"
          placeholder="Product favoris"
          onChange={handleChangeFavoris}
        />
        <input
          type="text"
          placeholder="Product price"
          onChange={handleChangePrice}
        />

        <div className="category__selection__box">
          <label htmlFor="dropdown">Select a category:</label>
          <select id="dropdown" onChange={handleChangeCategories}>
            <option value="">Select an option</option>
            {categories &&
              categories.map((category) => (
                <option value={category.id}>{category.categoryName}</option>
              ))}
          </select>
        </div>
        <button
          className="btn__add__product__seller"
          onClick={handleAddProduct}
        >
          Click to add
        </button>
      </div>
      <main className="item__table">
        <h2>Items</h2>
        <div className="item__details">
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {sellerProduct.length > 0 &&
                sellerProduct.map((product) => (
                  <tr key={product.id}>
                    <td>
                      <img
                        className="item__img"
                        src={product.images[0]}
                        alt={product.productName}
                      />
                    </td>
                    <td>{product.productName}</td>
                    <td className="product__description__backoffice">
                      {product.description}
                    </td>
                    <td>{product.price}</td>
                    <td>{product.availability}</td>
                    <td>{product.categoryName}</td>
                    <td>
                      <div className="delete__add__btn">Delete</div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default SellerAddProd;
