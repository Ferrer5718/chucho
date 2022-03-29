import React from 'react';
 
class Menu extends React.Component {
 
  render() {
 
  	return (
 
  		<nav className="navbar navbar-expand-md navbar-dark bg-dark">
 
		    <a className="navbar-brand" href="#">Jesús Javier Estudillo Ferrer Fotógrafo</a>
		    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
		     	<span className="navbar-toggler-icon"></span>
		    </button>
		    <div className="collapse navbar-collapse" id="navbarCollapse">
			    <ul className="navbar-nav mr-auto">
			        <li className="nav-item active">
			          	<a className="nav-link" href="#">HOME</a>
			        </li>
                    <li className="nav-item">
			          	<a className="nav-link" href="#">ACERCA DE MI</a>
			        </li>
			        <li className="nav-item">
			          	<a className="nav-link" href="#">CUBRIRSE EL ROSTRO</a>
			        </li>
			        <li className="nav-item">
			          	<a className="nav-link" href="#">DANZA, RITUAL Y RAÍZ</a>
			        </li>
			        <li className="nav-item">
			          	<a className="nav-link" href="#">EL ARTE DE LA PROTESTA</a>
			        </li>
                    <li className="nav-item">
			          	<a className="nav-link" href="#">FOTOGRAFÍA HOY CON TECNICAS DE 1850</a>
			        </li>
                    <li className="nav-item">
			          	<a className="nav-link" href="#">MUSICA Y CALLE</a>
			        </li>
                    <li className="nav-item">
			          	<a className="nav-link" href="#">TRADICION VS MODERNIDAD EN ARQUITECTURA</a>
			        </li>
			    </ul>
		    </div>
 
		</nav>
 
  	)
    
  }
 
}
 
export default Menu;