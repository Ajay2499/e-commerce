import React, { useState, useEffect } from "react";
import NavBar from "../components/Navbar";
import { FaFilter, FaSort } from "react-icons/fa";
import "../ProductDetails-CSS/CategorySection.css";
import ClothingCard from "./ClothingCard";
import { useParams } from "react-router-dom";
import axios from "axios";

const CategorySection = () => {
    const [price, setPrice] = useState(3999);
    const { categoryName } = useParams();
    const formattedCategory = categoryName.toUpperCase();
    const [categoryData, setCategoryData] = useState([]);
    const [filter, setFilter] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [lowToHigh, setlowtohigh] = useState(null);
    const [selectedSizes, setSelectedSizes] = useState([]);

    useEffect(() => {
        const fetchCategoryData = async () => {
            try {
                const responseData = await axios.get("https://localhost:44348/api/Category/CategoryProducts");

                const categoryList = responseData.data.filter((c) => c.categoryName === formattedCategory);
                setCategoryData(categoryList);
            } catch (error) {
                console.error("Error fetching JSON:", error);
            }
        };
        fetchCategoryData();
    }, [formattedCategory]);

    const handleSort = (order) => {
        setlowtohigh(order === "lowToHigh");
    };

    const handleSizeChange = (size) => {
        setSelectedSizes((prevSizes) => prevSizes.includes(size) ? prevSizes.filter((s) => s !== size) : [...prevSizes, size]);
    };

    const filteredAndSortedData = [...categoryData]
        .filter((product) => product.price <= price)
        .filter((product) => selectedSizes.length === 0 ||  product.sizes.some((s) => selectedSizes.includes(s)))
        .sort((a, b) => (lowToHigh ? a.price - b.price : b.price - a.price));


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
                <button onClick={() => setIsOpen(!isOpen)} className="sort-btn">
                    <FaSort /> Sort Featured
                </button>
                {isOpen && (
                    <div className="dropdown-menu">
                        <button className="dropdown-item" onClick={() => handleSort("lowToHigh")} >
                            Price: Low to High
                        </button>
                        <button className="dropdown-item" onClick={() => handleSort("highToLow")}>
                            Price: High to Low
                        </button>
                    </div>
                )}
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
                                    <input type="checkbox" onChange={() => handleSizeChange(size)} value={size} /> {size}
                                </label>
                            ))}
                        </div>
                    </div> : null}
                <div className="cards-container">
                    {filteredAndSortedData.length > 0 ? (
                        filteredAndSortedData.map((product) => (
                            <ClothingCard key={product.ProductID} product={product} />
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
