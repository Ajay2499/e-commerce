import Navbar from "./Navbar";
import Highlight from "./Highlight";
import BrandsSlider from "./BrandsSlider";
import CategoryComponent from "./CategoryComponent";
import VideoBuffering from "./VideoBuffering";
import ProductCard from "../ProductDetails/ProductCard";
import Footer from "./Footer";
import { useEffect } from "react";
import axios from "axios";
import { useCart } from "./CartContext";

const HomePage = () =>{
    const {updateCart} = useCart();

    const fetchCartItems = async () => {
        try {
          const token = localStorage.getItem("token");
          if (!token) return;
    
          const response = await axios.get("https://localhost:44348/api/Cart", {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          
          updateCart(response.data); // Set fetched cart items in state
        } catch (error) {
          console.error("Error fetching cart items:", error.response?.data);
        }
      };
    
      useEffect(() => {
        fetchCartItems();
      }, []);

    return(
        <div>
            <Navbar/>
            <Highlight />
            <BrandsSlider />
            <CategoryComponent />
            <VideoBuffering />
            <Footer />
        </div>
    );
};

export default HomePage;