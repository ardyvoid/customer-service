import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import {
  CustomerAddressUpdateInput,
  CustomerAddress,
  CustomerAddressCreateInput,
  CustomerAddressWhereUniqueInput,
  CustomerAddressWhereInput,
  CustomerAddressOrderByInput,
} from '@prisma/client';

@Injectable()
export class CustomerAddressService {
  constructor(private prisma: PrismaService) {}

  async customerAddress(
    customerAddressWhereUniqueInput: CustomerAddressWhereUniqueInput,
  ): Promise<CustomerAddress | null> {
    return this.prisma.customerAddress.findUnique({
      where: customerAddressWhereUniqueInput,
    });
  }

  async customerAddresses(params: {
    skip?: number;
    take?: number;
    cursor?: CustomerAddressWhereUniqueInput;
    where?: CustomerAddressWhereInput;
    orderBy?: CustomerAddressOrderByInput;
  }): Promise<CustomerAddress[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.customerAddress.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createCustomerAddress(
    data: CustomerAddressCreateInput,
  ): Promise<CustomerAddress> {
    return this.prisma.customerAddress.create({
      data,
    });
  }

  async updateCustomerAddress(params: {
    where: CustomerAddressWhereUniqueInput;
    data: CustomerAddressUpdateInput;
  }): Promise<CustomerAddress> {
    const { where, data } = params;
    return this.prisma.customerAddress.update({
      data,
      where,
    });
  }

  async deleteCustomerAddress(
    where: CustomerAddressWhereUniqueInput,
  ): Promise<CustomerAddress> {
    return this.prisma.customerAddress.delete({
      where,
    });
  }
}
