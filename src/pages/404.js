import React from "react"

import {NotFound} from '../components/Common/NotFound'
import {AppLayout} from '../components/Common/AppLayout'

const NotFoundPage = () => {
  return (
    <AppLayout>
        <NotFound />
    </AppLayout>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
