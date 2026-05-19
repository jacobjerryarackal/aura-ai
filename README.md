````md
# Aura AI

An immersive AI-powered communication intelligence platform that analyzes emotional tone, persuasion, confidence, and personality signals in real-time using Large Language Models (LLMs) and dynamic visual intelligence.

The system follows a reflex-agent architecture:

```txt
Input → Immediate Analysis → Output
````

The agent does not maintain memory, planning, or long-term reasoning.
Instead, it reacts instantly to user input and generates structured communication analysis in real time.

---

# Live Project

## Frontend

[https://aura-ai-vert.vercel.app/](https://aura-ai-vert.vercel.app/)

## Backend

[https://aura-ai-glrp.onrender.com](https://aura-ai-glrp.onrender.com)

---

# Preview

![Aura AI Screenshot](assets/screenshots/home.png)

![Aura AI Screenshot](assets/screenshots/thinking.png)

![Aura AI Screenshot](assets/screenshots/result.png)

![Aura AI Screenshot](assets/screenshots/radar_chart.png)

---

# Features

* Real-time AI communication analysis
* Dynamic radar chart visualization
* Animated confidence ring
* Emotional aura visualization
* AI-powered tone detection
* Persuasion and professionalism scoring
* Glassmorphism futuristic UI
* Fully responsive design
* Framer Motion animations
* Dynamic AI visualization dashboard
* Production deployment with Vercel + Render
* Structured AI response parsing
* Emotion-reactive interface design

---

# AI Agent Architecture

Aura AI is implemented as a **Simple Reflex Agent**.

The system:

* receives user communication input
* immediately analyzes the communication
* generates structured emotional and behavioral outputs
* visualizes the intelligence dynamically

Unlike advanced agents:

* no memory is maintained
* no planning occurs
* no multi-agent orchestration exists
* no long-term reasoning is performed

This makes Aura AI a strong example of:

* reflex-agent architecture
* reactive AI systems
* real-time LLM inference pipelines

---

# System Architecture

```txt
Frontend (Next.js)
        ↓
FastAPI Backend
        ↓
Groq API
        ↓
Llama 3.3 70B
```

---

# Tech Stack

## Frontend

* Next.js 15
* TypeScript
* Tailwind CSS
* Framer Motion
* shadcn/ui
* Aceternity UI
* Magic UI
* Recharts

## Backend

* FastAPI
* Python
* Groq SDK

## AI Model

* Llama 3.3 70B Versatile

## Deployment

* Vercel
* Render

---

# Project Structure

```txt
aura-ai/
├── frontend/
├── backend/
├── assets/
│   └── screenshots/
├── README.md
```

---

# Local Setup

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/aura-ai.git
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

## Backend Setup

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

uvicorn app:app --reload
```

---

# Environment Variables

Create a `.env` file inside the backend directory:

```env
GROQ_API_KEY=your_api_key
```

---

# API Flow

```txt
User Input
    ↓
Frontend Request
    ↓
FastAPI API Endpoint
    ↓
Groq LLM Inference
    ↓
Structured JSON Response
    ↓
Dynamic Visualization
```

---

# Good Test Case

## Input

"We’re excited to move forward with this collaboration and believe it will create long-term strategic value for both organizations."

## Expected AI Behavior

* Tone: Confident
* Emotion: Positive
* Confidence Score: High
* Persuasion Level: High

---

# Bad Test Case

## Input

"Okay."

## Why This Is Difficult

The text is too short and lacks emotional, contextual, or semantic depth.

AI analysis may become:

* inconsistent
* low-confidence
* ambiguous

because insufficient communication signal exists for reliable profiling.

---

# Challenges Faced

During development, several real-world LLM engineering problems were encountered:

* inconsistent JSON responses
* markdown-wrapped AI outputs
* model deprecation issues
* frontend-backend synchronization
* structured output reliability
* deployment CORS issues

These were solved using:

* response cleaning
* JSON parsing safeguards
* prompt engineering
* production deployment configuration

---

# Key Learning Outcomes

This project helped develop practical understanding of:

* Reflex AI Agent Architecture
* LLMOps Foundations
* FastAPI Backend Engineering
* Production Deployment
* AI Response Parsing
* Dynamic AI Visualization
* Real-Time AI UX Design
* Frontend + Backend Integration
* Structured LLM Outputs
* AI Systems Debugging

---


```
