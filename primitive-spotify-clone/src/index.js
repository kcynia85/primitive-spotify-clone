import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'views/Root/Root';
import { DataLayer } from 'data/DataLayer';
import reducer, { initialState } from 'data/reducer';

ReactDOM.render(
  <React.StrictMode>
    <DataLayer initialState={initialState} reducer={reducer}>     
       <Root /> 
    </DataLayer>
  </React.StrictMode>,
  document.getElementById('root')
);



