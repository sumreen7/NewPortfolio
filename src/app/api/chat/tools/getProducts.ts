import { tool } from "ai";
import { z } from "zod";

export const getAchievements = tool({
  description:
    "This tool will show a list of all achievements by Sumreen (e.g., Published Research, Successful Projects, Awards)",
  parameters: z.object({}).optional(),
  execute: async (params = {}) => {
    return "Achievements data retrieved successfully.";
  },
});