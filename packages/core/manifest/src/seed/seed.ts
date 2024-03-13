import { NestFactory } from '@nestjs/core'
import { AppModule } from '../app.module'
import { Seeder } from './seeder'

async function bootstrap() {
  NestFactory.createApplicationContext(AppModule, {
    logger: ['error', 'warn']
  })
    .then((appContext) => {
      console.log('🌱 Seeding database...')
      const seeder = appContext.get(Seeder)
      seeder
        .seed()
        .then(() => {
          console.log(
            '🌱 Seed complete ! Please refresh your browser to see your new data.'
          )
        })
        .catch((error) => {
          console.error('Seeding failed!')
          throw error
        })
        .finally(() => appContext.close())
    })
    .catch((error) => {
      throw error
    })
}
bootstrap()
