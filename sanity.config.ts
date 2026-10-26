import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schema } from "@/sanity/schemaTypes";
import { projectId, dataset, apiVersion } from "@/sanity/env";

export default defineConfig({
  basePath: "/studio",
  name: "peopleshr_studio",
  title: "PeoplesHR Content Studio",
  projectId: projectId || "mock-project-id",
  dataset: dataset || "production",
  schema,
  plugins: [
    structureTool({
      title: "Content Desk",
    }),
  ],
});
