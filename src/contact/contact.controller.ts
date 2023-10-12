import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ContactDataProps, ContactService } from './contact.service';

@Controller('Contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  async sendContactEmail(
    @Body() contactData: ContactDataProps,
  ): Promise<string> {
    try {
      await this.contactService.sendEmail(contactData);
      return 'Email enviado com sucesso!';
    } catch (error) {
      throw new Error('Erro ao enviar email');
    }
  }
}
