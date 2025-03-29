import { twMerge } from "tailwind-merge";
import Image from "next/image";
import Button from "./Button";

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
              />
            )}
          </div>
          <div
            className={twMerge("flex flex-col gap-4 text-secondary p-4", bodyClass)}
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
                <Button>View Project</Button>
                <Button>Github</Button>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
