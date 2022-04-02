import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Invoice() {
    let userInvoice = [
        { name: 'abc', id: 1 },
        { name: 'iphone', id: 2 },
        { name: 'kimochi', id: 3 },
    ]
    // const renderUser = () => {
    //     return userInvoice.map((item, index) => {
    //         return <Link key={index}
    //             style={{ display: 'block', margin: '10px' }}
    //             to={`/invoice/${item.id}`}>
    //             {item.name}
    //         </Link>
    //     })
    // }
    return (
        <div>
            <h3 className='text-center'>Invoice</h3>
            <Link to='log' className='text-danger'>Dang ky di babeee</Link>
            <div className='d-flex'>
                <nav>
                    {userInvoice.map((item, index) => {
                        return <Link key={index}
                            style={{ display: 'block', margin: '10px' }}
                            to={item.id.toString()}>
                            {item.name}
                        </Link>
                    })}
                    <Link to='xx' className="nav-item mx-4">
                        TESTTTT 1
                    </Link>
                </nav>
            <Outlet />
            </div>
        </div>
    )
}//this is  absolute link, should not

//   to={`/new/invoice/${item.id}`}>
//> use the relative
