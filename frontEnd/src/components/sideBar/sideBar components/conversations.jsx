import Conversation from "./conversation"

export default function Conversations(){
    return (
        <>
            <div className="flex flex-col py-8 overflow-auto max-h-80 ">
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
            </div>
        </>
    )
}