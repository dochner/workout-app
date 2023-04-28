export interface Personal {
  id: string
  firstName: string
  lastName: string
  fullName: string
  email: string
  gender: 'any' | 'male' | 'female'
  specialties: string[]
  price: number
  classGenre: 'any' | 'male' | 'female'
  uf: string
  cref: string
  image: string
  phone: string
  description: string
  shortDescription: string
  photos: {
    image: string
  }[]
}
