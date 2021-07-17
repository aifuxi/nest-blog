import { prop } from '@typegoose/typegoose';

export class Blog {
  @prop({ required: true })
  readonly title!: string;

  @prop()
  readonly content: string;
}
