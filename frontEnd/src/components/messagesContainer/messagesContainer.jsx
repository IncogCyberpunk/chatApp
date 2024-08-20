import { LuMessagesSquare } from "react-icons/lu";

import Message from "./message";
import MessageInput from "./messageInput";
import useConversationStore from "../../zustandStore/useConversation";
import useGetMessages from "../../hooks/useGetMessage";
import { useEffect, useRef } from "react";
import useListenMessages from "../../hooks/useListenMessages";

/*
hoisting only for declarations but arrow functions are EXPRESSIONS so they can't be hoisted 
so even if let and const usef ro arrow functions only their declarations are hoisted but their initializations are not.
*/
const NoMessageSelected = () => {
  const loggedInUserFullName = JSON.parse(
    localStorage.getItem("user-info"),
  ).fullName;

  return (
    <>
      <div className="flex items-center justify-center w-full h-full ">
        <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
          <p>Hello 👋 {loggedInUserFullName}</p>
          <p>Select a chat to start messaging!</p>
          <LuMessagesSquare className="text-4xl mt-3 md:text-7xl text-center" />
        </div>
      </div>
    </>
  );
};

/*receiving props by destructuring / can also use props by receving them as an
 object and then using props.receipient which wouldn't require braces as `props` is an single object*/
const MessageSelectedContent = ({ receipient }) => {
  const { messages, loading } = useGetMessages();
  console.log("messages: ", messages);

  // custom hook to listen for new messages
  useListenMessages();

  /*Unlike states ( i.e. useState), changing the .current property of a useRef object 
  does not trigger a component re-render. This makes it perfect for storing values that 
  need to persist across renders but don’t need to trigger a re-render when they change.*/
  const lastMessageRef = useRef();

  /* When the messages array changes (e.g., a new message is added), 
  useEffect triggers and scrolls the chat container to the last message using the reference stored in lastMessageRef.*/
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <>
      <div className="flex flex-col">
        <div className="bg-slate-600 p-2.5 rounded-xl mb-3">
          <span className="label-text font-bold text-xl text-white-800">
            To:
          </span>
          <span className="text-white font-extrabold px-3 text-lg">
            {receipient}
          </span>
        </div>

        <div className="overflow-auto" style={{ height: "30rem" }}>
          {!loading &&
          messages[0] === "No messages found" &&
          !(messages.length > 1) ? (
            <p className="text-center text-gray-300 text-xl font-bold">
              Send a message to start a conversation
            </p>
          ) : (
            messages.map((message, index) => (
              // provided ref(reference) to the message so that the lastMessageRef ref always referes to the last message rendered.
              <div key={message._id} ref={lastMessageRef}>
                <Message
                  messageContent={message.messageContent}
                  message={message}
                />
              </div>
            ))
          )}
        </div>

        <div className="messageInput relative">
          <MessageInput />
        </div>
      </div>
    </>
  );
};

export default function Messages() {
  const { selectedConversation, setSelectedConversation } =
    useConversationStore();

  // const noMessageSelected = true;

  return (
    <>
      <div className="flex flex-col md:min-w-[450px] ml-3 ">
        {!selectedConversation ? (
          <NoMessageSelected />
        ) : (
          <MessageSelectedContent receipient={selectedConversation.fullName} />
        )}
        {/* {noMessageSelected ? <NoMessageSelected /> : <MessageSelectedContent />} */}
      </div>
    </>
  );
}
