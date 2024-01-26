import React from 'react'
import { Link , Outlet } from "react-router-dom"
import "./css/Summa.css"

export default function Layout() {
  return (
    <div>
        <nav>
            <ul   className='hi'>
                <li>
                    <Link  className="nav-link"to="/home">Home</Link>
                </li>
                <li>
                    <Link className="nav-link" to="/about">About</Link>
                </li>
                <li>
                    <Link  className="nav-link"to="/contact">Contact</Link>
                </li>
                <li>
                    <Link className='nav-link'to="/event">Event</Link>
                </li>
                <li>
                    <Link className='nav-link' to="/counting">NewCounting</Link>
                </li>
                <li>
                    <Link className='nav-link' to="reducer">Reducer</Link>
                </li>

            </ul>
        </nav><hr></hr>
        <h1>
            WELCOME TO GREAT KIRIKALAN MAGIC SHOW
        </h1>
        <Outlet/>
    </div>
  )
}
