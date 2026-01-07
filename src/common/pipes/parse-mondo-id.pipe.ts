import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { isValidObjectId, ObjectId } from 'mongoose';

@Injectable()
export class ParseMondoIdPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    if (isValidObjectId(value)) {
      return value;
    }

    throw new BadRequestException(`The id ${value} is not valid MongoID`);
  }
}
