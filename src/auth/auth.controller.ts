import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

type SignInReq = {
    username: string,
    psasword: string,
}

@Controller('auth')
export class AuthController {
    constructor(private readonly authService:AuthService){}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    async signIn(@Body() data: SignInReq){
        return this.authService.signIn(data.username,data.psasword)
    }

    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req){
        return req.user;
    }
}
