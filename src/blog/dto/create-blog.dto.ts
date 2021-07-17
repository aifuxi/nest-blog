import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateBlogDto {
  @ApiProperty({
    description: '标题',
    example: '我是标题',
  })
  @IsNotEmpty({ message: '标题必填' })
  readonly title!: string;

  @ApiProperty({
    description: '内容',
    example: '我是内容',
  })
  readonly content: string;
}
