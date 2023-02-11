import { useState } from 'react'
import menu from './assets/menu.svg'
import './App.css'

function App() {

    const [toggle, setToggle] = useState('hide');

    const showMenu = () => {
        document.getElementById('menu').classList.toggle('show')
    }

    return (
        <div className="App">
            <nav className='navigationBar'>
                <svg onClick={ showMenu } width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 12H21" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M3 6H21" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M3 18H21" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <div id="menu" className='menu'>
                    <h4> [ </h4>
                    <h4> <a href=""> home </a>, </h4>
                    <h4> <a href=""> Aboutme </a>, </h4>
                    <h4> <a href=""> Services </a>, </h4>
                    <h4> <a href=""> Skills </a>, </h4>
                    <h4> <a href=""> Portfolio </a>, </h4>
                    <h4> <a href=""> Contact</a> </h4>
                    <h4> ]</h4>
                </div>
            </nav>
        </div>
    )
}

export default App
