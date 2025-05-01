import { Router } from 'express';
import { 
    getTasks, 
    getTask, 
    createTask, 
    updateTask, 
    deleteTask 
} from '../controllers/taskController.js';
import { authenticate } from '../middlewares/auth.js';

const router = Router();

router.use(authenticate);

router.route('/')
    .get(getTasks)
    .post(createTask);

router.route('/:id')
    .get(getTask)
    .put(updateTask)
    .delete(deleteTask);

export default router;