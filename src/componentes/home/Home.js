 
import React, { useState, useCallback } from 'react';

import ImageViewer from "react-simple-image-viewer";
import Menu from '../menu/Menu'; // Componente Menú (Lo he creado en la Parte 1 de este Tutorial) 
import Footer from '../footer/Footer'; // Componente Footer (Lo he creado en la Parte 1 de este Tutorial) 
 
import imagen0 from '../images/2020 CUBRIRSE EL ROSTRO 6/CUBREBOCAS Y ROSTROS 0.jpeg';
import imagen1 from '../images/DANZA, RITUAL Y RAÍZ 1/DANZA RITUAL Y RAIZ 0.jpg';
import imagen2 from '../images/EL ARTE DE LA PROTESTA 2/EL ARTE DE LA PROTESTA 0.jpg';
import imagen3 from '../images/FOTOGRAFÍA HOY CON TÉCNICAS DE 1850 3/FOTOGRAFIA HOY 1.jpg';
import imagen4 from '../images/MUSICA Y CALLE 5/MUSICA Y CALLE 0.jpg';
import imagen5 from '../images/TRADICIÓN VS MODERNIDAD EN ARQUITECTURA 4/TRADICION VS 0.jpg';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          count: 0,
          isOpen: false
        };
      }

    render() {
        const currentImage = this.state.count;
        const isViewerOpen = this.state.isOpen;
        const images = [
            imagen0,
            imagen1,
            imagen2,
            imagen3,
            imagen4,
            imagen5
        ];
		return(
			<>
            <style>{'body { background-color: rgb(33 37 41) }'}</style>
			<Menu /> 
			<main role="main" className="flex-shrink-0 mt-5 bg-dark text-white text-center">      
                <div>
                    {images.map((src, index) => (
                    <><img
                            src={src}
                            onClick={() => {
                                this.setState({ count: index });
                                this.setState({ isOpen: true });
                            } }
                            width="400"
                            height="260"
                            key={index}
                            style={{ margin: "5px" }}
                            alt="" /></>
                    ))}
                    {isViewerOpen && (
                        <ImageViewer
                            src={images}
                            currentIndex={currentImage}
                            onClose={() => {
                                this.setState({ count: 0 });
                                this.setState({ isOpen: false });
                            }}
                            backgroundStyle={{
                            backgroundColor: "rgba(0,0,0,0.9)"
                            }}
                        />
                        )}
                </div>
	  		</main>
	  		<Footer />
	  		</>
		)
	}
}
 
export default Home;