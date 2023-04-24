interface ChildProps {
    color: string;
    onClick: () => void;
    children?: React.ReactNode;
}

export const Child = ({color, onClick}: ChildProps) => {
    return <div>
        {color}
        <button onClick={onClick}>Click Me</button>
    </div>;
};

// FC = Function Component 
// with React.FC you are telling TS that 'Child' will be a React function component
//'Child' might have properties assigned to it like 'propTypes' and 'contextTypes'
//'Child' will receive props of type 'ChildProps'
export const ChildFC: React.FC<ChildProps> = ({ color, onClick, children }) => {
    return <div>
        {color}
        {children}
        <button onClick={onClick}>Click Me</button>
    </div>;
}

