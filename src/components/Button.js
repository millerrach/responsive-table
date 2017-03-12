import React, {Component} from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import FileFileDownload from 'material-ui/svg-icons/file/file-download';

export default () => {
    return (
    <IconMenu
        iconButtonElement={<IconButton><FileFileDownload /></IconButton>}
        open={this.state.openMenu}
        onRequestChange={this.handleOnRequestChange}
    >
        <MenuItem value="1" primaryText="Windows App" />
        <MenuItem value="2" primaryText="Mac App" />
        <MenuItem value="3" primaryText="Android App" />
        <MenuItem value="4" primaryText="iOS App" />
    </IconMenu>
    <RaisedButton onTouchTap={this.handleOpenMenu} label="Display" />
    )
}