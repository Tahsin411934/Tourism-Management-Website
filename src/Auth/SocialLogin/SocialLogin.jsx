import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UseAuth from "../../Hook/useAuth";
const SocialLogin = () => {
  
    const {googleLogin,githubLogin,setLoading} = UseAuth()
    const location = useLocation();
    const navigate = useNavigate()
   const handleGoogleLogin=()=>{
    setLoading(true)
    googleLogin()
    .then(()=>{
        setLoading(true)
        navigate(location?.state ? location.state : "/");
        setLoading(false)
    })
    .catch((error)=>{
       console.log(error.Message);
    })
}
   const handleGithubLogin=()=>{
    setLoading(true)
    githubLogin()
    .then(()=>{
        setLoading(false)
        navigate(location?.state ? location.state : "/");
    })
    .catch((error)=>{
        toast.error(error.Message);
    })
}
    
    return (
        <div>
            <div className="w-[70%] mx-auto"><p>---------- Login with  ---------</p></div>
            <div className="form-control mt-6">
          <button onClick={handleGoogleLogin} type="submit" className="btn text-xl bg-slate-300"><FcGoogle />Google </button>
          <button onClick={handleGithubLogin} type="submit" className="btn text-xl mt-5 bg-slate-300"><FaGithub />Github </button>
        </div>
        <ToastContainer></ToastContainer>
        </div>
    );
};

export default SocialLogin;