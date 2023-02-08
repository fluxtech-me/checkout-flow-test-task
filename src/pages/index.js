import React, {useState} from "react";
import Sidebar from '../components/Common/Sidebar';
import {Header} from '../components/Common/Header';

import {AppLayout} from '../components/Common/AppLayout'

const HomePage = () => {

    const [showSidebar, setShowSidebar] = useState(false);

    const setOpenSidebar = (isShown) => {
        setShowSidebar(isShown);
    };

    return (
        <AppLayout>
            <main>
                <Header setOpenSidebar={setOpenSidebar} />
                <Sidebar
                    showSidebar={showSidebar}
                    setOpenSidebar={setOpenSidebar}
                />   
            </main>
        </AppLayout>
      )
}

export const Head = () => <title>Home</title>

export default HomePage
