import React from 'react';



class NavComponent extends React.Component{
    render(){
        return (
            
                <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navComponent">

                    <a className="navbar-brand" href="#">Kamil Aqil</a>

                    <button className="navbar-toggler" type="button" 
                    data-toggle="collapse" data-target="#navbarNav" 
                    aria-controls="navbarNav" aria-expanded="false" 
                    aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav" id="navLinks">

                            <li className="nav-item">
                                <a className="nav-link" href="#aboutComponent">Home 
                                    <span className="sr-only">(current)</span>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#skillsComponent">Skills
                                    <span className="sr-only">(current)</span>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#portfolioComponent">Portfolio
                                    <span className="sr-only">(current)</span>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Resume</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#contactComponent">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
        )
    }
}

export default NavComponent; 