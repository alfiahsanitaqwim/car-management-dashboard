import { Request, Response, NextFunction } from 'express';

const isAdmin = (req: Request, res: Response, next: NextFunction): void => {
	if (req.query.role === 'admin') {
		next();
		return;
	}

	res.status(401).json({
		status: 'unauthorized',
		message: 'You are not an admin. Please log in as an administrator.'
	});
};

export = isAdmin;
