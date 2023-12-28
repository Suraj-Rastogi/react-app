import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                        <div className="header-name"><a href="" className='navbar-brand' >Employee Management App</a></div>
                        <Link to="/"><a href="" className='navbar-brand' > Home</a></Link>
                        <Link to="/employees/add"><a href="" className='navbar-brand' > Add Employee</a></Link>
                        
                    </nav>
                </header>  
            </div>
        );
    }
}

export default HeaderComponent;