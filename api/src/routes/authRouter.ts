/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-ignore
import express from 'express';
//@ts-ignore
const router = express.Router();
import {login, register} from './../controllers/authControllers';

router.post('/login', login);
router.post('/register', register); 

module.exports = router;
