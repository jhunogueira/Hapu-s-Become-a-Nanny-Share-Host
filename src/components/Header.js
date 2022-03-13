import badgeLogo from '../assets/HeaderAssets/badgeLogo.svg';
import ImageHeader from '../assets/HeaderAssets/ImageHeader.svg';
import SarahsImage from '../assets/HeaderAssets/SarahsImage.svg';
import { MdPlayArrow } from 'react-icons/md';

export function Header(){
    return (
        <div>
            <div className='main'>
                <div className='menu'>
                    <div className='item-menu'>
                        <div className="img-container">
                            <img src={badgeLogo} alt='The company logo'/>
                        </div>
                        <nav className='nav-bar'>
                            <a href="#">Create Your Nanny Share</a>
                            <a href="#">Browse Shares</a>
                            <a href="#">Our Story</a>
                        </nav>
                        <div className='sign-in-menu'>
                        <button>Become a Nanny Share Host</button>
                        <a href="#">Sign In</a>
                        </div>
                    </div>
                </div>
                <div className='content'>
                    <h2>Easily create or join a local nanny share with Hapu</h2>
                    <p>Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible, affordable solutions in childcare.</p>
                    <div className='content-button'>
                        <button>
                            <span className="material-icons">
                                <MdPlayArrow color='white' size={30}/>
                            </span>
                        </button>
                            <a href='#'>See hapu in action (27 seconds)</a>
                    
                    </div>
                </div>
                <div className='image-header-container'>
                    <img src={ImageHeader} alt="An example on how you'll find your nanny"/>
                </div>
            </div>
            <div className='header-footer'>
                <img src={SarahsImage} alt="That's Sarah an available nanny" />
                <a href='#'>Sarah’s day care available now in North Sydney</a>
                <h4>Wednesday, Thursday, Friday - 7:30 - 5:30</h4>
            </div>
        </div>
    );
}