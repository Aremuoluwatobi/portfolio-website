def get_canned_reply(prompt: str):
    text = prompt.lower().strip()

    if text in ("hi", "hello", "hey", "yo"):
        return "Hi there! I'm Axiomat AI, Aremu's personal assistant. How can I help you learn about Aremu today?"

    if "how are you" in text or "how're you" in text:
        return "I'm doing great, thanks for asking! I'm here to help you learn about Aremu. What would you like to know?"

    if text in ("okay", "ok", "cool", "nice"):
        return "Awesome! Feel free to ask me about Aremu's projects, experience, skills, or certifications."

    if "thanks" in text or "thank you" in text or "thx" in text:
        return "You're welcome! Let me know if you have any other questions about Aremu."

    if "bye" in text or "goodbye" in text or "see you" in text:
        return "Goodbye! Feel free to come back anytime if you have more questions about Aremu."

    if text in ("who are you", "who're you", "tell me about yourself", "introduce yourself"):
        return "I'm Axiomat AI, Aremu's personal portfolio assistant. Ask me anything about his background, projects, or skills."

    return None
