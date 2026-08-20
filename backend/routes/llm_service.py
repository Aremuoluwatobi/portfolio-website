from google import genai
from config import API_KEY

client = genai.client(api_key=API_KEY)


def get_ai_reply(prompt: str):
    try:
        interaction = client.interaction.create(
            model="gemini-3.7-flash",
            content=prompt
        )
        return interaction.text.strip()
    except Exception as e:
        print("llm error:", {e})
        return "I'm having a technical moment. Could you try asking that again?"
