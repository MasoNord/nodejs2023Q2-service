import { Module } from '@nestjs/common';
import { FavoriteService } from './favorite.service';
import { FavoriteController } from './favorite.controller';
import { PrismaModule } from 'src/nest/prismanpx/prisma.module';

@Module({
  controllers: [FavoriteController],
  providers: [FavoriteService],
  imports: [PrismaModule],
})
export class FavoriteModule {}
