import { GoogleGenAI } from "@google/genai";

// Initialize Gemini API
// Note: In a real production app, ensure strict server-side handling or proxying.
// We are following the instruction to use process.env.API_KEY directly.
const getAiClient = () => {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
        console.warn("API_KEY is not defined in process.env");
        return null;
    }
    return new GoogleGenAI({ apiKey });
};

export const generateSleepInsight = async (sleepData: any): Promise<string> => {
    const ai = getAiClient();
    if (!ai) {
        return "Gemini API Key is missing. Unable to generate AI insights at this time.";
    }

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `
            Analyze the following sleep data for a 1-month-old baby named Keun-heo.
            Provide a short, encouraging 2-sentence summary for the parents about the sleep trend.
            Data: ${JSON.stringify(sleepData)}
            `,
            config: {
                maxOutputTokens: 100,
                temperature: 0.7,
            }
        });

        return response.text || "No insight generated.";
    } catch (error) {
        console.error("Error generating insight:", error);
        return "Unable to connect to AI service. Please try again later.";
    }
};
