import { motion } from 'framer-motion';

import IconBox from "../icon-box/index";

import './main.css';


function popupBox({ children, handleClose }) {
    return (
        <motion.div className='popup-box'
                    initial={{ rotate: -15, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    exit={{ rotate: -15, scale: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20
                    }}>
            <IconBox children={'X'} additive='size0' onClick={handleClose} />
            {children}
        </motion.div>
    );
}


export default popupBox;