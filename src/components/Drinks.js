import React, { Component } from 'react';
import DrinkItem from './DrinkItem';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  });

class Drinks extends Component {

    getDrink = () => {
        return this.props.drinks.map((drink) => (
            <Grid item md={3} sm={4} xs={6} key={drink.id}>
                <DrinkItem drink={drink}/>
            </Grid>
        ))
    }
  render() {
    return (
    <div className={this.props.classes.root}>
      <Grid container spacing={24}>
            {this.getDrink()}
      </Grid>
    </div>
    )
  }
}

Drinks.propTypes = {
    drinks: PropTypes.array.isRequired
}

export default withStyles(styles)(Drinks)
