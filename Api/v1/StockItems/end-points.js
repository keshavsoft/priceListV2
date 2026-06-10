import express from 'express';

import funcFromShowAll from './ShowAll/controller.js';
import { postFunc } from "./Insert/controller.js";

const tableName = "StockItems";
const tablePath = "Data/StockItems.json";

const router = express.Router();
router.post('/Insert', express.json(), (req, res) => postFunc({ req, res, inTableName: tableName }));

router.get('/ShowAll', (req, res) => funcFromShowAll({ res, inTablePath: tablePath }));

export { router };