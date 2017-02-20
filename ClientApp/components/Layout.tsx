import * as React from 'react';
import { connect } from 'react-redux';
import { NavMenu } from './NavMenu';
import { ApplicationState } from '../store';
import * as GlobalState from '../store/Global';

//import * as WeatherForecastsState from '../store/WeatherForecasts';

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

declare var window: any;

export interface ILayoutProps {
    //userAgent: string;
    body: React.ReactElement<any>;
}

const muiTheme = getMuiTheme({
    userAgent: 'all' // this.props.userAgent
});

//type ILayoutProps =
//    GlobalState.IGlobalState
//    & typeof GlobalState.actionCreators
//    & { params: { userAgent: string } }
//    & { body: React.ReactElement<any> };

export default class Layout extends React.Component<ILayoutProps, void> {
    public render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <NavMenu />
                    <div className='site-body container'>
                        { this.props.body }
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

//export default connect(
//    (state: ApplicationState) => state.global, // Selects which state properties are merged into the component's props
//    GlobalState.actionCreators                 // Selects which action creators are merged into the component's props
//)(Layout);
