import { Module } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { Blog } from './entities/blog.entity';

@Module({
  imports: [TypegooseModule.forFeature([Blog])],
  controllers: [BlogController],
  providers: [BlogService],
})
export class BlogModule {}
