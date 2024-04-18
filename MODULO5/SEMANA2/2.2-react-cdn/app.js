// copiar desde https://code.esm.sh/

import React from "https://esm.sh/react@18.2.0"
import { createRoot } from "https://esm.sh/react-dom@18.2.0/client" 

const appRootElemnt = document.getElementById('root');

const root = createRoot(appRootElemnt);

const btn =React.createElement('button',{class: 'boton-rojo', onClick: ()=> alert('Mi primera alerta con React')}, 'Mi boton con React');
const btn2 = React.createElement('button',{class: 'boton-azul'}, 'Mi segundo boton con React');
const btn3 = React.createElement('button',{class: 'boton-verde'}, 'Mi tercer boton con React');

const div = React.createElement('div',null,[btn,btn2,btn3])

root.render(div);

