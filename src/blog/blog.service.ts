import { Injectable } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { Blog } from './entities/blog.entity';

@Injectable()
export class BlogService {
  constructor(@InjectModel(Blog) private readonly blogModel: ModelType<Blog>) {}
  async create(createBlogDto: CreateBlogDto) {
    return this.blogModel.create(createBlogDto);
  }

  async findAll(): Promise<Blog[]> {
    return await this.blogModel.find();
  }

  async findOne(id: string): Promise<Blog> {
    return await this.blogModel.findById(id);
  }

  async update(id: string, updateBlogDto: UpdateBlogDto): Promise<Blog> {
    return await this.blogModel.findByIdAndUpdate(id, updateBlogDto);
  }

  async remove(id: string): Promise<Blog> {
    return await this.blogModel.findByIdAndDelete(id);
  }
}
