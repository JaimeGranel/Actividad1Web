import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
const Redirection = (path, delay) => {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(()=>navigate(path, delay), delay);
    });
};
export default Redirection;