import React from 'react';
import ReactDOM from 'react-dom';

const PortalDemo = () => {
return ReactDOM.createPortal(
    <h1>
        Porta DEmo
    </h1>,
    document.getElementById('portal-root')
)
};

export default PortalDemo;