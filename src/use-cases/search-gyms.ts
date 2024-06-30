import { Gym } from '@prisma/client'
import { GymsRepository } from '@/repositories/gyms-repository'

interface SearchGymsUSeCaseRequest {
  query: string
  page: number
}

interface SearchGymsUSeCaseResponse {
  gyms: Gym[]
}

export class SearchGymsUSeCase {
  constructor(private gymsRepository: GymsRepository) {}

  async execute({
    query,
    page,
  }: SearchGymsUSeCaseRequest): Promise<SearchGymsUSeCaseResponse> {
    const gyms = await this.gymsRepository.searchMany(query, page)

    return { gyms }
  }
}
