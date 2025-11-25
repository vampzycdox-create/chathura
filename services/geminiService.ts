import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

// System instruction to give the AI context about the companies
const SYSTEM_INSTRUCTION = `
You are the virtual representative for "The Boolean Group". 
Your goal is to explain the group's mission: "Solutions that unlock freedom!".

You represent three main subsidiaries:
1. **BooleanLab**: Provides best-in-class intelligence, design, and technology. They power businesses with intelligent solutions (AI, Data) to save time and effort.
2. **X365**: Transforms ideas into innovative product excellence. They create products powered by computer vision, LLMs, agentic automations, IoT, biometrics, and distributed computing.
3. **INSPECTIVE**: Empowers every child to grow up in a safe and secure home. They transform the housing inspection industry with artificial intelligence.

Keep your answers concise, professional, yet innovative and exciting. 
If asked about services not mentioned, politely explain that The Boolean focuses on these core high-tech areas.
`;

export const sendMessageToGemini = async (
  history: ChatMessage[], 
  newMessage: string
): Promise<string> => {
  // Guideline: The API key must be obtained exclusively from the environment variable process.env.API_KEY.
  if (!process.env.API_KEY) {
    return "Error: API Key is missing. Please check your environment configuration.";
  }

  try {
    // Guideline: Use this process.env.API_KEY string directly
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // We construct the prompt manually to include history and the new message.
    // This stateless approach avoids managing a persistent ChatSession object across React renders for this simple demo.
    
    const prompt = `
    ${SYSTEM_INSTRUCTION}

    Current Conversation History:
    ${history.map(h => `${h.role}: ${h.text}`).join('\n')}
    
    User: ${newMessage}
    Model:
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    // Guideline: The simplest and most direct way to get the generated text content is by accessing the .text property
    return response.text || "I'm sorry, I couldn't generate a response at the moment.";

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently experiencing high traffic. Please try again later.";
  }
};