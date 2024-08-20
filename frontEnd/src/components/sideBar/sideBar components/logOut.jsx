import { HiOutlineLogout } from "react-icons/hi";
import useLogout from "../../../hooks/useLogout";


export default function LogOut(){
    // react hooks (either custom or predefined) can only be called at top level of react functional component or another custom hook
    const {loading, logout} = useLogout();
    
    return (
        <>
            <div className="px-3 mt-14 bottom-0 ">
                 {/* conditional rendering  */}
            {!loading ? 
            (<HiOutlineLogout className="w-8 h-8 text-white cursor-pointer" onClick={logout}/> ):
            (<span className="loading loading-spinner"></span>) }
            </div>
        </>
    )
}