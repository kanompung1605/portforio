import React , {Component} from 'react';
import Header from "../../components/Header";
import Homepage from "../../components/Homepage";
import Carousel from "../../components/carousel";
import Pic from  '../../Image/pic3.jpg'
import style from '../../Style/Style.css'
class Newhomepage extends Component {
    render(){
        return (
            <div className="App">


                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://www.facebook.com/aommy.prettybear">Facebook</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://www.youtube.com/channel/UCV5zoeRPoYYE0kh_6tdoUgQ?view_as=subscriber">YoutubeChannel</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Twitch</a>
                    </li>
                </ul>
                <Homepage/>
                <Carousel/>
                <style/>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">Welcome To My World!!</h1>
                        <p className="lead">This is the privates of me.</p>
                    </div>
                </div>
                <div align="center">
                    <img src={Pic} className="rounded float-left" width="15%" height="30%" alt="Frist-slide"/>
                </div>
                <ul className="list-group">
                    <li className="list-group-item">Firstname-Lastname: Kasidech Songsriworakul</li>
                    <li className="list-group-item">Age: 21</li>
                    <li className="list-group-item">DD/MM/YY: 16 May 1997</li>
                    <li className="list-group-item">Studying at: King Mongkut's Institute of Technology Ladkrabang</li>
                    <li className="list-group-item">Address: 109/62 Pruksa28 Praksamai Muang Samutprakarn 10280</li>
                    <li className="list-group-item">Hobbits: Play game,Basketball</li>
                    <li className="list-group-item">Telephone Number: 0909426229</li>
                    <li className="list-group-item">Facebook: A'Aom Johnnyclash</li>
                    <li className="list-group-item">ID Line: kaommy1605</li>
                </ul>
                <Header/>
            </div>
        )
    }
};

export default Newhomepage;