import React, { useState, useEffect } from "react";
import NavBar from "../components/Navbar";
import { FaFilter, FaSort } from "react-icons/fa";
import "../ProductDetails-CSS/CategorySection.css";
import ClothingCard from "./ClothingCard";
import { useParams } from "react-router-dom";

const CategorySection = () => {
    const [price, setPrice] = useState(3999);
    const { categoryName } = useParams();
    const formattedCategory = categoryName.toUpperCase();
    const [categoryData, setCategoryData] = useState([]);
    const [filter, setFilter] = useState(false);

    useEffect(() => {
        const fetchCategoryData = async () => {
            try {
                const response = await fetch("/Data.json");
                const jsonData = await response.json();
                const newdata = jsonData.categories[formattedCategory];

                if (jsonData.categories[formattedCategory]) {
                    setCategoryData(jsonData.categories[formattedCategory]);
                } else {
                    setCategoryData([]);
                }
            } catch (error) {
                console.error("Error fetching JSON:", error);
            }
        };
        fetchCategoryData();
    }, [formattedCategory]);

    return (
        <div className="category-container">
            <NavBar />
            <h1 className="category-title">{formattedCategory}</h1>

            <div className="button-container">
                {filter ? <button onClick={() => setFilter(false)} className="filter-cross">
                    X  Filter
                </button> :
                    <button onClick={() => setFilter(true)} className="filter-btn">
                        <FaFilter /> Filter
                    </button>
                }
                <button className="sort-btn">
                    <FaSort /> Sort Featured
                </button>
            </div>

            <div className="content-container">
                {filter ?
                    <div className="filter-sidebar">
                        <h3>Filter by Price</h3>
                        <input
                            type="range"
                            min="0"
                            max="2999"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className="price-slider"
                        />
                        <div className="filter-price-sidebar">
                        <p className="filter-p">₹0</p>
                        <p>₹{price}</p>
                        </div>

                        <h3>Filter by Size</h3>
                        <div className="size-filters">
                            {["XS", "S", "M", "L", "XL"].map((size) => (
                                <label key={size}>
                                    <input type="checkbox" value={size} /> {size}
                                </label>
                            ))}
                        </div>
                    </div> : null}
                <div className="cards-container">
                    {categoryData.length > 0 ? (
                        categoryData.filter((product) => product.price <= price)
                        .map((product) => (
                            <ClothingCard key={product.id} product={product} />
                        ))
                    ) : (
                        <h2 className="no-products">No products found in this category.</h2>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CategorySection;
