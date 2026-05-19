# MY LIVE PROJECT

## Frontend

[Aura AI Frontend](https://aura-ai-vert.vercel.app/?utm_source=chatgpt.com)

## Backend

[Aura AI Backend](https://aura-ai-glrp.onrender.com?utm_source=chatgpt.com)


---

# HERO SECTION

An immersive AI-powered communication intelligence platform that analyzes emotional tone, persuasion, confidence, and personality signals in real-time using LLMs and dynamic visual intelligence.

Live Demo:
Frontend: https://aura-ai-vert.vercel.app/
Backend: https://aura-ai-glrp.onrender.com
```

---

# SCREENSHOT SECTION


![Aura AI Screenshot](assets/screenshots/home.png)
![Aura AI Screenshot](assets/screenshots/thinking.png)
![Aura AI Screenshot](assets/screenshots/result.png)
![Aura AI Screenshot](assets/screenshots/radar_chart.png)
```

---

# FEATURES SECTION

- Real-time AI communication analysis
- Dynamic radar chart visualization
- Animated confidence ring
- Emotional aura visualization
- AI-powered tone detection
- Persuasion and professionalism scoring
- Glassmorphism futuristic UI
- Fully responsive design
- Framer Motion animations
- Production deployment with Vercel + Render
```

---

# ARCHITECTURE SECTION

```txt
Frontend (Next.js)
        ↓
FastAPI Backend
        ↓
Groq API
        ↓
Llama 3.3 70B
```
````

---

# TECH STACK

### Frontend
- Next.js 15
- TypeScript
- Tailwind CSS
- Framer Motion
- shadcn/ui
- Aceternity UI
- Magic UI
- Recharts

### Backend
- FastAPI
- Python
- Groq SDK

### Deployment
- Vercel
- Render
```

---

# FOLDER STRUCTURE

```txt
aura-ai/
├── frontend/
├── backend/
├── assets/
├── README.md
```
````

---

# LOCAL SETUP

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

uvicorn app:app --reload
```
````

---

# ENV VARIABLES

Create `.env` inside backend:

```env
GROQ_API_KEY=your_api_key
```
````

---

# TEST CASES SECTION (IMPORTANT)

This is VERY smart to include.

It shows:

* engineering maturity
* evaluation thinking
* AI testing mindset

---

# GOOD TEST CASE

### Input
"We’re excited to move forward with this collaboration and believe it will create long-term strategic value for both organizations."

### Expected AI Behavior
- Tone: Confident
- Emotion: Positive
- Confidence Score: High
- Persuasion Level: High
```

---

# BAD TEST CASE

VERY important.

A “bad test case” in AI engineering means:

* ambiguous
* emotionally mixed
* hard-to-analyze
* unreliable structure

Example:

### Input
"Okay."

### Why This Is Difficult
The text is too short and lacks emotional, contextual, or semantic depth. AI analysis may become inconsistent or low-confidence because insufficient signal exists for accurate communication profiling.
```


---


