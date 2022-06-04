import React from 'react';

let Component = {};

Component['default'] = () => <></>;
Component['cloudafrica'] = (props) => require('./cloudafrica').default(props);
Component['simply'] = (props) => require('./simply').default(props);
Component['cloudsure'] = (props) => require('./cloudsure').default(props);
Component['multichoice'] = (props) => require('./multichoice').default(props);
Component['britehouse'] = (props) => require('./britehouse').default(props);
Component['remata'] = (props) => require('./remata').default(props);
Component['it-em'] = (props) => require('./it-em').default(props);
Component['cti'] = (props) => require('./cti').default(props);

export default Component;
