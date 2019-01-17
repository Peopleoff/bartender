import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';

class DrinkRecipe extends React.Component {


    handleClose = () => {
        console.log('closed');
    }

  render() {
    return (
      <div>
        <Dialog
          open={this.props.open}
          aria-labelledby="responsive-dialog-title"
          onClose={this.props.handleClose.bind(this)}
        >
          <DialogTitle id="responsive-dialog-title">{this.props.drink.name}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Let Google help apps determine location. This means sending anonymous location data to
              Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

DrinkRecipe.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
};

export default withMobileDialog()(DrinkRecipe);