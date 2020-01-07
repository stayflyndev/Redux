import React from 'react';
import {ReactComponent as Logo} from '../../icon4.svg'
import { connect } from 'react-redux';
import {toggleCart} from '../../redux/cart/cart.actions'

const Icon = ({toggleCart}) => {
    return (
        <div className="icon" onClick={toggleCart}>
            <Logo className="ico"/>
        </div>
    );
}

const mapDispatchToProps= dispatch => ({
toggleCart: () => dispatch(toggleCart())
}) 


export default connect(null, mapDispatchToProps)(Icon);
