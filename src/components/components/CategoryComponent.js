import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import "../CSS/CategoryComponent.css";

const CategoryComponent = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch("/Data.json");
                const jsonData = await response.json();

                const categoryList = Object.entries(jsonData.categories).map(([category, items]) => ({
                    name: category,
                    image: items[0]?.imageURL || "https://example.com/default.jpg",
                }));
                setCategories(categoryList);
            } catch (error) {
                console.error("Error fetching JSON:", error);
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
