import { Request, Response } from "express";
export const CarsTypeAPI = (app: any, prisma: any) => {
    app.post('/create/car-type', async (req: Request, res: Response) => {
        const { name } = req.body
        const result = await prisma.carType.create({
            data: {
                name,
            }
        })
        res.json(result)
    })
    app.get('/list/car-type', async (req: Request, res: Response) => {
        const result = await prisma.carType.findMany()
        res.json(result)
    })
    app.get('/show/car-type/:id', async (req: Request, res: Response) => {
        const { id } = req.params
        const result = await prisma.carType.findUnique({
            where: { id: Number(id) },
        })
        res.json(result)
    })
    app.post('/update/car-type/:id', async (req: Request, res: Response) => {
        const { id } = req.params
        const result = await prisma.carType.update({
            where: { id: Number(id) },
            data: {
                ...req.body
            }
        })
        res.json(result)
    })
    app.post('/delete/car-type/:id', async (req: Request, res: Response) => {
        const { id } = req.params
        const result = await prisma.carType.delete({
            where: { id: Number(id) },
        })
        res.json(result)
    })
}