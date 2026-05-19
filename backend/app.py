from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from groq import Groq
from dotenv import load_dotenv
import os
import json

load_dotenv()

app = FastAPI()

# Allow frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)

class MessageRequest(BaseModel):
    text: str

@app.get("/")
def home():
    return {"message": "Aura AI Backend Running"}

@app.post("/analyze")
def analyze_message(data: MessageRequest):

    prompt = f"""
You are an advanced communication analysis AI.

Analyze the following message and return ONLY valid JSON.

Message:
{data.text}

Return this exact structure:

{{
  "tone": "",
  "emotion": "",
  "confidence_score": "",
  "persuasion_level": "",
  "summary": ""
}}
"""

    completion = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ],
        temperature=0.7,
    )

    response_text = completion.choices[0].message.content

    try:
        parsed = json.loads(response_text)
        return parsed

    except:
        return {
            "tone": "Unknown",
            "emotion": "Unknown",
            "confidence_score": "Unknown",
            "persuasion_level": "Unknown",
            "summary": response_text
        }