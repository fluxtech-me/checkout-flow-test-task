import React from 'react';

// global styles
import '../../../assets/styles/index.scss';

const AppLayout = (props) => {
    const {children} = props
    return <main>{children}</main>
}

export {AppLayout}