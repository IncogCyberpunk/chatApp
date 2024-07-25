export default function Conversation() {
  return (
    <>
      <div className="flex  gap-5 justify-between items-center hover:bg-sky-500 rounded px-4 cursor-pointer py-2">

        <div className="avatar online">
          <div className="w-14 rounded-full">
            <img src="https://avatar.iran.liara.run/public/49" alt="User avatar" srcset="" />
          </div>
        </div>

        <div className="flex flex-1 justify-between gap-3">
          <p className="font-bold text-gray-300">Ram Thapa</p>
          <span className="text-2xl">🎄</span>
        </div>
        
      </div>
      <div className="divider my-0 py-0 h-2 "></div>
    </>
  );
}
