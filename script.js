const socket = io("https://jouw-backend.onrender.com"); // Vervang met jouw backend-URL

function sendMessage() {
  const msg = document.getElementById("message").value;
  socket.emit("chat message", msg);
  document.getElementById("message").value = "";
}

socket.on("chat message", function(msg) {
  const chatbox = document.getElementById("chatbox");
  chatbox.innerHTML += `<p>${msg}</p>`;
  chatbox.scrollTop = chatbox.scrollHeight;
});
