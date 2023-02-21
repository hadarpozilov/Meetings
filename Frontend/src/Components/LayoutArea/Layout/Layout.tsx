import { NavLink } from "react-router-dom";
import Routing from "../Routing/Routing";
import "./Layout.css";

function Layout(): JSX.Element {
    return (
        <div className="Layout">

            <NavLink to="/meeting">Meeting</NavLink>
            <span> | </span>
            <NavLink to="/group/new">Add Product</NavLink>

            <hr />

			<h1> Groups:</h1>

            <Routing />
            
        </div>
    );
}

export default Layout;
