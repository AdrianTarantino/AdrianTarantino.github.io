import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import Title from './components/title/index';
import Description from './components/description/index';
import IconBoxRow from './components/icon-box-row/index';
import IconBox from './components/icon-box/index';
import PopupBox from './components/popup-box';

import ArduinoImageTB from '../images/icons/transparent-background/ArduinoImageTB.png';
import JavaImageTB from '../images/icons/transparent-background/JavaImageTB.png';
import PythonImageTB from '../images/icons/transparent-background/PythonImageTB.png';
import ReactImageTB from '../images/icons/transparent-background/ReactImageTB.png';
import RustImageTB from '../images/icons/transparent-background/RustImageTB.png';

import './App.css';


const popupMessages = [
    "Arduino C was the first programming language I learned (and my favourite btw).",
    "I love how this language allows me to write instant legacy code.",
    "Out of all languages on this list, I am most comfortable in Python.",
    "React is a tool that I've recently picked up. I chose to learn React JS because I wasn't able to find a better UI library in the other languages I knew.",
    "Rust is probably my least comfortable language, and I rarely code projects in Rust. I still think it's a great language with overly complicated Strings."
];

const mainDescriptionText = "Hello, I'm Adrian. I've been coding since roughly 2017. Over the years, I've coded in a variety of different languages and frameworks. Below are some of the technologies I am most familiar with:";

const typingTestTitle = <Description text='Typing Test Website' />;
const calculatorWebsiteTitle = <Description text='Calculator Website' />;

const typingTestWebsiteURL = 'http://AdrianTheHacker.github.io/typing-test-website';
const calculatorWebsiteURL = 'http://AdrianTheHacker.github.io/react-calculator';

function handleIconBoxClick(index, setPopupOpenFunction, setPopupTextFunction) {
    setPopupOpenFunction(true);
    setPopupTextFunction(popupMessages[index]);
}

function App() {
    const [popupOpen, setPopupOpen] = useState(false);
    const [popupText, setPopupText] = useState('');

    const iconBoxes = [
        <IconBox onClick={() => { handleIconBoxClick(0, setPopupOpen, setPopupText); }} children={<img src={ArduinoImageTB} alt='Arduino' width='100' />} additive='size1 in-row-icon' />,
        <IconBox onClick={() => { handleIconBoxClick(1, setPopupOpen, setPopupText); }} children={<img src={JavaImageTB} alt='Java' width='100' />} additive='size1 in-row-icon' />,
        <IconBox onClick={() => { handleIconBoxClick(2, setPopupOpen, setPopupText); }} children={<img src={PythonImageTB} alt='Python' width='100' />} additive='size1 in-row-icon' />,
        <IconBox onClick={() => { handleIconBoxClick(3, setPopupOpen, setPopupText); }} children={<img src={ReactImageTB} alt='React' width='100' />} additive='size1 in-row-icon' />,
        <IconBox onClick={() => { handleIconBoxClick(4, setPopupOpen, setPopupText); }} children={<img src={RustImageTB} alt='Rust' width='100' />} additive='size1 in-row-icon' />
    ];

    return (
        <div className='content-flexbox'>
            <div className='about-me-content'>
                <Title />
                <Description text={mainDescriptionText} />
                <IconBoxRow iconBoxes={iconBoxes} />

                <AnimatePresence
                    initial={false}
                    mode={'wait'}>
                    {popupOpen && <PopupBox children={<Description text={popupText} />} handleClose={() => { setPopupOpen(false); }} />}
                </AnimatePresence>
            </div>
            <div className='external-content-grid'>
                <div onClick={() => { window.open(typingTestWebsiteURL); }} className='external-content-box top left'><IconBox children={typingTestTitle} additive='size4 white' /></div>
                <div className='external-content-box top right'><IconBox additive='size2 blue' /></div>
                <div className='external-content-box bottom left'><IconBox additive='size3 black' /></div>
                <div onClick={() => { window.open(calculatorWebsiteURL); }} className='external-content-box bottom right'><IconBox children={calculatorWebsiteTitle} additive='size4 grey' /></div>
            </div>
        </div>
    );
}


export default App;