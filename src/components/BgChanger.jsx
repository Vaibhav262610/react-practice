import React, { useState } from 'react'

const BgChanger = () => {

    const [color, setColor] = useState('Black')


    return (
        <>
            <div className='w-full h-screen duration-200' style={{ backgroundColor: color }} >
                <div className='w-full h-screen flex justify-center items-end '>
                    <div className='bg-blue-300 w-5/12 rounded-md text-3xl flex mb-24 gap-4 justify-center p-4  text-black'>
                        <button className='bg-red-500 p-2 rounded-lg' onClick={() => setColor('red')}>RED</button>
                        <button className='bg-yellow-500 p-2 rounded-lg' onClick={() => setColor('yellow')}>YELLOW</button>
                        <button className='bg-green-500 p-2 rounded-lg' onClick={() => setColor('green')}>GREEN</button>
                        <button className='bg-blue-500 p-2 rounded-lg' onClick={() => setColor('blue')}>BLUE</button>
                        <button className='bg-gray-500 p-2 rounded-lg' onClick={() => setColor('gray')}>GRAY</button>

            <button className='bg-pink-500 p-2 rounded-lg'     onClick={() => setColor('pink')}>PINK</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BgChanger