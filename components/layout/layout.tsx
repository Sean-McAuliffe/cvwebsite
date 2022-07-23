
import type { NextPage } from 'next';
import Navbar from './navbar'


export default function Layout ({children}){

    return (
        <>
        <div className="w-full h-full flex-col">
        {/* <div>{Navbar()}</div> */}
            
        <div className="bg-white dark:bg-gray-800">{children}</div>
        </div>
   
        </>
    )

}


