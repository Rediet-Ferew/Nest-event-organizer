import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
@Injectable()
export class VenueService {
  constructor(private readonly databaseService:DatabaseService){}
  create(createVenueDto: Prisma.VenueCreateInput) {
    return this.databaseService.venue.create({
      data: createVenueDto
    })
  }

  async findAll() {
    return this.databaseService.venue.findMany()
  }

  async findOne(id: number) {
    return this.databaseService.venue.findUnique({
      where: {
        id,
      }
    })
  }

  update(id: number, updateVenueDto: Prisma.VenueUpdateInput) {
    return this.databaseService.venue.update({
      where: {
        id,
      },
      data: updateVenueDto
    })
  }

  remove(id: number) {
    return this.databaseService.venue.delete({
      where: {
        id,
      }
    })
  }
}
