import { app } from './app'
import { env } from './config/env'
import { AppDataSource } from './config/database'

async function bootstrap() {
    await AppDataSource.initialize()
    console.log('📦 Database connected')

    app.listen(env.PORT, () => {
        console.log(`🚀 Server running on port ${env.PORT}`)
    })
}

bootstrap()