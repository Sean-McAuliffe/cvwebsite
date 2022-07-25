
import type { NextPage } from 'next';



export default function Layout ({children}:any){

    return (
        <>
        <div className="w-full h-full flex-col">
        {/* <div>{Navbar()}</div> */}
            
        <div className="bg-white dark:bg-gray-800">{children}</div>
        </div>
   
        </>
    )

}


