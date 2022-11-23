import * as dotenv from 'dotenv'
dotenv.config()



export const PORT_G = process.env.PORT || 3000;
export const host= process.env.DB_HOST;
export const user=  process.env.DB_USER;
export const password= process.env.DB_PASSWORD;
export const port=  process.env.DB_PORT;
export const database= process.env.DB_DATABASE;


