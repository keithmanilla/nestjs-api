import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  create(createProductDto: CreateProductDto[]) {
    return {
      statusCode: 201,
      message: `Successfully created product${createProductDto?.length > 1 ? 's' : ''}`,
      count: createProductDto?.length,
      products: createProductDto,
    };
  }

  findAll() {
    return `This action returns all products`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product: ${updateProductDto?.toString()}`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
