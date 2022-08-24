import React from 'react';
import DockMonitor from 'redux-devtools-dock-monitor';
import LogMonitor from 'redux-devtools-log-monitor';
import { createDevTools } from 'redux-devtools';

/**
 * Creates Dev Tool Kit for redux
 */
const ReduxDevTools = createDevTools(
    <DockMonitor 
        toggleVisibilityKey='ctrl-h'
        changePositionKey='ctrl-i'
        defaultIsVisible={true}
        defaultPosition='bottom'>
        <LogMonitor theme="tomorrow"/>
    </DockMonitor>
)

export default ReduxDevTools;