import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { streamText, UIMessage } from "ai";
import { killDesktop } from "@/lib/e2b/utils";
import { bashTool, computerTool } from "@/lib/e2b/tool";
import { prunedMessages } from "@/lib/utils";

// Allow streaming responses up to 30 seconds
export const maxDuration = 300;

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY || "AIzaSyDk0QBl2div7ZrmZD2ECqP5F3IYHHic55g"
});

export async function POST(req: Request) {
  const { messages, sandboxId }: { messages: UIMessage[]; sandboxId: string } =
    await req.json();
  try {
    const result = streamText({
      model: google("gemini-1.5-pro") as any,
      system:
        "Nazywasz się Gemini i jesteś pomocnym asystentem z dostępem do komputera. " +
"Użyj narzędzia komputerowego, aby pomóc użytkownikowi w jego prośbach. " +
"Użyj narzędzia bash, aby wykonywać polecenia na komputerze. Możesz tworzyć pliki i foldery za pomocą narzędzia bash. Zawsze preferuj narzędzie bash, gdy jest to wykonalne dla danego zadania. " +
"Upewnij się, że informujesz użytkownika, gdy konieczne jest oczekiwanie. " +
"Jeśli przeglądarka otworzy się z kreatorem konfiguracji, MUSISZ GO ZIGNOREOWAĆ i przejść od razu do następnego kroku (np. wpisz adres URL w pasku wyszukiwania)."
,
      messages: prunedMessages(messages),
      tools: { computer: computerTool(sandboxId), bash: bashTool(sandboxId) },
    });

    // Create response stream
    const response = result.toDataStreamResponse({
      // @ts-expect-error eheljfe
      getErrorMessage(error) {
        console.error(error);
        return error;
      },
    });

    return response;
  } catch (error) {
    console.error("Chat API error:", error);
    await killDesktop(sandboxId); // Force cleanup on error
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
