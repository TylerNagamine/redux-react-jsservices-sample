import * as React from 'react';

export interface ICurtainProps {
    curtainText?: string;
    shown?: boolean;
}

export interface ICurtainState {
    isShown: boolean;
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

        this.state = {
            isShown: false,
        };
    }

    public render() {
        this.state.isShown = this.props.shown;

        return (
            <div style={this.styles} hidden={!this.state.isShown}>
                <div style={this.childStyles}>
                    {this.props.children}
                    <br />
                    <span style={{color: 'white'}}>{this.props.curtainText}</span>
                </div>
            </div>
        );
    }
}