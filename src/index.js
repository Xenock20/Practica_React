import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

function FirstComponent(){
  return <div>
    <h1>Primer Componente</h1>
  </div>
}

root.render(
  <div>
    <FirstComponent/>
  </div>
);