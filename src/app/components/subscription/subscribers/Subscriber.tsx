import React, { useState } from 'react'
import randomColor from 'randomcolor'
import Avatar from 'boring-avatars';

interface User {
    avatar?: string;
    user?: string;
    message?: string;
    hasWarning?: boolean;
}



interface MousePosition {
    x: number | null;
    y: number | null;
}

const useMousePosition = (): MousePosition => {
    const [mousePosition, setMousePosition] = React.useState<MousePosition>({ x: null, y: null });

    React.useEffect(() => {
        const updateMousePosition = (ev: MouseEvent) => {
            setMousePosition({ x: ev.clientX, y: ev.clientY });
        };

        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    return mousePosition;
};

const Information = ({ user, message, hasWarning }: User) => {
    const mousePosition = useMousePosition();
    return (<div style={{ left: mousePosition.x + 'px', top: mousePosition.y + 'px' }} className={`absolute text-xs flex flex-col items-start gap-0 rounded-xl py-2 px-3 bg-gray-100 border-2 ${hasWarning ? 'border-red-300' : 'border-gray-200'}  shadow-xl z-10`} >
        <div className='font-bold'>
            {user}
        </div>
        <div className='font-medium'>
            {message}
        </div>
    </div >)
}



const Subscriber = ({ user, message, avatar, hasWarning }: User) => {
    const [information, setInformation] = useState(false);
    const renderInformation = () => {
        return setInformation(!information);
    }
    const [color, setColor] = useState(randomColor());

    return (
        <>
            {user !== "Empty slot" ?
                <div onMouseEnter={renderInformation}
                    onMouseLeave={renderInformation}
                    className={`${information ? 'z-10' : ''}  rounded-full border-2 mr-[-12px] ${hasWarning ? 'border-red-500' : 'border-gray-50'}  p-px bg-gray-50`}>
                    <div
                        style={{ backgroundColor: color }}
                        className={`rounded-full w-[24px] h-[24px]`}>
                        {avatar ? <Avatar
                            size={24}
                            name={user}
                            variant="beam"
                            colors={["#FFE181", "#EEE9E5", "#FAD3B2", "#FFBA7F", "#FF9C97"]}
                        /> :
                            // <div className='text-white font-semibold w-full h-full flex justify-center items-center'>{user[0]}</div>
                            <Avatar
                                size={24}
                                name={user}
                                variant="beam"
                                colors={["#FFE181", "#EEE9E5", "#FAD3B2", "#FFBA7F", "#FF9C97"]}
                            />
                        }
                    </div>
                    {information ? <Information user={user} message={message} hasWarning={hasWarning} /> : null}
                </div >
                :
                <div onMouseEnter={renderInformation}
                    onMouseLeave={renderInformation}
                    className={`${information ? 'z-10' : ''}  rounded-full border-2 mr-[-12px] border-gray-50 p-px bg-gray-50`}>
                    <div className='rounded-full bg-gray-200  w-[24px] h-[24px]'>
                    </div>
                    {information ? <Information message='Empty Slot' /> : null}
                </div>}


        </>
    )
}

export default Subscriber