import { useState } from 'react';
import Header from './assets/components/Header';
import AppMain from './assets/components/AppMain';
import Footer from './assets/components/Footer/Footer';
import comics from './data/comics'




function App() {
  

  return (
    <>
      <Header/>
      <AppMain comics={comics}/>
      <Footer/>
    </>
    

  )
}

export default App
