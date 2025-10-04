// Sample JSON Data
const chats = [
  {
    name: "John",
    messages: [
      { text: "Hey! How are you?", type: "received" },
      { text: "I’m good, what about you?", type: "sent" }
    ]
  },
  {
    name: "Jane",
    messages: [
      { text: "Hi, are we meeting tomorrow?", type: "received" },
      { text: "Yes! See you at 5pm.", type: "sent" }
    ]
  }
];

const chatList = document.getElementById("chat-list");
const chatMessages = document.getElementById("chat-messages");
const chatTitle = document.getElementById("chat-title");
const sendBtn = document.getElementById("send-btn");
const messageInput = document.getElementById("message-input");

let currentChat = null;

// Load chat list
chats.forEach((chat, index) => {
  const li = document.createElement("li");
  li.textContent = chat.name;
  li.onclick = () => loadChat(index);
  chatList.appendChild(li);
});

function loadChat(index) {
  currentChat = chats[index];
  chatTitle.textContent = currentChat.name;
  chatMessages.innerHTML = "";

  currentChat.messages.forEach(msg => {
    const div = document.createElement("div");
    div.classList.add("message", msg.type);
    div.textContent = msg.text;
    chatMessages.appendChild(div);
  });
}

sendBtn.onclick = () => {
  if (!currentChat) return;
  const text = messageInput.value.trim();
  if (text === "") return;

  const newMessage = { text, type: "sent" };
  currentChat.messages.push(newMessage);

  const div = document.createElement("div");
  div.classList.add("message", "sent");
  div.textContent = text;
  chatMessages.appendChild(div);

  messageInput.value = "";
  chatMessages.scrollTop = chatMessages.scrollHeight;
};
