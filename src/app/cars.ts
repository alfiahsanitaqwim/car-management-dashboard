
import { Request, Response } from "express";
export const CarsAPI = (app: any, prisma: any) => {
    app.post('/create/car', async (req: Request, res: Response) => {
        const { car_name, id_car_type, id_car_brand, availability, capacity, image_url, price, desc } = req.body
        const result = await prisma.car.create({
            data: {
                car_name, id_car_type, id_car_brand, availability, capacity, image_url, price, desc
            }
        })
        res.json(result)
    })
    app.get('/list/car', async (req: Request, res: Response) => {
        const result = await prisma.car.findMany()
        res.json(result)
    })
    app.get('/show/car/:id', async (req: Request, res: Response) => {
        const { id } = req.params
        const result = await prisma.car.findUnique({
            where: { id: Number(id) },
        })
        res.json(result)
    })
    app.post('/update/car/:id', async (req: Request, res: Response) => {
        const { id } = req.params
        const result = await prisma.car.update({
            where: { id: Number(id) },
            data: {
                ...req.body
            }
        })
        res.json(result)
    })
    app.post('/delete/car/:id', async (req: Request, res: Response) => {
        const { id } = req.params
        const result = await prisma.car.delete({
            where: { id: Number(id) },
        })
        res.json(result)
    })
}