const messages = [
  {
    id: '1',
    text: "Hi there!",
    user: "Amando",
    added: (new Date()).toLocaleDateString()
  },
  {
    id: '2',
    text: "Hello World!",
    user: "Charles",
    added: (new Date()).toLocaleDateString()
  }
];

export const getAllMessages = ()=>{
    return messages; 
} 

export const getMessageById = (id)=>{
    const message = messages.find(message => message.id === id);
    return message;
}

export const addNewMessage = (message)=>{
    messages.push(message);
    return;
}