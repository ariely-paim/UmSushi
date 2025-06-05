import { Module, MiddlewareConsumer } from '@nestjs/common';
import { ProfileController } from './profile/profile.controller';
import { AuthMiddleware } from 'src/auth/auth.middleware';

@Module({
  controllers: [ProfileController],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes('profile'); // Aplica o middleware somente para essa rota
  }
}
