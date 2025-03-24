const Button: React.FC = () => {
    type Props = {
        label: string;

    }
    return (
        <button className="py-2 px-4 border border-primary">
            Hello world
        </button>
    )
}

export default Button;