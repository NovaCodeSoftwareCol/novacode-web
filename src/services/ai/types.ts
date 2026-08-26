export type AiAnalysisRequest = {
  source: string;
  context?: string;
};

export type AiAnalysisResult = {
  summary: string;
  findings: string[];
};

export type AiService = {
  analyze(request: AiAnalysisRequest): Promise<AiAnalysisResult>;
};