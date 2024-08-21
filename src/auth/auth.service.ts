import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class AuthService {
    constructor (private readonly databaseService: DatabaseService){}

    signup(){
        
        return {message: 'Signup page router'}
    }
}
