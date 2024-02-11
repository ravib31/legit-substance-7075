import {useLocation} from "react-router-dom";
const useGetCurrentPath = () => {
    const location = useLocation()
    return location.pathname;
}

export default useGetCurrentPath;