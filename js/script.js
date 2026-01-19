const greetings = [

    { language: "English", text: "Hello World!" },
    { language: "Spanish", text: "¡Hola Mundo!" },
    { language: "French", text: "Bonjour le Monde!" },
    { language: "German", text: "Hallo Welt!" },
    { language: "Italian", text: "Ciao Mondo!" },
    { language: "Portuguese", text: "Olá Mundo!" },
    { language: "Japanese", text: "こんにちは世界！" },
    { language: "Chinese", text: "你好世界！" },
    { language: "Korean", text: "안녕 세상!" },
    { language: "Russian", text: "Привет мир!" },
    { language: "Arabic", text: "مرحبا بالعالم!" },
    { language: "Hindi", text: "नमस्ते दुनिया!" },
    { language: "Turkish", text: "Merhaba Dünya!" },
    { language: "Dutch", text: "Hallo Wereld!" },
    { language: "Swedish", text: "Hej Världen!" },
    { language: "Greek", text: "Γειά σου Κόσμε!" },
    { language: "Hebrew", text: "שלום עולם!" },
    { language: "Thai", text: "สวัสดีโลก!" },
    { language: "Vietnamese", text: "Xin chào thế giới!" },
    { language: "Polish", text: "Witaj Świecie!" }

];

const greetingElement = document.getElementById('greeting');
const changeButton = document.getElementById('changeGreeting');

function getRandomGreeting() {
    const randomIndex = Math.floor(Math.random() * greetings.length);
    return greetings[randomIndex];
}

function changeGreeting() {
    const randomGreeting = getRandomGreeting();
    greetingElement.textContent = randomGreeting.text;
    
    // Optional: Add a small animation effect
    greetingElement.style.opacity = '0';
    setTimeout(() => {
        greetingElement.style.opacity = '1';
    }, 300);
}

// Add click event listener to the button
changeButton.addEventListener('click', changeGreeting);

// Optional: Add keyboard support (Space or Enter key)
document.addEventListener('keydown', (event) => {
    if (event.code === 'Space' || event.code === 'Enter') {
        changeGreeting();
     }
});