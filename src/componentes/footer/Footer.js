import React from 'react';
  
class Footer extends React.Component {

  render() { 
    return (
 
        <footer className="bg-dark text-white text-center">
            <p>&copy; {(new Date().getFullYear())} Jesús Javier Estudillo Ferrer Fotógrafo.</p>
        </footer>
    )
  }
}
 
export default Footer;