import React from 'react'
import { Meteor } from 'meteor/meteor'
import { createRoot } from 'react-dom/client'
import { router } from '/imports/pages/routes'
import { RouterProvider } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

Meteor.startup(() => {
  const root = document.getElementById('root') as HTMLDivElement
  createRoot(root).render(<RouterProvider router={router} />)
})
