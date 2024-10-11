
# AlgoAce
AlgoAce is an interactive platform designed to help users learn and practice algorithms. It offers various problem-solving challenges, real-time feedback, and AI-powered assistance to enhance learning. With built-in code execution and progress tracking, AlgoAce provides an engaging and educational experience for developers of all levels.



## Features

- **Algorithmic Challenges:** Solve problems categorized by difficulty: Easy, Medium, Hard.
- **Code Sandbox with Secure Execution:** Run and test your code in a secure, isolated environment using Piston.
- **Socratic Learning Approach:** Guidance through hints and throughtful questions to help you learn algorithms.
- **Real-time Progress Tracking:** Track your problem-solving progress and view detailed statistics.


## Installation

1. Clone the repository

```bash
git clone https://github.com/your-username/algoace.git
cd algoace
```
2. Install dependencies:
```bash
npm install
```
3. Set up environment variables. Create a .env file with following:
```bash
MONGO_URI=<your-mongodb-uri>
GEMINI_API_KEY=<your-gemini-api-key>
PISTON_API_URL=<your-piston-api-url>

```
4. Start the development server:
```bash
npm run dev
```
Vist https://localhost:3001 in your browser to view the app.
### Frontend
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![Framer](https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

### Backend
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

## Usage

* Sign up or log in to start solving algorithm challenges.
* filter challenges by difficulty or problem types.
* Use the code sandbox to test your solutions, and submit your code to track progress.
* Access AI assistance for problem hints, code susggestions, and debugging tips.
* Monitor your learning progress on your user dashboard.




## AI Integration
AlgoAce integrates Google's Gemini AI to enhance the learning experience:

* Problem-Solving Hints: Receive contextual hints and guidance when you're stuck.

* Socratic learning: The AI encourages learning through insightful questions that helps you think through problems.

* Error Handling: Gemini assists in debugging and explaining error messages.
