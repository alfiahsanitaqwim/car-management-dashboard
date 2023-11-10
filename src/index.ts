import { PrismaClient } from "@prisma/client";
import express, { Request, Response } from "express";
import createError from "http-errors"
import { CarsAPI } from "./app/cars";
import { CarsTypeAPI } from "./app/car_types";
import { CarsBrandAPI } from "./app/car_brands";
import { CustomerAPI } from "./app/customers";

const prisma = new PrismaClient()
const app = express()

app.use(express.json())
CarsAPI(app, prisma);
CarsBrandAPI(app, prisma)
CarsTypeAPI(app, prisma)
CustomerAPI(app, prisma)
// TODO: Routing aplikasi akan kita tulis di sini

// handle 404 error
app.use((req: Request, res: Response, next: Function) => {
    next(createError(404))
})

app.listen(3000, () =>
    console.log(`⚡️[server]: Server is running at https://localhost:3000`)
)

