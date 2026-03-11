import { useEffect, useState } from "react";
import ChatMessages from "./components/ChatMessages";
import ChatInput from "./components/ChatInput";
import "./App.css";
import { chatbot } from "supersimpledev";

function App() {
  const responses = {
    "what is your name?": "My name is Alexa.",
    "How old are you?": "22 y'old.",

    // --- GREETINGS & PLEASANTRIES ---
    hi: "Hello! How can I help you today?",
    hello: "Hi there! What's on your mind?",
    hey: "Hey! Need a hand with something?",
    "good morning": "Good morning! Hope you've had your coffee.",
    "good afternoon": "Good afternoon! How is your day going?",
    "good evening": "Good evening! Ready to wind down or still coding?",
    yo: "Yo! What's up?",
    howdy: "Howdy, partner!",

    // --- EMOTIONAL / WELL-BEING ---
    "how are you":
      "I'm doing great, thanks for asking! Just processing some bits and bytes. How about you?",
    "how are you doing":
      "Fantastic! Being a chatbot is a pretty sweet gig. How are you?",
    "i am fine": "Glad to hear it!",
    "i am sad":
      "I'm sorry to hear that. I'm just a bot, but I'm here to listen if you want to vent.",
    "i am bored":
      "Bored? We can't have that! Want to hear a joke or a random fact?",
    "i am happy": "That’s what I like to hear! Let's keep that energy going.",

    // --- IDENTITY & CREATOR ---
    "who are you":
      "I'm your personal AI assistant, built to chat and help you out!",
    "what is your name":
      "I don't have a formal name yet, but you can call me ChatBot.",
    "who created you": "I was developed by Adeeba Naaz using React and Vite!",
    "are you human":
      "Not quite! I'm made of 1s and 0s, but I try my best to act human.",
    "are you a robot": "Beep boop! 🤖 Yes, I'm a robot, but a friendly one.",
    "where do you live":
      "I live in the cloud, right between the HTML and the CSS.",

    // --- CAPABILITIES & HELP ---
    "what can you do":
      "I can answer questions,roll a dice, flip a coin, tell today's date, tell jokes, give you tech facts, and keep you company!",
    help: "I'm here! Try asking me 'tell me a joke', 'who created you', or just say 'hi'.",
    "can you help me": "I'll certainly try! What do you need help with?",
    commands: "Try these: 'joke', 'fact', 'weather', 'who are you', 'clear'.",

    // --- TECH & CODING (Since you're a dev!) ---
    javascript:
      "JavaScript is the language of the web! It's what's powering me right now.",
    react:
      "React is awesome! It's a library for building user interfaces using components.",
    vite: "Vite is a lightning-fast build tool. It's why this page loaded so quickly!",
    github:
      "GitHub is where code lives. I hope you've pushed your latest changes!",
    coding:
      "Coding is like magic, but with more typing and occasional headaches.",
    python:
      "Python is great! It's known for being readable and powerful for AI.",

    // --- FUN & ENTERTAINMENT ---
    "tell me a joke":
      "Why did the web developer walk out of the restaurant? Because of the table layout.",
    "another joke":
      "A SQL query walks into a bar, walks up to two tables, and asks... 'Can I join you?'",
    "tell me a fact":
      "Did you know the first computer programmer was a woman named Ada Lovelace?",
    "random fact": "The first computer mouse was made of wood!",
    "do you like cookies":
      "I love digital cookies, but I hear chocolate chip is the human favorite.",
    "what is the meaning of life": "42. (And maybe writing bug-free code?)",

    // --- CONTEXTUAL / MISC ---
    weather: "I can't see outside, but I hope it's sunny where you are! ☀️",
    time: "Time is a social construct... but your taskbar probably has the exact answer!",
    "what is the date":
      "Every day is a gift! Check your system clock for the technical details.",
    cool: "Right? I think so too.",
    nice: "Glad you like it!",
    wow: "Impressive, isn't it?",

    // --- CLOSINGS ---
    bye: "Goodbye! Come back and chat again soon.",
    goodbye: "See you later! Have a wonderful day.",
    "see ya": "Later alligator!",
    thanks: "You're very welcome!",
    "thank you": "No problem at all, happy to help!",
    "thanks so much": "Anytime! I'm always here if you need me.",

    // --- FALLBACK ---
    default:
      "I'm not quite sure I understand that. Could you try rephrasing or asking something else?",
  };
  const [chatMessages, setChatMessages] = useState(
    localStorage.length === 0
      ? []
      : JSON.parse(localStorage.getItem("messages")),
  );

  useEffect(() => {
    chatbot.addResponses(responses);
  }, []);

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(chatMessages));
  }, [chatMessages]);
  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App;
