import LandingPageBackground from './images/LandingPageBackground.jpg'
import './LandingPage.css'

function Title() {
    return (
        <h1 className='title'>Adrian Tarantino</h1>
    )
}

function Description() {
    const descriptionText = "Hello, I'm Adrian. I've been coding for roughly six years in a variety of different languages and frameworks. Below are some of the technologies I am most familiar with:";
    return (
        <p className='description'>{descriptionText}</p>
    )
}

function Icon({ size }) {}
function IconRow() {}

function LandingPageBase() {
    return (
        <div className='landing-page-base'>
            <img className='background-image' src={LandingPageBackground}/>
            <div className='content'>
                <Title/>
                <Description/>
                <IconRow/>
            </div>
        </div>
    )
}

export default LandingPageBase;