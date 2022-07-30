import React from 'react';
import PropTypes from 'prop-types';

const Footer = (props) => {
    return (
        <div className="container-fluid bg-white" id="footer">
            <p>{props.text}</p>
        </div>
    );
}
Footer.propTypes = {
    text: PropTypes.string
}


export default Footer;