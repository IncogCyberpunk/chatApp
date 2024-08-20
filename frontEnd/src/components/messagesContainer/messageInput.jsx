import { BsFillSendFill } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";
import {useState }from "react"


export default function MessageInput() {
  const [message,setMessage ] = useState("");
  const {sendMessage,loading}=useSendMessage();

  const handleSubmit =  async (e)=>{
    e.preventDefault();
    // done to prevent sending empty messages
    if(!message) return;
    await sendMessage(message);
    setMessage("");
  }
  
    
  return (
    <>
      <form className="px-2 mt-3" onSubmit={handleSubmit}>
        <div className="w-full relative">
          <input
            type="text"
            className="input input-bordered bg-slate-500 w-full text-base text-white font-medium"
            placeholder="Enter your message ..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {/* inset-y-0 positions the  button fro the top to bottom of parent div */}
          <button type="submit" className="absolute  end-3 inset-y-0 ">
            {loading ? <div className="loading loading-spinner"></div> : <BsFillSendFill className="w-6 h-6" />}
          </button>
        </div>
      </form>
    </>
  );
}
