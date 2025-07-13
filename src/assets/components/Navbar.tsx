import React, { useEffect, useState } from 'react'
import Mainbar from './Mainbar'
import Sidebar from './Sidebar';
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
    const [sidebarEnabled, setSidebarEnabled] = useState<boolean>(false);
    function enableSidebar():void{
        setSidebarEnabled(true);
    };
    function disableSidebar():void{
        setSidebarEnabled(false);
    };
    useEffect(()=>{
        function disableSidebarOnResize():void{
            if(window.innerWidth > 640 && sidebarEnabled){
                disableSidebar();
            }
        };
        disableSidebarOnResize();
        window.addEventListener('resize',disableSidebarOnResize);
        
        return ()=>{
            window.removeEventListener('resize',disableSidebarOnResize);
        };

    },[sidebarEnabled]);
    return (
        <div className='w-screen fixed bg-black top-0 left-0 min-h-14 flex items-center justify-center z-10'>
            <Mainbar />
            <Sidebar enabled = {sidebarEnabled }onClose={disableSidebar}/>
            <FiMenu className='block sm:hidden absolute top-0.5 right-0 text-cyan-500 text-5xl hover:cursor-pointer transition-all hover:text-cyan-600' onClick={enableSidebar}/>
        </div>
    )
}

export default Navbar