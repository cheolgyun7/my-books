import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Add from './pages/Add';
import Detail from './pages/Detail';
import Edit from './pages/Edit';
import Signin from './pages/Signin';
import NotFound from './pages/NotFound';
import { ErrorBoundary } from 'react-error-boundary';
import Error from './pages/Error';

function App() {
  return (
    <ErrorBoundary fallback={<Error />}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/add' element={<Add />}></Route>
          <Route path='/book/:id' element={<Detail />}></Route>
          <Route path='/edit/:id' element={<Edit />}></Route>
          <Route path='/signin' element={<Signin />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App;
