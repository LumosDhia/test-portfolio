import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { ProjectMetadata } from "@/lib/schemas";

const projectsDirectory = path.join(process.cwd(), "content/projects");

export async function getProjects(): Promise<ProjectMetadata[]> {
  try {
    if (!fs.existsSync(projectsDirectory)) {
      return [];
    }

    const fileNames = fs.readdirSync(projectsDirectory);
    const allProjectsData = fileNames
      .filter((name) => name.endsWith(".mdx"))
      .map((name) => {
        const fullPath = path.join(projectsDirectory, name);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data } = matter(fileContents);
        const slug = name.replace(/\.mdx$/, "");

        return {
          slug,
          ...data,
        } as ProjectMetadata;
      });

    return allProjectsData.sort((a, b) => {
      const dateA = new Date(a.publishedAt || "").getTime();
      const dateB = new Date(b.publishedAt || "").getTime();
      return dateB - dateA;
    });
  } catch (error) {
    console.error("Error reading projects:", error);
    return [];
  }
}

export async function getProjectBySlug(slug: string): Promise<{
  metadata: ProjectMetadata;
  content: string;
} | null> {
  try {
    const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      metadata: data as ProjectMetadata,
      content,
    };
  } catch (error) {
    console.error(`Error reading project ${slug}:`, error);
    return null;
  }
}

export async function getProjectSlugs(): Promise<string[]> {
  try {
    if (!fs.existsSync(projectsDirectory)) {
      return [];
    }

    const fileNames = fs.readdirSync(projectsDirectory);
    return fileNames
      .filter((name) => name.endsWith(".mdx"))
      .map((name) => name.replace(/\.mdx$/, ""));
  } catch (error) {
    console.error("Error reading project slugs:", error);
    return [];
  }
}
