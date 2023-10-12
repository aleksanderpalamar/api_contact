import { Test, TestingModule } from '@nestjs/testing';
import { ContactController } from './contact.controller';
import { ContactDataProps, ContactService } from './contact.service';

describe('ContactController', () => {
  let controller: ContactController;
  let contactService: ContactService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContactController],
      providers: [ContactService],
    }).compile();

    controller = module.get<ContactController>(ContactController);
    contactService = module.get<ContactService>(ContactService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should send a contact email', async () => {
    const contactData: ContactDataProps = {
      name: 'John Doe',
      email: 'johndoe@example.com',
      subject: 'Test Subject',
      message: 'Test Message',
    };

    // Mock the sendEmail method of the ContactService
    const sendEmailSpy = jest
      .spyOn(contactService, 'sendEmail')
      .mockResolvedValue(undefined);

    const result = await controller.sendContactEmail(contactData);

    expect(sendEmailSpy).toHaveBeenCalledWith(contactData); // Ensure the service method was called
    expect(result).toBe('Email enviado com sucesso!');
  });
});
