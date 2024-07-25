export default function Message() {
  return (
    <>
      <div className="pl-4">
      <div className="chat chat-start py-4">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
        <div className="chat-header">
          <span className="font-semibold pl-3">Obi Kenobi</span>
        </div>
        <div className="chat-footer opacity-90">Delivered at 12:45</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
        <div className="chat-header pr-3">
          <span className="font-semibold">Anakin</span>
        </div>
        <div className="chat-bubble">I hate you!</div>
        <div className="chat-footer opacity-90">Seen at 12:46</div>
      </div>
      </div>
    </>
  );
}
