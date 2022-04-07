import React from 'react'

export const Icon = ({ icons }) => {

  
    
    
    return (
        <>
            {




                icons.map(function (icon: Object) {
                    return (


                        <a href="#!" type="button" className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fab"
                                data-icon={icon.dataIcon}
                                className="w-3 h-full mx-auto"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox={icon.viewBox}
                            >
                                <path
                                    fill="currentColor"
                                    d={icon.d}
                                ></path>
                            </svg>
                        </a>
                    )
                })
         

    }
        </>
    )
}

export default Icon