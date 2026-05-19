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

Analyze the following message.

Message:
{data.text}

IMPORTANT:
Return ONLY valid JSON.
Do not include markdown.
Do not include explanations.

Return this exact structure:

{{
  "tone": "Confident",
  "emotion": "Positive",
  "confidence_score": 92,
  "persuasion_level": 87,
  "empathy_score": 74,
  "professionalism_score": 90,
  "positivity_score": 81,
  "summary": "Short AI interpretation"
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
        temperature=0.3,
    )

    response_text = completion.choices[0].message.content

    print("\nRAW AI RESPONSE:\n")
    print(response_text)

    try:
        # Clean markdown if exists
        cleaned = (
            response_text
            .replace("```json", "")
            .replace("```", "")
            .strip()
        )

        parsed = json.loads(cleaned)

        return parsed

    except Exception as e:
        print("\nJSON ERROR:\n")
        print(e)

        return {
            "tone": "Analysis Error",
            "emotion": "Unknown",
            "confidence_score": 0,
            "persuasion_level": 0,
            "empathy_score": 0,
            "professionalism_score": 0,
            "positivity_score": 0,
            "summary": response_text
        }