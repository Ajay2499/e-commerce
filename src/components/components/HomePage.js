import Navbar from "./Navbar";
import Highlight from "./Highlight";
import BrandsSlider from "./BrandsSlider";
import CategoryComponent from "./CategoryComponent";
import VideoBuffering from "./VideoBuffering";
import ProductCard from "../ProductDetails/ProductCard";
import Footer from "./Footer";

const HomePage = () =>{

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