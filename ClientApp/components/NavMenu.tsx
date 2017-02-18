import * as React from 'react';
import { Link } from 'react-router';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export interface INavuMenuProps {
}

export interface INavMenuState {
    open: boolean
}

export class NavMenu extends React.Component<INavuMenuProps, INavMenuState> {
    constructor(props: INavuMenuProps) {
        super(props);

        this.state = { 
            open: false
        };
    }

    handleToggle = () => {
        this.setState({
           open: !this.state.open 
        });
    }

    public render() {
        return (
            <div>
                <AppBar 
                    title="Hello world!"
                    onLeftIconButtonTouchTap={this.handleToggle}
                />
                <Drawer open={this.state.open}>
                    <Link to={ '/' } activeClassName='active'>
                        <MenuItem onClick={this.handleToggle}>
                            <span className='glyphicon glyphicon-home'></span> Home
                        </MenuItem>
                    </Link>
                    <Link to={ '/counter' } activeClassName='active'>
                        <MenuItem onClick={this.handleToggle}>
                            <span className='glyphicon glyphicon-education'></span> Counter
                        </MenuItem>
                    </Link>
                    <Link to={ '/fetchdata' } activeClassName='active'>
                        <MenuItem onClick={this.handleToggle}>
                            <span className='glyphicon glyphicon-th-list'></span> Fetch data
                        </MenuItem>
                    </Link>
                </Drawer>
            </div>
        );              
    }
}
