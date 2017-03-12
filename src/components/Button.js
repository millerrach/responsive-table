import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Sort from 'material-ui/svg-icons/content/sort'
injectTapEventPlugin();

export default class IconMenuExampleControlled extends Component {
    state = {
        valueSingle: '3',
        valueMultiple: ['3', '5'],
    };

    handleChangeMultiple = (event, value) => {
        this.setState({
            valueMultiple: value,
        });
    };

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <IconMenu
                        iconButtonElement={<IconButton><Sort /></IconButton>}
                        onChange={this.handleChangeMultiple}
                        value={this.state.valueMultiple}
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