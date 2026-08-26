import type { AiAnalysisResult, AiService } from "@/services/ai/types";

export class UnconfiguredAiService implements AiService {
  async analyze(): Promise<AiAnalysisResult> {
    return {
      summary: "El proveedor de IA aún no está configurado.",
      findings: [],
    };
  }
}

export const aiService: AiService = new UnconfiguredAiService();