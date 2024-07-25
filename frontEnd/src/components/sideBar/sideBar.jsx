import SearchBar from "../sideBar/sideBar components/searchBar"
import Conversations from "../sideBar/sideBar components/conversations"
import LogOut from "./sideBar components/logOut"

export default function SideBar(){
    return (
        <>
            <SearchBar />
            <div className="divider px-3"></div>
            <Conversations />
            <LogOut />
        </>
    )
}