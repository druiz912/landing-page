import React from 'react';
import PropTypes from 'prop-types';

//import card component
import Card from './card.jsx';


const CardContainer = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-xl-3 col-md-6">
                    <Card imageUrl="https://picsum.photos/403"
                    title="Card1" description="Lorem Ipsum" buttonLabel="click"/>
                </div>
                <div className="col-xl-3 col-md-6">
                    <Card imageUrl="https://picsum.photos/450"
                     title="Card2" description="Lorem Ipsum" buttonLabel="click" />
                </div>
                <div className="col-xl-3 col-md-6">
                    <Card imageUrl="https://picsum.photos/410" 
                     title="Card3" description="Lorem Ipsum" buttonLabel="click" />
                </div>
                <div className="col-xl-3 col-md-6">
                    <Card imageUrl="https://picsum.photos/402"
                      title="Card4" description="Lorem Ipsum" buttonLabel="click" />
                </div>
            </div>
            
        </div>
    );
}

export default CardContainer;