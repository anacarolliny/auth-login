import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'Tom', description: 'The name of the cat' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'email@email.com', description: 'The email of user' })
  @IsEmail()
  @IsNotEmpty()
  @Transform(({ value }) => value.toLowerCase())
  email: string;
}
