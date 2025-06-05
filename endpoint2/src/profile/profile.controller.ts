import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller()
export class ProfileController {
  @Get('profile')
  getProfile(@Req() req: Request) {
    return {
      message: 'Perfil acessado com sucesso',
      user: req['user'],
    };
  }
}
