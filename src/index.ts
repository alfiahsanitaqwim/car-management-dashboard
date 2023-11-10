import { PrismaClient } from "@prisma/client";
import express, { Request, Response } from "express";
import createError from "http-errors"

const prisma = new PrismaClient()
const app = express()
app.use(express.json())
// TODO: Routing aplikasi akan kita tulis di sini

// antara start
app.get('/', async (req: Request, res: Response) => {
    res.json("get all cars")
})
app.get('/:id', async (req: Request, res: Response) => {
    res.json("Get cars by id")
})

app.post('/add', async (req: Request, res: Response) => {
    res.json("Add car")
})

app.put('/:id', async (req: Request, res: Response) => {
    res.json("Edit car")
})

app.delete('/:id', async (req: Request, res: Response) => {
    res.json("delete car")
})

app.get('/feed', async (req: Request, res: Response) => {
    // const posts = await prisma.post.findMany({
    //   include: { author: true }
    // })
    res.json("posts")
})
// antara end
// handle 404 error
app.use((req: Request, res: Response, next: Function) => {
  next(createError(404))
})

app.listen(3000, () =>
  console.log(`⚡️[server]: Server is running at http://localhost:3000`)
)
