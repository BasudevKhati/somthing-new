import React from 'react';
import './App.css';
import styled from 'styled-components';
import { SideIcons } from './Component/SideIcons';
import { TopBar } from './Component/TopBar';
import { MenuBar } from './Component/MenuBar';
import { SettingBar } from './Component/SettingBar';



function App() {

  const SECTION = styled.section`
    width: 100vw;
    height: 100vh;
    padding: 8px;
    background-color:  #5964FF;
  `
  const DIV = styled.div`
    display: flex;
  `
  const MenuWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 98vh;
  `

  return ( 
    <SECTION>
      <DIV>
        <SideIcons />
        <MenuWrapper>
          <TopBar />
          <MenuBar />
        </MenuWrapper>
        <SettingBar />
      </DIV>
    </SECTION>
  )
};

export default App
