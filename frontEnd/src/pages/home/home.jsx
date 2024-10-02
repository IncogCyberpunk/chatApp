import Sidebar from "../../components/sideBar/sideBar"
import MessagesContainer from "../../components/messagesContainer/messagesContainer"

const Home = () => {
  const toggleView= () => {
  }
  
  return (
    <div className="flex h-[48rem] sm:h-[60rem] w-[27rem] sm:w-[55rem] overflow-auto pb-6 pl-3 pr-3 bg-gray-600  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40 rounded-xl pt-4  justify-center mx-auto">
      <div className="sideBar flex-col sm:border-r-2  border-gray-800 pr-3 h-full">
        <Sidebar className=""/>
      </div>
      <div className="messages hidden lg:flex flex-col items-center justify-center">
        <MessagesContainer />
      </div>
    </div>
  ) 
}

export default Home

