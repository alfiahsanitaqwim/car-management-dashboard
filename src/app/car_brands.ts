import { Request, Response } from "express";
export const CarsBrandAPI = (app: any, prisma: any) => {
    app.post('/create/car-brand', async (req: Request, res: Response) => {
        const { name } = req.body
        const result = await prisma.carBrand.create({
            data: {
                name,
            }
        })
        res.json(result)
    })
    app.get('/list/car-brand', async (req: Request, res: Response) => {
        const result = await prisma.carBrand.findMany()
        res.json(result)
    })
    app.get('/show/car-brand/:id', async (req: Request, res: Response) => {
        const { id } = req.params
        const result = await prisma.carBrand.findUnique({
            where: { id: Number(id) },
        })
        res.json(result)
    })
    app.post('/update/car-brand/:id', async (req: Request, res: Response) => {
        const { id } = req.params
        const result = await prisma.carBrand.update({
            where: { id: Number(id) },
            data: {
                ...req.body
            }
        })
        res.json(result)
    })
    app.post('/delete/car-brand/:id', async (req: Request, res: Response) => {
        const { id } = req.params
        const result = await prisma.carBrand.delete({
            where: { id: Number(id) },
        })
        res.json(result)
    })
}