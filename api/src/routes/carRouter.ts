/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import express from 'express';
// @ts-ignore
const router  = express.Router();
import {get, getById, post, updateById, deleteById} from './../controllers/carsControllers';

router.get('/', get);
router.get('/:id', getById);
router.post('/create', post);
router.put('/update/:id', updateById);
router.post('/delete/:id', deleteById);

module.exports = router;
