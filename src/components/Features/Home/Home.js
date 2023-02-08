import React, {useState} from "react";
import Sidebar from '../../Common/Sidebar';
import {Header} from '../../Common/Header';

const Home = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    const setOpenSidebar = (isShown) => {
        setShowSidebar(isShown);
    };

    return (
        <main>
           <Header setOpenSidebar={setOpenSidebar} />
           <Sidebar
               showSidebar={showSidebar}
               setOpenSidebar={setOpenSidebar}
           />
        </main>
    );
};

export {Home}
