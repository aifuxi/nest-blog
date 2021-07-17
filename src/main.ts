import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('主入口Main.ts');
  const PORT = 3000;
  const API_DOC = 'api-doc';

  const options = new DocumentBuilder()
    .setTitle('Nestjs 博客API')
    .setDescription('学习全栈之巅的nestjs记录')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(API_DOC, app, document);

  app.useGlobalPipes(new ValidationPipe());

  logger.log(`服务地址: http://localhost:${PORT}`);
  logger.log(`接口文档地址: http://localhost:${PORT}/${API_DOC}`);

  await app.listen(PORT);
}
bootstrap();
