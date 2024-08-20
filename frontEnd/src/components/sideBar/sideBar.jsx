import SearchBar from "../sideBar/sideBar components/searchBar"
import Conversations from "../sideBar/sideBar components/conversations"
import LogOut from "./sideBar components/logOut"

export default function SideBar(){
    return (
        <div className="h-full flex flex-col justify-between" >
            <SearchBar />
            <div className="divider px-3 my-5"></div>
            <Conversations/>
            <LogOut />
        </div>
    )
}