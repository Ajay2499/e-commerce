import Navbar from "./Navbar";
import Highlight from "./Highlight";
import BrandsSlider from "./BrandsSlider";
import CategoryComponent from "./CategoryComponent";
import VideoBuffering from "./VideoBuffering";
import ProductCard from "../ProductDetails/ProductCard";

const HomePage = () =>{

    return(
        <div>
            <Navbar/>
            <Highlight />
            <BrandsSlider />
            <CategoryComponent />
            <VideoBuffering />
        </div>
    );
};

export default HomePage;