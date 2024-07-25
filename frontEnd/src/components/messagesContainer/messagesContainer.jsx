import { PiAcornFill } from "react-icons/pi";
import { LuMessagesSquare } from "react-icons/lu";

import Message from "./message";
import MessageInput from "./messageInput";


/*
hoisting only for declarations but arrow functions are EXPRESSIONS so they can't be hoisted 
so even if let and const usef ro arrow functions only their declarations are hoisted but their initializations are not.
*/
const NoMessageSelected = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full h-full ">
        <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Hello 👋 John Doe</p>
        <p>Select a chat to start messaging!</p>
        <LuMessagesSquare className="text-4xl mt-3 md:text-7xl text-center"/>
        </div>
      </div>
    </>
  );
};

const MessageSelectedContent = () => {
  return (
    <>
      <div className="bg-slate-600 p-2.5 rounded-xl">
        <span className="label-text font-bold text-xl text-white-800">To:</span>
        <span className="text-white font-extrabold px-3 text-lg">John Doe</span>
      </div>

      <div className="overflow-auto max-h-100 ">
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>

      <div className="messageInput">
        <MessageInput />
      </div>
    </>
  );
};

export default function Messages() {
    const noMessageSelected = true;
    
    return (
        <>
      <div className="flex flex-col md:min-w-[450px] ml-3  ">
        {noMessageSelected ? <NoMessageSelected /> : <MessageSelectedContent />}
      </div>
    </>
  );



}
