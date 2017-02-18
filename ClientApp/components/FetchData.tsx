import * as React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { ApplicationState }  from '../store';
import * as WeatherForecastsState from '../store/WeatherForecasts';

import RaisedButton from 'material-ui/RaisedButton';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

// At runtime, Redux will merge together...
type WeatherForecastProps =
    WeatherForecastsState.WeatherForecastsState     // ... state we've requested from the Redux store
    & typeof WeatherForecastsState.actionCreators   // ... plus action creators we've requested
    & { params: { startDateIndex: string } };       // ... plus incoming routing parameters

class FetchData extends React.Component<WeatherForecastProps, void> {
    private style = {
        margin: 10
    };

    componentWillMount() {
        // This method runs when the component is first added to the page
        let startDateIndex = parseInt(this.props.params.startDateIndex) || 0;
        this.props.requestWeatherForecasts(startDateIndex);
    }

    componentWillReceiveProps(nextProps: WeatherForecastProps) {
        // This method runs when incoming props (e.g., route params) change
        let startDateIndex = parseInt(nextProps.params.startDateIndex) || 0;
        this.props.requestWeatherForecasts(startDateIndex);
    }

    public render() {
        return <div>
            <h1>Weather forecast</h1>
            <p>This component demonstrates fetching data from the server and working with URL parameters.</p>
            { this.renderForecastsTable() }
            { this.renderPagination() }
        </div>;
    }

    private renderForecastsTable() {
        return (
            <Table className='table'>
                <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                    <TableRow>
                        <TableHeaderColumn>Date</TableHeaderColumn>
                        <TableHeaderColumn>Temp. (C)</TableHeaderColumn>
                        <TableHeaderColumn>Temp. (F)</TableHeaderColumn>
                        <TableHeaderColumn>Summary</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody stripedRows={true} displayRowCheckbox={false}>
                {this.props.forecasts.map(forecast =>
                    <TableRow key={ forecast.dateFormatted }>
                        <TableRowColumn>{ forecast.dateFormatted }</TableRowColumn>
                        <TableRowColumn>{ forecast.temperatureC }</TableRowColumn>
                        <TableRowColumn>{ forecast.temperatureF }</TableRowColumn>
                        <TableRowColumn>{ forecast.summary }</TableRowColumn>
                    </TableRow>
                )}
                </TableBody>
            </Table>
        );
    }

    private renderPagination() {
        let prevStartDateIndex = this.props.startDateIndex - 5;
        let nextStartDateIndex = this.props.startDateIndex + 5;

        return (
            <div className='clearfix text-center'>
                <Link to={ `/fetchdata/${ prevStartDateIndex }` }>
                    <RaisedButton primary={true} style={this.style}>
                        Previous
                    </RaisedButton>
                </Link>
                <Link to={ `/fetchdata/${ nextStartDateIndex }` }>
                    <RaisedButton primary={true} style={this.style}>
                    Next
                    </RaisedButton>
                </Link>
                { this.props.isLoading ? <span>Loading...</span> : [] }
            </div>
        );
    }
}

export default connect(
    (state: ApplicationState) => state.weatherForecasts, // Selects which state properties are merged into the component's props
    WeatherForecastsState.actionCreators                 // Selects which action creators are merged into the component's props
)(FetchData);
