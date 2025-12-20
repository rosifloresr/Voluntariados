import { AppDataSource } from '../config/database'

beforeAll(async () => {
    if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize()
    }
})