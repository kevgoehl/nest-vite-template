import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { join } from 'node:path'
import { ServeStaticModule } from '@nestjs/serve-static'
import { existsSync } from 'node:fs'
import { ConfigModule } from '@nestjs/config'
import * as Joi from 'joi'

const staticRoot = join(__dirname, '..', '..', 'frontend', 'dist')
const enableStatic = process.env.SERVE_STATIC !== 'false' && existsSync(staticRoot)

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        PORT: Joi.number().default(3000),
        SERVE_STATIC: Joi.string().valid('true', 'false').default('true')
      })
    }),
    ...(enableStatic
      ? [
          ServeStaticModule.forRoot({
            rootPath: staticRoot,
            exclude: ['/api*']
          })
        ]
      : [])
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
