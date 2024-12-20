import { IoSearchSharp } from "react-icons/io5";
import useConversationStore from "../../../zustandStore/useConversation";
import useGetConversations from "../../../hooks/useGetConversations";
import { useState } from "react";
import toast from "react-hot-toast"

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversationStore();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search query should be atleast 3 characters long");
    }

    // implicit return
    const matchingConversation = conversations.find((e) => e.fullName.toLowerCase().includes(search.toLowerCase()));
    if (matchingConversation) {
      setSelectedConversation(matchingConversation);
    } else toast.error("No such user found ");
    setSearch("");
  };

  return (
    <>
      <form className="flex gap-2 " onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input input-bordered rounded-full  text-md text-white placeholder-gray-300"
        />
        <button
          type="submit"
          className="btn btn-circle bg-sky-600 text-white border-none"
        >
          <IoSearchSharp className="w-7 h-7 " />
        </button>
      </form>
    </>
  );
}
