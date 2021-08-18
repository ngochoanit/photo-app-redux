/* eslint-disable react/react-in-jsx-scope */
import NotFound from 'Components/NotFound/NotFound'
import React, { Suspense } from 'react'
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom'

import './App.css'

//lazy load - code splitting
const Photo = React.lazy(() => import('./Features/Photo'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          {/* TODO: Remove after testing */}
          {/* <ul>
            <li><Link to='/photos'>Go to photo page</Link></li>
            <li><Link to='/photos/add'>Go to add new photo page</Link></li>
            <li><Link to='/photos/edit'>Go to edit photo page</Link></li>
          </ul> */}

          <Switch>
            <Redirect exact from='/' to='/photos'></Redirect>
            <Route path='/photos' component={Photo} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  )
}

export default App
