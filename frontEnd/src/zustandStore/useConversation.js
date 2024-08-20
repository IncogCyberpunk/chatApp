import {create} from 'zustand';

// useConversationStore is a zustand store that returns an object with the properties selectedConversation and messages and their updating functions
const useConversationStore = create((set) => ({
    selectedConversation :null,
    // defining that setConversation is a function.It takes an argument selectedConversation and uses the set function provided by zustand to update the store's state as selectedConversation:selectedConversation (i.e. selectedConversation property of the object returned by the store).
    setSelectedConversation : (selectedConversation) => set({selectedConversation}),
    messages : [],
    setMessages : (messages) => set({messages}),
}))

export default useConversationStore; 