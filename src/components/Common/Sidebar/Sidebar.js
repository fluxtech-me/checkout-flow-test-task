import React from 'react';
import {Button} from '../../Material/Button';
import _findIndex from 'lodash/findIndex';
import './Sidebar.scss';
import { SidebarOrder } from '../../Features/Checkout/SidebarOrder';

const Sidebar = () => {
    const isActive = true;

    return (
        <>
            <div className="navbar navbar-fixed">
                <div className="navbar__heading sticky-top">
                    <Button
                        type="icon"
                        className="close-btn burger"
                    >
                        <div className="burger__inner">
                            <span className={`burger__top ${isActive ? 'active' : ''}`} />
                            <span className={`burger__middle ${isActive ? 'active' : ''}`} />
                            <span className={`burger__bottom ${isActive ? 'active' : ''}`} />
                        </div>
                    </Button>
                    <h2 className="heading-2 text-center">Your Cart</h2>
                </div>
                <SidebarOrder/>
            </div>
            <div className="navbar-overlay"/>
        </>
    );
};

export {Sidebar};
