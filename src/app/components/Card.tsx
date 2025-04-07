import { twMerge } from "tailwind-merge";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

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
}) => {
  return (
    <div
      className={twMerge(
        "flex flex-col border border-secondary max-w-max",
        className
      )}
    >
      {children ?? (
        <>
          <div className={twMerge("flex items-center gap-4", headerClass)}>
            {header ?? (
              <Image
                src={imgUrl || "/images/project1.png"}
                alt="Project"
                width={330}
                height={201}
                className="max-h-[200px] w-full object-cover"
              />
            )}
          </div>
          <div
            className={twMerge(
              "flex flex-col gap-4 text-secondary p-4",
              bodyClass
            )}
          >
            {body ?? <p>Default body content</p>}
          </div>
          <div
            className={twMerge(
              "flex items-center gap-4 px-4 pb-4 text-secondary",
              footerClass
            )}
          >
            {footer ?? (
              <>
                {primaryLink && (
                  <Link
                    target="_blank"
                    href={primaryLink || "https://toolstation.nl/"}
                  >
                    <Button>View Project</Button>
                  </Link>
                )}
                {secondaryLink && (
                  <Link
                    target="_blank"
                    href={secondaryLink || "https://github.com/parth-2880"}
                  >
                    <Button>Github</Button>
                  </Link>
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
