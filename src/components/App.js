import React from 'react';
import { AuthProvider } from './React Router/auth';
import { Route , Routes} from 'react-router-dom'; // Routes , Route
import { Home } from './React Router/Home';
import { NavigationBar } from './React Router/NavigationBar';
import { NextPage } from './React Router/NextPage';
import './App.css'
import { NotMatch } from './React Router/NotMatch';
import { Products } from './React Router/Products';
import { FeaturedProducts } from './React Router/FeaturedProducts';
import { NewProducts } from './React Router/NewProducts';
import { Users } from './React Router/Users';
import { UserDetails } from './React Router/UserDetails';
import { Admin } from './React Router/Admin';
import { Profile } from './React Router/Profile';
import Login from './React Router/Login';
const LazyAbout = React.lazy(()=> import('./React Router/About'))

function App() {
  return (
    <AuthProvider>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='about' element={
         <React.Suspense fallback='Loading...'>
         <LazyAbout />
         </React.Suspense>
        }/>
        <Route path='nextPage' element={<NextPage />}/>
        <Route path='products' element={<Products />}>
          <Route index element={<FeaturedProducts />}/>
          <Route path='features' element={<FeaturedProducts />}/>
          <Route path='new' element={<NewProducts />}/>
        </Route>
        <Route path='users' element={<Users />} >
          <Route path=':userId' element={<UserDetails />}/>
          <Route path='admin' element={<Admin />}/>
        </Route>
        <Route path='profile' element={<Profile />}/>
        <Route path='login' element={<Login />}/>
        <Route path='*' element={<NotMatch />}/>
      </Routes>
    </AuthProvider>
  )
}

export default App

