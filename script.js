const socket = io();
const editor = document.getElementById("editor");

// Load existing document
socket.on("load-document", (data) => {
    editor.value = data;
});

// Send changes to server
editor.addEventListener("input", () => {
    socket.emit("send-changes", editor.value);
});

// Receive changes from other users
socket.on("receive-changes", (data) => {
    editor.value = data;
});
