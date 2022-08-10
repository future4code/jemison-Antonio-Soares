import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './Paginas/HomePage';
import { ListaDeViagensUsuario } from './Paginas/ListTripsPage';
import { FormularioDeViagens } from './Paginas/ApplicationFormPage';
import { LoginAdm } from './Paginas/LoginPage';
import { ListaDeViagensAdm } from './Paginas/AdminHomePage';
import { ListaDeDetalhes } from './Paginas/TripDetailsPage';
import {FormularioParaAdm} from './Paginas/CreateTripPage'





export function Routers () {
    return (
      <BrowserRouter>
          <Routes>
              <Route index element={ <Login /> } />
              <Route path='trips/list' element={<ListaDeViagensUsuario/>} />
              <Route path='trips/application' element={<FormularioDeViagens/>}/>
              <Route path='login' element={<LoginAdm/>} />
              <Route path='admin/trips/list' element={<ListaDeViagensAdm/>} />
              <Route path='admin/trips/creat' element={<FormularioParaAdm/>} />
              <Route path='admin/trips/:id' element={<ListaDeDetalhes/>} />
             
          </Routes>
      </BrowserRouter>
    );
  }