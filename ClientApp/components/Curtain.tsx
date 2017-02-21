import * as React from 'react';

export interface ICurtainProps {
    children?: React.ReactNode;
    curtainText?: string;
    shown?: boolean;
}

export interface ICurtainState {
}

export class Curtain extends React.Component<ICurtainProps, ICurtainState> {
    styles = {
        height: '100%',
        width: '100%',
        background: 'black',
        position: 'absolute',
        opacity: .5
    };

    childStyles = {
        position: 'relative',
        top: '45%',
        textAlign: 'center'
    };

    constructor(props: ICurtainProps) {
        super(props);
    }

    public shouldComponentUpdate(nextProps: ICurtainProps, nextState: ICurtainState): boolean {
        return this.props.shown != nextProps.shown ||
            this.props.children != nextProps.children ||
            this.props.curtainText != nextProps.curtainText;
    }

    public render() {
        return (
            <div style={this.styles} hidden={!this.props.shown}>
                <div style={this.childStyles}>
                    {this.props.children}
                    <br />
                    <span style={{color: 'white'}}>{this.props.curtainText}</span>
                </div>
            </div>
        );
    }
}