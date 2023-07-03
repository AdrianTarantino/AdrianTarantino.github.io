import { motion, AnimatePresence } from 'framer-motion';

import './main.css';


function IconBox({ onClick, children, additive }) {
    const iconBoxClassName = `icon-box ${additive}`;

    return (
        <motion.div className={iconBoxClassName}
                    onClick={onClick} 
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}>
            {children}
        </motion.div>
    );
}


export default IconBox;