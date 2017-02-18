import * as React from 'react';
import { NavMenu } from './NavMenu';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

declare var params: any;

export interface ILayoutProps {
    body: React.ReactElement<any>;
}

const muiTheme = getMuiTheme();

if (typeof window !== 'undefined') {
    let agent = (window as any).userAgent;

    muiTheme.userAgent = agent;
} else {
    let agent = params.data.userAgent;

    muiTheme.userAgent = agent;
}

export class Layout extends React.Component<ILayoutProps, void> {
    public render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <NavMenu />
                    <div className='site-body'>
                        { this.props.body }
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}
