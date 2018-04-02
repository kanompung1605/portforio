import React, {Component} from 'react'
import image from '../Image/pic8.jpg'
import image1 from '../Image/pic9.jpg'
import image2 from '../Image/pic10.jpg'


class carousel extends Component{
    render(){
        return(
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={image} width="50%" height="50%" alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={image1} width="50%" height="50%" alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={image2} width="50%" height="50%" alt="Third slide"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

        )
    }
}

export default carousel

