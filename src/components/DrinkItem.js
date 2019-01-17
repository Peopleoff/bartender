import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import DrinkRecipe from './DrinkRecipe';


const styles = {
    card: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  };

export class DrinkItem extends Component {

    state = {
        open: false,
        currentDrink: null
    }

    showRecipe = () => {
        if(this.state.currentDrink){
            return (
                <DrinkRecipe open={this.state.open} drink={this.state.currentDrink} handleClose={this.handleClose} />
            )
        }
        return (
            null
        )
    }

    openRecipe = () => {
        this.setState({open: !this.state.open})
        this.setState({currentDrink: this.props.drink})
    }

    handleClose = () => {
        console.log('inside item');
        this.setState({open: false})
    }


  render() {
    return (
        <div>
            {this.showRecipe()}

            <Card className={this.props.classes.card} onClick={this.openRecipe}>
                <CardActionArea className={this.props.classes.cardAction}>
                <CardMedia
                className={this.props.classes.media}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography variant="h5" component="h2" align="center">
                    {this.props.drink.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
      </div>
    )
  }
}

DrinkItem.propTypes = {
    drink: PropTypes.object.isRequired
}

export default withStyles(styles)(DrinkItem);
