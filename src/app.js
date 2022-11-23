import express from 'express';
import employeesRoute from './routes/employees.route.js';
import indexRoute from './routes/index.route.js';

const app = express();

app.use(express.json());
app.use('/api',employeesRoute);
app.use(indexRoute);



app.use((req, res) => {
    res.status(404).json({
        message: 'endpoint not found'
    })
});

export default app;