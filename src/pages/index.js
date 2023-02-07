import React from "react"

// component
import {Home} from '../components/Features/Home'
import {AppLayout} from '../components/Common/AppLayout'

const HomePage = () => {
    return (
        <AppLayout>
            <Home />
        </AppLayout>
      )
}

export const Head = () => <title>Home</title>

export default HomePage