import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav/Nav";
import Footer from "../Components/Footer/Footer";
import UseAuth from "../Hook/useAuth";
import { ToastContainer } from "react-toastify";

const Root = () => {
    const { loading} = UseAuth();
    if( loading){
       
        return <div className="flex justify-center items-center"><span className=" m-auto loading loading-spinner w-20"></span></div> 
    }
    return (
        <div>
            <ToastContainer></ToastContainer>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;