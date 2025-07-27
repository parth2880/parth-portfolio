"use client";

import { twMerge } from "tailwind-merge";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

type Props = {
  children?: React.ReactNode;
  header?: React.ReactNode;
  body?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  headerClass?: string;
  bodyClass?: string;
  footerClass?: string;
  imgUrl?: string;
  primaryLink?: string;
  secondaryLink?: string;
  delay?: number;
};

const Card: React.FC<Props> = ({
  children,
  header,
  body,
  footer,
  className,
  headerClass,
  bodyClass,
  footerClass,
  imgUrl,
  primaryLink,
  secondaryLink,
  delay = 0,
}) => {
  return (
    <div
      className={twMerge(
        "group relative overflow-hidden bg-card border border-border rounded-xl transition-all duration-300 hover:shadow-lg hover-lift flex flex-col",
        className
      )}
      style={{ animationDelay: `${delay}s` }}
    >
      {children ?? (
        <>
          <div className={twMerge("relative overflow-hidden", headerClass)}>
            {header ?? (
              <div className="relative">
                <Image
                  src={imgUrl || "/images/project1.png"}
                  alt="Project"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-3 scale-0 group-hover:scale-100 transition-transform duration-300">
                    {primaryLink && (
                      <a
                        href={primaryLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-primary rounded-full text-primary-foreground hover:bg-primary/90 transition-colors hover-scale"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {secondaryLink && (
                      <a
                        href={secondaryLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-background rounded-full text-foreground hover:bg-muted transition-colors hover-scale"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div
            className={twMerge(
              "p-6 space-y-4",
              bodyClass
            )}
          >
            {body ?? <p>Default body content</p>}
          </div>

          <div
            className={twMerge(
              "px-6 pb-6 mt-auto",
              footerClass
            )}
          >
            {footer ?? (
              <div className="flex items-center gap-4">
                {primaryLink && (
                  <Link
                    href={primaryLink}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    <span>View Project</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                )}
                {secondaryLink && (
                  <Link
                    href={secondaryLink}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Github</span>
                  </Link>
                )}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
