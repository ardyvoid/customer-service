import { Module } from '@nestjs/common';
import { GraphQLFederationModule } from '@nestjs/graphql';

import { CustomerResolver } from './graphql/resolvers/customer.resolver';
import { PrismaService } from './services/prisma.service';
import { CustomerService } from './services/customer.service';
import { CustomerAddressService } from './services/customer-address.service';

@Module({
  imports: [
    GraphQLFederationModule.forRoot({
      typePaths: ['./**/*.graphql'],
    }),
  ],
  providers: [
    PrismaService,
    CustomerService,
    CustomerResolver,
    CustomerAddressService,
  ],
})
export class AppModule {}
