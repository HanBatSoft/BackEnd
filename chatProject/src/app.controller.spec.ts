import { Test, TestingModule } from '@nestjs/testing';
import { EcgController } from './controller/chat.controller';
import { EcgService } from './service/chat.service';

describe('AppController', () => {
  let ecgController: EcgController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [EcgController],
      providers: [EcgService],
    }).compile();

    ecgController = app.get<EcgController>(EcgController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(ecgController.getHello()).toBe('Hello World!');
    });
  });
});
