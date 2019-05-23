import React from 'react';
import { Route, Link } from "react-router-dom";
import PropTypes from "prop-types";


export default class MessageBox extends React.Component {

    componentDidMount(){
        $(this._message).find('.close').on('click', function() {
            $(this).closest('.message').transition('fade');
        });
    }


    render() {

        let { title, message, type} = this.props;

        return (
            <div ref={(message)=> this._message = message} id="message-box">
                <div className={"ui message "+type}>
                    <i className="close icon"></i>
                    <div className="header">{title}</div>
                    <p>{message}</p>
                </div>
            </div>
        )
    }

}

MessageBox.propTypes= {
    title: PropTypes.string.isRequired,
    message: PropTypes.any.isRequired,
    type: PropTypes.string.isRequired,

}