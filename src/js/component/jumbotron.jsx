import React from "react";
import PropTypes from 'prop-types';

const Jumbotron = (props) => {
    return (
        <div className="container style={{margin-top: 80px}}">
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">{props.title}</h1>
                    <p className="col-md-8 fs-4">{props.description}</p>
                    <a href="https://4geeks.com/"><button className="btn btn-primary btn-lg" type="button">{props.buttonLabel}</button></a>
                </div>
            </div>
        </div>
    )
};
Jumbotron.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    buttonLabel: PropTypes.string
}


export default Jumbotron;