import type { CollectionConfig } from 'payload'

export const Tasks: CollectionConfig = {
  slug: 'tasks',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'dueDate',
      type: 'date',
    },
    {
      name: 'completed',
      type: 'checkbox',
    },
  ],
}
