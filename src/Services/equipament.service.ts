import { Injectable } from "@nestjs/common";
import { PrismaService } from "./prisma.service";

@Injectable()
export class EquipamentService {
    constructor( private prisma: PrismaService){}

    
}