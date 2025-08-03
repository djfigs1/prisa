import type { CollectionConfig } from 'payload'

export const Dashboards: CollectionConfig = {
  slug: 'dashboards',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'upload',
      relationTo: 'media',
      name: 'backgroundImage',
    },
    {
      type: 'select',
      name: 'colorPalette',
      options: [
        'black',
        'white',
        'gray',
        'red',
        'orange',
        'yellow',
        'green',
        'teal',
        'blue',
        'cyan',
        'purple',
        'pink',
      ],
    },
  ],
}
