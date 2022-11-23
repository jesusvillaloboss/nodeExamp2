import app from './app.js';

import {PORT_G} from './config.js';


app.listen(PORT_G, () => {
    console.log('escucha en puerto:' + PORT_G);
});
