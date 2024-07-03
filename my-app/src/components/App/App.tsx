import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Body from '../Body/Body';
import Slider from '../Slider/Slider';
import Accordion from '../Accordion/Accordion';
import Info from '../Info/Info';
import Futer from '../Futer/Futer';
import Silka from '../Silka/Silka';

export const App: React.FC = () => {
    return(
        <div>
            <Header/>
            <Body/>
            <Slider/>
            <Accordion/>
            <Info/>
            <Futer/>
            <Silka/>
        </div>
    );
}

export default App;