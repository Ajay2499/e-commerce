import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import "../CSS/CategoryComponent.css";
import axios from "axios";

const CategoryComponent = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get("https://localhost:44348/api/Category");

                const categoryList = response.data.map((item) => ({
                    name: item.categoryName, 
                    image: item.firstProductImage || "https://example.com/default.jpg",
                }));

                setCategories(categoryList);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        fetchCategories();
    }, []);

    return (
        <div className="category-component">
            <h1 className="category-title">Join The Fuaark Clan Community, Where Fitness Meets Unity.</h1>
            <div className="category-list">
                {categories.map((category) => (
                    <CategoryCard category={category.name} imageURL={category.image} link={`/category/${category.name.toLowerCase()}`} />
                ))}
            </div>
        </div>
    );
};

export default CategoryComponent;
