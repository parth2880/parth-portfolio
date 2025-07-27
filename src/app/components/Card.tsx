"use client";

import { twMerge } from "tailwind-merge";
import Image from "next/image";
import Button from "./Button";
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
        "group relative overflow-hidden border border-secondary/30 bg-background/50 backdrop-blur-sm rounded-xl transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover-lift scroll-animate",
        className
      )}
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Animated border */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-primary/10 to-transparent bg-[length:200%_200%] animate-gradient-shift" />

      {children ?? (
        <>
          <div
            className={twMerge("relative overflow-hidden", headerClass)}
          >
            {header ?? (
              <div className="relative">
                <Image
                  src={imgUrl || "/images/project1.png"}
                  alt="Project"
                  width={330}
                  height={201}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-2 scale-0 group-hover:scale-100 transition-transform duration-300">
                    {primaryLink && (
                      <a
                        href={primaryLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-primary rounded-full text-white hover:bg-primary/90 transition-colors hover-scale"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {secondaryLink && (
                      <a
                        href={secondaryLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white rounded-full text-black hover:bg-gray-100 transition-colors hover-scale"
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
              "flex flex-col gap-4 text-secondary p-6",
              bodyClass
            )}
          >
            {body ?? <p>Default body content</p>}
          </div>

          <div
            className={twMerge(
              "flex items-center gap-4 px-6 pb-6 text-secondary",
              footerClass
            )}
          >
            {footer ?? (
              <>
                {primaryLink && (
                  <div className="hover-scale">
                    <Link
                      target="_blank"
                      href={primaryLink}
                      className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                    >
                      <span>View Project</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                )}
                {secondaryLink && (
                  <div className="hover-scale">
                    <Link
                      target="_blank"
                      href={secondaryLink}
                      className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>Github</span>
                    </Link>
                  </div>
                )}
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
