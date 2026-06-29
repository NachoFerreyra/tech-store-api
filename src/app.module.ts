import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    /* Buscá el archivo .env y cargá todas sus variables */
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    /* Conecta a MongoDB apenas arranque la aplicación */
    MongooseModule.forRoot(process.env.MONGODB_URI as string),
    ProductsModule,
  ],

  controllers: [AppController],

  providers: [AppService],
})
export class AppModule {}
