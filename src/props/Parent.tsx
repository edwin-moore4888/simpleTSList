import { ChildFC } from './Child'
const Parent = () => {
    return <ChildFC color="blue" onClick={() => console.log('Clicked')}>
        {/* if we use ChildFC we can use the opening and closing 'ChildFC' tags and it will allow the component to accept 'children' props */}
        aasodfflasdkj
    </ChildFC>
};

export default Parent;