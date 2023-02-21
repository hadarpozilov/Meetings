import { Navigate, Route, Routes } from "react-router-dom";
import AddProduct from "../../ProductsArea/AddProduct/AddProduct";
import ProductList from "../../ProductsArea/ProductList/ProductList";
import "./Routing.css";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>
                <Route path="/meeting" element={<ProductList />} />
                <Route path="/group/new" element={<AddProduct />} />
                <Route path="/" element={<Navigate to="/meeting" />} />
            </Routes>
        </div>
    );
}

export default Routing;
