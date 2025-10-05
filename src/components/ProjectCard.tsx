import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Project } from "@/lib/schemas";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import Icon from "./Icon";

interface Props {
  project: Project;
}

// Helper function to get project slug from name
function getProjectSlug(name: string): string {
  const slugMap: Record<string, string> = {
    "TT4D": "tt4d",
  };
  
  return slugMap[name] || name.toLowerCase().replace(/\s+/g, "-");
}

export function ProjectCard({ project }: Props) {
  const { name, href, description, image, tags, links } = project;
  const projectSlug = getProjectSlug(name);
  const hasArticle = ["TT4D", "Tradingview Telegram Alerts", "NFTVue"].includes(name);

  return (
    <Card className="flex flex-col">
      <CardHeader>
        {image && (
          <Link href={hasArticle ? `/projects/${projectSlug}` : (href || image)}>
            <Image
              src={image}
              alt={name}
              width={500}
              height={300}
              className="h-40 w-full object-cover object-top transition-transform duration-200 hover:scale-105"
            />
          </Link>
        )}
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <CardTitle>{name}</CardTitle>
        <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
          {description}
        </Markdown>
      </CardContent>
      <CardFooter className="flex h-full flex-col items-start justify-between gap-4">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags.toSorted().map((tag) => (
              <Badge
                key={tag}
                className="px-1 py-0 text-[10px]"
                variant="secondary"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
        
        <div className="flex w-full flex-col gap-3">
          {/* External links */}
          {links && links.length > 0 && (
            <div className="flex flex-row flex-wrap items-start gap-1">
              {links.toSorted().map((link, idx) => (
                <Link href={link?.href} key={idx} target="_blank">
                  <Badge key={idx} className="flex gap-2 px-2 py-1 text-[10px]">
                    <Icon name={link.icon} className="size-3" />
                    {link.name}
                  </Badge>
                </Link>
              ))}
            </div>
          )}
          
          {/* Read More button for projects with articles */}
          {hasArticle && (
            <div className="flex justify-end">
              <Link href={`/projects/${projectSlug}`}>
                <Button size="sm" variant="outline" className="text-xs">
                  Read More
                  <ExternalLink className="ml-1 size-3" />
                </Button>
              </Link>
            </div>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
