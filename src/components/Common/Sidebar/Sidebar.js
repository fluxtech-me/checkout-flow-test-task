import React from 'react';
import {Button} from '../../Material/Button';
import { SidebarOrder } from '../../Features/Checkout/SidebarOrder';
import _identity from "lodash/identity";
import cx from 'classnames';
import './Sidebar.scss';

const Sidebar = (props) => {
    const {
        showSidebar,
        setOpenSidebar = _identity,
    } = props;

    return (
        <>
            <div className={cx(
                'navbar navbar-fixed',
                {
                    'navbar--active' : showSidebar
                })
            }
            >
                <div className="navbar__heading sticky-top">
                    <Button
                        onClick={() => setOpenSidebar(false)}
                        type="icon"
                        className="close-btn burger"
                    >
                        <div className="burger__inner">
                            <span className={cx("burger__top", {active: showSidebar})} />
                            <span className={cx("burger__middle", {active: showSidebar})} />
                            <span className={cx("burger__bottom", {active: showSidebar})} />
                        </div>
                    </Button>
                    <h2 className="heading-3 text-center">Your Cart</h2>
                </div>
                <SidebarOrder/>
            </div>
            {showSidebar && <div onClick={() => setOpenSidebar(false)} className="navbar-overlay"/>}
        </>
    );
};

export {Sidebar};
