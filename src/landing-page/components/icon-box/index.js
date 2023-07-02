import './main.css';


function IconBox({ children, additive }) {
    const iconBoxClassName = `icon-box ${additive}`;

    return (
        <div className={iconBoxClassName}>
            {children}
        </div>
    );
}


export default IconBox;