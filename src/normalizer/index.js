import { normalize, denormalize, schema } from 'normalizr'

const product = new schema.Entity('products')
const mySchema = [product]
export const normalizedData = (data) => normalize(data, mySchema)
export const deNormalizedData = (input, entities) => denormalize(input, mySchema, entities)
