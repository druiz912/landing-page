import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href="#" className="btn btn-primary">{props.buttonLabel}</a>
            </div>
        </div>
    );
}
Card.propTypes = {
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    buttonLabel: PropTypes.string
}

export default Card;