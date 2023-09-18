export interface AuthRepository {
  getImageById(id: number): Promise<string>
}

export class AuthRepositoryImpl implements AuthRepository {
  async getImageById(id: number): Promise<string> {
    return new Promise((resolve) => {
      resolve('Happens!')
    })
  }
}
