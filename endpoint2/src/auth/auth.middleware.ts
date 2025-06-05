import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization'];

    if (!authHeader || authHeader !== 'Bearer meu-token-secreto') {
      throw new UnauthorizedException('Token inválido ou ausente');
    }

    // Simulando um usuário logado
    req['user'] = { id: 1, name: 'Usuário Exemplo' };

    next();
  }
}
