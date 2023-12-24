/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-ignore
import express from 'express';
//@ts-ignore
const router = express.Router();
import {updateRole, getCurrentUser} from './../controllers/usersController';

router.put('/update-role', updateRole);
router.get('/current-user', getCurrentUser); 

module.exports = router;