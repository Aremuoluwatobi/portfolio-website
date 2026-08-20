from fastapi import APIRouter
from pydantic import BaseModel
from canned_reply import get_canned_reply
from llm_service import get_ai_reply
from persona import build_prompt

router = APIRouter()


class ChatRequest(BaseModel):
    message: str


class ChatResponse(BaseModel):
    reply: str


@router.post("/chat")
def chat(request: ChatRequest):
    canned = get_canned_reply(request.message)
    if canned:
        return ChatResponse(reply=canned)

    prompt = build_prompt(request.message)
    ai_reply = get_ai_reply(prompt)
    return ChatResponse(reply=ai_reply)
