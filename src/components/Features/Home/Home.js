import React from "react";
import Sidebar from '../../Common/Sidebar';
import Header from '../../Common/Header';
import { Cheap } from '../../Material/Cheap';
import { Modal } from '../../Material/Modal/Modal';

const Home = () => {

    return (
        <main>
           <Header />
           <Sidebar />
            {/* <Modal isOpen={true} /> */}
        </main>
    )
}

export {Home}
