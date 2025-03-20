// Handle sending messages
document.getElementById("sendMessage").addEventListener("click", function() {
    sendMessage();
});

document.getElementById("userInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {
    let input = document.getElementById("userInput").value.trim();
    if (input === "") return;

    let chatBox = document.getElementById("chatBox");

    // Add User Message (Right Side)
    let userMessage = document.createElement("p");
    userMessage.classList.add("user-message");
    userMessage.innerHTML = `${input}`;
    chatBox.appendChild(userMessage);

    document.getElementById("userInput").value = "";

    // Scroll to the bottom
    chatBox.scrollTop = chatBox.scrollHeight;

    // Simulate Bot Response (Replace with AI integration)
    setTimeout(() => {
        let botMessage = document.createElement("p");
        botMessage.classList.add("bot-message");
        botMessage.innerHTML = `Just die lil bro💀🙏`;
        chatBox.appendChild(botMessage);

        // Scroll again after bot response
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
}