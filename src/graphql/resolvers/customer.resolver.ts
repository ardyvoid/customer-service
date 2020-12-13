import { Resolver, Parent, Query, Args, ResolveField } from '@nestjs/graphql';
import { CustomerService } from '../../services/customer.service';
import { CustomerAddressService } from '../../services/customer-address.service';

@Resolver('Customer')
export class CustomerResolver {
  constructor(
    private customerService: CustomerService,
    private customerAddressService: CustomerAddressService,
  ) {}

  @Query()
  async findCustomer(@Args('id') id: number) {
    return this.customerService.customer({
      id,
    });
  }

  @ResolveField()
  async billingAddress(@Parent() customer) {
    return this.customerAddressService.customerAddresses({
      where: {
        id: customer.billingAddressId,
      },
    });
  }

  @ResolveField()
  async shippingAddress(@Parent() customer) {
    return this.customerAddressService.customerAddresses({
      where: {
        id: customer.shippingAddressId,
      },
    });
  }
}
