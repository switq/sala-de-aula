import { useState, useEffect } from 'react'
import GlobalStyle from './styles/global'
import RoutesApp from './routes';
import socketService from './services/socketService';
import { useDispatch } from 'react-redux';
import AssetsProvider from './providers/AssetsProvider';

function App() {

  return (
    <>
      <AssetsProvider>
        <RoutesApp />
      </AssetsProvider>
      <GlobalStyle />
    </>
  )
}

export default App
