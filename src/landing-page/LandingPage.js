import LandingPageBackground from './images/background/LandingPageBackground.jpg';
import ArduinoImageTB from './images/icons/transparent-background/ArduinoImageTB.png';
import JavaImageTB from './images/icons/transparent-background/JavaImageTB.png';
import PythonImageTB from './images/icons/transparent-background/PythonImageTB.png';
import ReactImageTB from './images/icons/transparent-background/ReactImageTB.png';
import RustImageTB from './images/icons/transparent-background/RustImageTB.png';
import './LandingPage.css';

function Title() {
    return (
        <h1 className='title'>Adrian Tarantino</h1>
    );
}

function Description() {
    const descriptionText = "Hello, I'm Adrian. I've been coding since since roughly 2017. Over the years, I've coded in a variety of different languages and frameworks. Below are some of the technologies I am most familiar with:";
    return (
        <p className='description'>{descriptionText}</p>
    );
}

function Icon({ imagePath, iconName }) {
    return (
        <td>
            <div className={'icon'}>
                <img className='icon-image' src={imagePath} alt={iconName} width='100'/>
            </div>
        </td>
    );
}

function IconRow() {
    let icons = [<Icon imagePath={ArduinoImageTB} iconName='Arduino'/>,
                 <Icon imagePath={JavaImageTB} iconName='Java'/>,
                 <Icon imagePath={PythonImageTB} iconName='Python'/>,
                 <Icon imagePath={ReactImageTB} iconName='React'/>,
                 <Icon imagePath={RustImageTB} iconName='Rust'/>];

    return (
        <table className='icon-row'>
            <tbody>
                {icons}
            </tbody>
        </table>
    );
}

function LandingPageBase() {
    const iconImagePaths = [ArduinoImageTB,
                            JavaImageTB,
                            PythonImageTB,
                            ReactImageTB,
                            RustImageTB];

    return (
        <div className='landing-page-base'>
            <img className='background-image' src={LandingPageBackground}/>
            <div className='content'>
                <Title/>
                <Description/>
                <IconRow/>
            </div>
        </div>
    );
}

export default LandingPageBase;