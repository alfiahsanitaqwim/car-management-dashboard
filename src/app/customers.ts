
import { Request, Response } from "express";
export const CustomerAPI = (app: any, prisma: any) => {
    app.post('/create/customer', async (req: Request, res: Response) => {
        const { id_car, name, email, phone, photo } = req.body
        const result = await prisma.customer.create({
            data: {
                id_car, name, email, phone, photo
            }
        })
        res.json(result)
    })
    app.get('/list/customer', async (req: Request, res: Response) => {
        const result = await prisma.customer.findMany()
        res.json(result)
    })
    app.get('/show/customer/:id', async (req: Request, res: Response) => {
        const { id } = req.params
        const result = await prisma.customer.findUnique({
            where: { id: Number(id) },
        })
        res.json(result)
    })
    app.post('/update/customer/:id', async (req: Request, res: Response) => {
        const { id } = req.params
        const result = await prisma.customer.update({
            where: { id: Number(id) },
            data: {
                ...req.body
            }
        })
        res.json(result)
    })
    app.post('/delete/customer/:id', async (req: Request, res: Response) => {
        const { id } = req.params
        const result = await prisma.customer.delete({
            where: { id: Number(id) },
        })
        res.json(result)
    })
}