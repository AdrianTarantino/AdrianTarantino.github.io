import Title from './landing-page/components/title/index';
import Description from './landing-page/components/description/index';
import IconBoxRow from './landing-page/components/icon-box-row/index';
import IconBox from './landing-page/components/icon-box/index';

import ArduinoImageTB from './images/icons/transparent-background/ArduinoImageTB.png';
import JavaImageTB from './images/icons/transparent-background/JavaImageTB.png';
import PythonImageTB from './images/icons/transparent-background/PythonImageTB.png';
import ReactImageTB from './images/icons/transparent-background/ReactImageTB.png';
import RustImageTB from './images/icons/transparent-background/RustImageTB.png';

import './App.css';


function App() {
    const mainDescriptionText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

    const iconBoxes = [
        <IconBox children={<img src={ArduinoImageTB} alt='Arduino' width='100' />} additive='small in-row-icon' />,
        <IconBox children={<img src={JavaImageTB} alt='Java' width='100' />} additive='small in-row-icon' />,
        <IconBox children={<img src={PythonImageTB} alt='Python' width='100' />} additive='small in-row-icon' />,
        <IconBox children={<img src={ReactImageTB} alt='React' width='100' />} additive='small in-row-icon' />,
        <IconBox children={<img src={RustImageTB} alt='Rust' width='100' />} additive='small in-row-icon' />
    ];

    return (
        <div className='content-flexbox'>
            <div className='about-me-content'>
                <Title />
                <Description text={mainDescriptionText} />
                <IconBoxRow iconBoxes={iconBoxes} />
            </div>
        </div>
    );
}


export default App;