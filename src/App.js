import React from 'react';
import ShowProduct from './component/ShowProduct';
import AddProduct from './component/AddProduct';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditProduct from './component/EditProduct';

function App() {
  return (
    <BrowserRouter>
      <div className='container mt-5 mx-5'>
        <Routes>
          <Route path='/' element={<ShowProduct />}/>
          <Route path='add' element={<AddProduct />}/>
          <Route path='edit/:id' element={<EditProduct />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
