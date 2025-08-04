import { CollectionConfig } from 'payload'

export const Routines: CollectionConfig = {
  slug: 'routines',
  fields: [
    {
      type: 'text',
      name: 'name',
      required: true,
    },
    {
      type: 'array',
      name: 'steps',
      fields: [
        {
          type: 'text',
          name: 'taskName',
          required: true,
        },
        {
          type: 'textarea',
          name: 'description',
        },
        {
          type: 'number',
          name: 'estimatedCompletionTime',
        },
        {
          type: 'checkbox',
          name: 'optional',
          defaultValue: false,
        },
      ],
    },
  ],
  admin: {
    useAsTitle: 'name',
    group: 'Routines',
  },
}
