import { type SchemaTypeDefinition } from 'sanity'
import events from './events'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [events],
}
