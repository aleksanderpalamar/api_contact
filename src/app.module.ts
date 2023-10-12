import { Module } from '@nestjs/common';

import { ContactModule } from './contact/contact.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactController } from './contact/contact.controller';
import { ContactService } from './contact/contact.service';

@Module({
  imports: [ContactModule],
  controllers: [AppController, ContactController],
  providers: [AppService, ContactService],
})
export class AppModule {}
