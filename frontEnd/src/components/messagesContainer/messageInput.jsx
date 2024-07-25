import { BsFillSendFill } from "react-icons/bs";

export default function MessageInput() {
    
  return (
    <>
      <form className="px-2 my-3">
        <div className="w-full relative">
          <input
            type="text"
            className="input input-bordered bg-slate-500 w-full text-base text-white font-medium"
            placeholder="Enter your message ..."
          />
          {/* inset-y-0 positions the  button fro the top to bottom of parent div */}
          <button type="submit" className="absolute  end-3 inset-y-0 ">
            <BsFillSendFill className="w-6 h-6" />
          </button>
        </div>
      </form>
    </>
  );
}
