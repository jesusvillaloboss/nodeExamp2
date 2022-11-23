import { createPool } from 'mysql2/promise';
import { host,user,password,port,database} from './config.js'

export const pool = createPool({
    host,
    user,
    password,
    port,
    database,
});




