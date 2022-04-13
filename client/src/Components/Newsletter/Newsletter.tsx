import React from 'react';

interface Props {
    h: string;
}

 
export const Newsletter = ({ h }: Props) => {

    const simbol = ">"



    return (


        <div className="grid grid-cols-6 gap-4">

            <div className='text-left ml-4'>
                <span className="md:ml-auto md:mb- col-start-1 col-end-7 text-xl font-['DM Sans'] font-normal  "> Subscribe to our  newsletter </span>
            </div>

            <div className='grid grid-cols-2 w-[32rem] col-start-1 col-end-7 '>

                <input
                    type="text"
                    className="
                        md:mb-6
                        form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-black 
                        bg-clip-padding                                         
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-white focus:bg-black focus:border-blue-600 focus:outline-none
                        flex-initial w-64
                                "
                    id="exampleFormControlInput1"
                    placeholder="Email address" />



                <button
                    type="submit"
                    className="
                        bg-yellow
                        inline-block
                        rounded-t-lg
                        w-12 
                        h-12
                        px-6 py-2 
                        text-blue                     
                        leading-tight 
                        font-black
                        text-sm
                        text-center
                        hover:bg-blue 
                        hover:text-light-blue
                        hover:bg-opacity-5
                        hover:border-1
                        hover:border-white 
                        focus:outline-none 
                        focus:ring-0 
                        transition duration-150 ease-in-out
                        border-0
                        md:mr-auto mb-6  "
                >
                    <div className='
                        flex
                        m-auto
                        justify-center
                    '>
                        {simbol}
                    </div>

                </button>

            </div>
        </div>

    )
}





