import Sidebar from "../../components/sideBar/sideBar"
import MessagesContainer from "../../components/messagesContainer/messagesContainer"

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] overflow-auto pb-6 pl-3 pr-3 bg-gray-600  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40 rounded-xl pt-4  justify-center mx-auto">
      <div className="sideBar flex-col justify-between border-r-2 border-gray-800 pr-3 h-full">
        <Sidebar />
      </div>
      <div className="messages flex flex-col items-center justify-center">
        <MessagesContainer className="overflow-auto max-h-92 border-solid border-3 border-red-400 pl-3"/>
      </div>
    </div>
  ) 
}

export default Home

