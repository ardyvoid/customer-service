import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import {
  CustomerUpdateInput,
  Customer,
  CustomerCreateInput,
  CustomerWhereUniqueInput,
  CustomerWhereInput,
  CustomerOrderByInput,
} from '@prisma/client';

@Injectable()
export class CustomerService {
  constructor(private prisma: PrismaService) {}

  async customer(
    customerWhereUniqueInput: CustomerWhereUniqueInput,
  ): Promise<Customer | null> {
    return this.prisma.customer.findUnique({
      where: customerWhereUniqueInput,
    });
  }

  async customers(params: {
    skip?: number;
    take?: number;
    cursor?: CustomerWhereUniqueInput;
    where?: CustomerWhereInput;
    orderBy?: CustomerOrderByInput;
  }): Promise<Customer[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.customer.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createCustomer(data: CustomerCreateInput): Promise<Customer> {
    return this.prisma.customer.create({
      data,
    });
  }

  async updateCustomer(params: {
    where: CustomerWhereUniqueInput;
    data: CustomerUpdateInput;
  }): Promise<Customer> {
    const { where, data } = params;
    return this.prisma.customer.update({
      data,
      where,
    });
  }

  async deleteCustomer(where: CustomerWhereUniqueInput): Promise<Customer> {
    return this.prisma.customer.delete({
      where,
    });
  }
}
