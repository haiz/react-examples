import React from 'react';
import {connect} from 'react-redux';
import CounterContainer from './counter';

class AppComp extends React.Component {
    render() {
        return (
            <div>
                <p>COUNTER</p>
                <CounterContainer />
            </div>
        )
    }
}

const AppContainer = connect(null, null)(AppComp);
export default AppContainer;