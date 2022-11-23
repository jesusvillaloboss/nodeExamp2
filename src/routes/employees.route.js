import { Router } from 'express';
import { createEmployee ,getEmployees,getEmployee,updateEmployee,deleteEmployee} from '../controllers/employees.controller.js';

const router = Router();

router.post('/employees', createEmployee);

router.get('/employees', getEmployees);

router.get('/employees/:id', getEmployee);

router.patch('/employees/:id', updateEmployee);

router.delete('/employees/:id', deleteEmployee);

export default router;