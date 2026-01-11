const chatbot = document.getElementById("chatbot");
const openChat = document.getElementById("openChat");
const closeChat = document.getElementById("closeChat");
const chatMessages = document.getElementById("chatMessages");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

openChat.onclick = () => {
  chatbot.style.display = "flex";
  openChat.style.display = "none";
};

closeChat.onclick = () => {
  chatbot.style.display = "none";
  openChat.style.display = "block";
};

function addMessage(msg, type) {
  const div = document.createElement("div");
  div.classList.add("message", type === "user" ? "user-msg" : "bot-msg");
  div.innerText = msg;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Simple rule-based bot
function botReply(userMsg) {
  let reply = "I'm not sure, but I’ll connect you with support soon.";
  userMsg = userMsg.toLowerCase();

  if (userMsg.includes("hello") || userMsg.includes("hi")) {
    reply = "Hello 👋 How can I help you today?";
  } else if (userMsg.includes("emergency")) {
    reply = "🚨 Please dial your local emergency number immediately!";
  } else if (userMsg.includes("features")) {
    reply = "Our system offers real-time alerts, agency coordination, and resource management.";
  } else if (userMsg.includes("contact")) {
    reply = "You can reach us at support@rescue.org 📧";
  }

  setTimeout(() => addMessage(reply, "bot"), 500);
}

sendBtn.onclick = () => {
  const msg = userInput.value.trim();
  if (msg) {
    addMessage(msg, "user");
    botReply(msg);
    userInput.value = "";
  }
};

userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendBtn.click();
  }
});
