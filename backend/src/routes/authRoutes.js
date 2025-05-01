import { Router } from 'express';
import { register, login } from '../controllers/authController.js';
import { validate } from '../middlewares/validate.js';
import { 
  registerValidations, 
  loginValidations 
} from '../validators/authValidators.js';

const router = Router();

router.post('/register', registerValidations, validate, register);
router.post('/login', loginValidations, validate, login);

export default router;