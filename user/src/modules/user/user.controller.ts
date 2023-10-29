import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { API_VERSION_NUMBER, EApiPath } from 'src/contants';

@Controller({
    path: EApiPath.USER,
    version: API_VERSION_NUMBER,
  })
@ApiTags(EApiPath.USER)
export class UserController {}
