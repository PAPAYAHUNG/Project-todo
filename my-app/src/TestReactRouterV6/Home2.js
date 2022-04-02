import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Expense from './Expense'
import Invoice from './Invoice'

export default function Home2() {
    return (
        <div>
            <div>
                <div>
                    <nav className="navbar navbar-expand-sm navbar-dark" style={{ backgroundColor: '#e3f2fd' }}>
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <Link to='invoice' className="nav-item active mx-5">
                                    INVOICE
                                </Link>
                                <Link to='expense' className="nav-item">
                                    EXPENSE
                                </Link>
                                <Link to='xx' className="nav-item mx-4">
                                    TESTTTT 1
                                </Link>


                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>
                    </nav>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
