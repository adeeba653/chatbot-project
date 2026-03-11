# Chatbot-Project

I build this Project while learning React from a Tutorial.
we split the entire app into three main components : **ChatInput**, **ChatMessage** and **ChatMessages**, which made the app look a lot clean to understand and create as well.
we used useState() functionality of react to make an Array of chat messages linked to the chatMessages components, which stores all the messages so far in the chats. this is passed to the ChatInput and ChatMessages component via props.
we also make a custom hook called autoScroll() to make the chats autoScroll once they overflow out of the view of the page.
we also used useEffect() and useRef() to make the autoScroll() and other little fucntionalities of our app.
