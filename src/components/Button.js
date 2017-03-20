import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Sort from 'material-ui/svg-icons/content/sort'
injectTapEventPlugin();

export default class IconMenuExampleControlled extends Component {

    handleChangeMultiple = (event, value) => {
        this.props.selection(value);
    };

    render() {
        const iconStyles = {
            paddingTop: 0,
        };
        return (
            <MuiThemeProvider>
                <div id="btnContainer">
                    <IconMenu
                        iconButtonElement={<IconButton style={iconStyles}><Sort color="#58B89D" hoverColor="rgb(255, 64, 129)"/></IconButton>}
                        onChange={this.handleChangeMultiple}
                        value={this.props.selected}
                        multiple={true}
                    >
                        <MenuItem value="1" primaryText="Origin" />
                        <MenuItem value="2" primaryText="Details" />
                        <MenuItem value="3" primaryText="Price" />
                    </IconMenu>
                </div>
            </MuiThemeProvider>
        );
    }
}