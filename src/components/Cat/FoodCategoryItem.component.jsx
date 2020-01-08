import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import Container from '@material-ui/core/Container';
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import { addItem } from '../../redux/cart/cart.actions'

function FoodCategoryItem({id, img, url, price, title, history, link, match, addItem}) {
    return (
        <div onClick={() => history.push(`${match.url}${link}`)}>
             <GridListTileBar key={id}
                   title={title}
                   subtitle={<span>Prices Starting at: {price} </span>}
                   subtitle={<span>CLICK HERE TO ORDER</span>}
               />
            
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default withRouter(connect(null, mapDispatchToProps)(FoodCategoryItem));
