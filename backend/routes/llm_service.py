from google import genai
from config import API_KEY

Client = genai.Client(api_key=API_KEY)


def get_ai_reply(prompt: str):
    try:
        interaction = Client.interactions.create(
            model="gemini-flash-lite-latest",
            input=prompt
        )
        return interaction.output_text.strip()
    except Exception as e:
        print("llm error:", {e})
        return "I'm having a technical moment. Could you try asking that again?"
