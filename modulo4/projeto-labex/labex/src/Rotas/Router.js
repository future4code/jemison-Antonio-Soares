import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PaginaInicial } from '../Paginas/HomePage';
import { ListaDeViagensUsuario } from '../Paginas/ListTripsPage';
import { UsuarioSeIncreverParaViagem} from '../Paginas/ApplicationFormPage';
import { LoginAdm } from '../Paginas/LoginPage';
import { PaginaInicialAdm } from '../Paginas/HomePageADM';
import { AprovacaoDeViagensAdm } from '../Paginas/TripDetailsPage';
import {CriarViagemParaUsuarioAdm} from '../Paginas/NewTripPage'





export function Routers () {
    return (
      <BrowserRouter>
          <Routes>
              <Route index element={ <PaginaInicial /> } />
              <Route path='trips/list' element={<ListaDeViagensUsuario/>} />
              <Route path='trips/application' element={<UsuarioSeIncreverParaViagem/>}/>
              <Route path='login' element={<LoginAdm/>} />
              <Route path='admin/trips/list' element={<PaginaInicialAdm/>} />
              <Route path='admin/trips/creat' element={<CriarViagemParaUsuarioAdm/>} />
              <Route path='admin/trips/:id' element={<AprovacaoDeViagensAdm/>} />
             
          </Routes>
      </BrowserRouter>
    );
  }