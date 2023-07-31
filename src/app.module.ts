import { Module } from '@nestjs/common';
import {ConfigModule}  from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ArtistModule } from './artist/artist.module';
import { AlbumModule } from './album/album.module';
import { TrackModule } from './track/track.module';
import { FavoriteModule } from './favorite/favorite.module';

@Module({
  imports: [UserModule, ArtistModule, AlbumModule, TrackModule, FavoriteModule,  ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}