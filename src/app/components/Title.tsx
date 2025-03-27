"use client"

type Props = {
    children?: React.ReactNode;
}

const Title: React.FC<Props> = ({ children }) => {
    return (
        <h2 className="text-[2rem] after:border after:border-primary after:w-full after:h-1 after:content-['']">
            <span className="text-primary font-semibold">#</span>{children || "title"}
        </h2>
    )
}

export default Title;