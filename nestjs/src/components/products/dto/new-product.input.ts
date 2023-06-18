import { Field, InputType, Int } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';

@InputType()
export class NewProductInput {
  @Field()
  name: string;

  @Field((type) => Int)
  @Max(20000)
  @Min(1500)
  monthlyPrice: number;
}
