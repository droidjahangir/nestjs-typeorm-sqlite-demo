import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { UsersService } from '../users.service';
import { User } from '../user.entity';
import { type } from 'os';

declare global {
  namespace Express {
    interface Request {
      currentUser?: User;
      session?: {
        userId: string
      }
    }
  }
}

@Injectable()
export class CurrentUserMiddleware implements NestMiddleware {
  constructor(private usersService: UsersService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const { userId } = req.session || {};

    if (userId) {
      const user = await this.usersService.findOne(parseInt(userId));
      req.currentUser = user;
    }

    next();
  }
}
