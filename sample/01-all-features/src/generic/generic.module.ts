import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { GenericController } from "./generic.controller";
import { GenericService } from "./generic.service";

@Module({
     controllers: [GenericController],
     providers: [GenericService, PrismaService]
})
export class BookModule{}