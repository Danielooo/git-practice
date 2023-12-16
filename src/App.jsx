import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';


function App() {
    const [ count, setCount ] = useState( 0 );
    
    return (
        <>
            <h1>Git changes</h1>
            <p>change 1</p>
            <i>subchange of 1</i>
            <i>little change of 1 to be able to push</i>
        
        </>
    );
}

export default App;
