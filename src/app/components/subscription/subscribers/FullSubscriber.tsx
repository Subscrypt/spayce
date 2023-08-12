import React from 'react'
import randomColor from 'randomcolor'
import Avatar from 'boring-avatars';
import { useState } from 'react';

interface User {
    avatar?: string;
    user?: string;
    message?: string;
    hasWarning?: boolean;
}



const FullSubscriber = ({ user, message, avatar, hasWarning }: User) => {
    const [color, setColor] = useState(randomColor());
    return (
        <>
            {user ?
                <div className='flex text-sm flex-row gap-2 items-center p-1 pr-3 bg-white border border-white rounded-lg'>
                    <div
                        style={{ backgroundColor: color }}
                        className='flex w-10 h-10 rounded-md overflow-hidden items-center justify-center'>
                        {avatar ? <Avatar
                            size={80}
                            name={user}
                            variant="beam"
                            square={true}
                            colors={["#FFE181", "#EEE9E5", "#FAD3B2", "#FFBA7F", "#FF9C97"]}
                        /> : <div className='text-white font-semibold w-full h-full flex justify-center items-center'>{user[0]}</div>}
                    </div>
                    <div className="flex flex-col items-start">
                        <span className="font-semibold">{user}</span>
                        <span className="opacity-50">{message ? message : 'Paid & approved'}</span>
                    </div>
                </div>
                :
                <div className='flex text-sm flex-row gap-2 items-center p-1 px-2 bg-gray-50 border border-gray-50 rounded-lg'>
                    <div className="flex flex-col items-start">
                        <span className="font-semibold">Empy Slot</span>
                        <span className="opacity-50">Invite more people</span>
                    </div>
                </div>}

        </>
    )
}

export default FullSubscriber