
import { tool } from "ai";
import { z } from "zod";


export const getProjects = tool({
  description:
    "This tool will show a list of all projects made by Sumreen (e.g., GenAI agents, AI-powered products, research projects, etc.)",
  parameters: z.object({}).optional(),
  execute: async (params = {}) => {
    return "Projects data retrieved successfully.";
  },
});