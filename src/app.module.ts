import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonModule } from './person/person.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI || 'mongodb://localhost/nest', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    PersonModule,
  ],
})
export class AppModule {}
