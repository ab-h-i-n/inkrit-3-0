import { type SchemaTypeDefinition } from 'sanity'
import events from './events'
import sponsor from './sponsor'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [events , sponsor],
}
