import { CollectionConfig } from 'payload'
import { a } from 'vitest/dist/chunks/suite.d.FvehnV49.js'

export const Runs: CollectionConfig = {
  slug: 'runs',
  fields: [
    {
      name: 'routine',
      type: 'relationship',
      relationTo: 'routines',
      required: true,
    },
    {
      name: 'startTime',
      type: 'date',
      required: true,
    },
    {
      name: 'endTime',
      type: 'date',
      required: true,
    },
    {
      name: 'steps',
      type: 'array',
      fields: [
        {
          name: 'stepId',
          type: 'text',
          required: true,
        },
        {
          name: 'completed',
          type: 'checkbox',
          required: true,
          defaultValue: true,
        },
        {
          name: 'startTime',
          type: 'date',
          required: true,
        },
        {
          name: 'endTime',
          type: 'date',
          required: true,
        },
      ],
    },
  ],
  admin: {
    group: 'Routines',
  },
}
