import { Injectable } from '@nestjs/common';
import { User } from 'generated/prisma/client';
import { SignUpReq } from 'src/auth/DTO';
import { PrismaService } from 'src/prisma/prisma.service';

// export type User = {
//   id: number;
//   name: string;
//   password: string;
//   role: string;
// };

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  async Create(data: SignUpReq): Promise<User | null> {
    const User = {
      name: data.username,
      password: data.password,
      role: data.role,
      country: data.country,
    };
    return await this.prismaService.user.create({ data: User });
  }

  async findOne(username: string): Promise<User | null> {
    return await this.prismaService.user.findUnique({
      where: {
        name: username,
      },
    });
  }
}
