import { IoSearchSharp } from "react-icons/io5";


export default function SearchBar() {
    
    
  return (
    <>
      <form className="flex gap-2" >
        <input type="text" placeholder="Search..." className="input input-bordered rounded-full" />
        <button type="submit" className="btn btn-circle bg-sky-600 text-white border-none">
            <IoSearchSharp className="w-7 h-7 "/>
        </button>

      </form>
    </>
  );
}
