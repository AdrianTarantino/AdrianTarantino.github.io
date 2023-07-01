import LandingPageBackground from './images/background/LandingPageBackground.jpg';
import ArduinoImageTB from './images/icons/transparent-background/ArduinoImageTB.png';
import JavaImageTB from './images/icons/transparent-background/JavaImageTB.png';
import PythonImageTB from './images/icons/transparent-background/PythonImageTB.png';
import ReactImageTB from './images/icons/transparent-background/ReactImageTB.png';
import RustImageTB from './images/icons/transparent-background/RustImageTB.png';
import './LandingPage.css';

import { useState } from 'react';
import { motion } from 'framer-motion';

function Title() {
    return (
        <h1 className='title'>Adrian Tarantino</h1>
    );
}

function SelfDescription() {
    const descriptionText = "Hello, I'm Adrian. I've been coding since since roughly 2017. Over the years, I've coded in a variety of different languages and frameworks. Below are some of the technologies I am most familiar with:";
    return (
        <p className='description dark'>{descriptionText}</p>
    );
}

function Icon({ onClick, imagePath, iconName }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <td>
            <motion.div className='icon'
                onClick={onClick}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}>
                <img className='icon-image' src={imagePath} alt={iconName} width='100' />
            </motion.div>
        </td>
    );
}

function IconRow({ onIconClicks }) {
    const icons = [<Icon onClick={onIconClicks[0]} imagePath={ArduinoImageTB} iconName='Arduino' />,
    <Icon onClick={onIconClicks[1]} imagePath={JavaImageTB} iconName='Java' />,
    <Icon onClick={onIconClicks[2]} imagePath={PythonImageTB} iconName='Python' />,
    <Icon onClick={onIconClicks[3]} imagePath={ReactImageTB} iconName='React' />,
    <Icon onClick={onIconClicks[4]} imagePath={RustImageTB} iconName='Rust' />];

    return (
        <table className='icon-row'><tbody>
            <tr>
                {icons}
            </tr>
        </tbody></table>
    );
}

function PopupBox({ text, handleClose }) {
    return (
        <motion.div
            className='popup-box'
            initial={{ rotate: -15, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
            }}>
            <p className='description light'>{text}</p>
            <button onClick={handleClose}>Close</button>
        </motion.div>
    );
}

const popupMessages = [
    "Arduino C was the first programming language I learned (and my favourite btw).",
    "I love how this language allows me to write instant legacy code.",
    "Out of all languages on this list, I am most confortable in Python.",
    "React is a tool that I've recently picked up. I chose to learn React JS because I wasn't able to find a better UI library in the other languages I knew.",
    "Rust is probably my least comfortable language, and I rarely code projects in Rust. I still think it's a great language however Strings are a bit to complicated."
];

function LandingPageBase() {
    const [popupOpen, setPopupOpen] = useState(false);
    const [popupText, setPopupText] = useState('');

    const onIconClick = (index) => {
        setPopupOpen(true);

        setPopupText(popupMessages[index]);
    };

    const onIconsClicks = [
        () => onIconClick(0),
        () => onIconClick(1),
        () => onIconClick(2),
        () => onIconClick(3),
        () => onIconClick(4),
    ];

    return (
        <div className='landing-page-base'>
            <img className='background-image' src={LandingPageBackground} />
            <div className='content'>
                <Title />
                <SelfDescription />
                <IconRow onIconClicks={onIconsClicks}/>
                {popupOpen && <PopupBox text={popupText} handleClose={() => setPopupOpen(false)}/>}
            </div>
        </div>
    );
}

export default LandingPageBase;
