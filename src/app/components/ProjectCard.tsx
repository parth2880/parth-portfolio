"use client";

import React from "react";
import Card from "./Card";

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    liveUrl: string;
    githubUrl?: string;
    tags: string[];
    index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    image,
    liveUrl,
    githubUrl,
    tags,
    index
}) => {
    return (
        <div className="scroll-animate h-full" style={{ animationDelay: `${index * 0.1}s` }}>
            <Card
                className="h-full"
                imgUrl={image}
                primaryLink={liveUrl}
                secondaryLink={githubUrl}
                body={
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{description}</p>
                        <div className="flex flex-wrap gap-2">
                            {tags.map(tag => (
                                <span key={tag} className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                }
            />
        </div>
    );
};

export default ProjectCard; 