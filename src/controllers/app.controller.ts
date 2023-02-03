import { Controller, Request, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AppService } from 'src/services/app.service';
import { AuthService} from 'src/services/auth.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private authService: AuthService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(JwtAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

}


