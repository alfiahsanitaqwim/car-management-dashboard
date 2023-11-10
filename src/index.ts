import { PrismaClient } from "@prisma/client";
import express, { Request, Response } from "express";
import createError from "http-errors"
import { CarsAPI } from "./app/cars";
import { CarsTypeAPI } from "./app/car_types";
import { CarsBrandAPI } from "./app/car_brands";
import { CustomerAPI } from "./app/customers";

const upload = require("./src/middleware/upload");
const prisma = new PrismaClient()
const app = express()

const cloudinary = require("cloudinary").v2     
cloudinary.config({ 
  cloud_name: 'djp77xipf', 
  api_key: '477512212399319', 
  api_secret: 'puwH-ffmZk-VWjkqNtuxMtc09sk' 
});

app.use(express.json())
CarsBrandAPI(app, prisma)
CarsTypeAPI(app, prisma)
CarsAPI(app, prisma);
CustomerAPI(app, prisma)

// handle 404 error
app.use((req: Request, res: Response, next: Function) => {
    next(createError(404))
})

app.listen(3000, () =>
    console.log(`⚡️[server]: Server is running at https://localhost:3000`)
)

