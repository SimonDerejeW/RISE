import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ForumModule } from './forum/forum.module';

@Module({
  imports: [AuthModule,MongooseModule.forRoot('mongodb://127.0.0.1:27017/rise'), ForumModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
