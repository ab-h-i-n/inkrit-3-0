// sponsor.js
export default {
    name: 'sponsor',
    type: 'document',
    title: 'Sponsor',
    fields: [
      {
        name: 'id',
        type: 'string',
        title: 'ID',
        description: 'A unique identifier for the sponsor.',
      },
      {
        name: 'name',
        type: 'string',
        title: 'Name',
        description: 'The name of the sponsor.',
      },
      {
        name: 'logo',
        type: 'image',
        title: 'Logo',
        description: 'The logo of the sponsor.',
        options: {
          hotspot: true, // Enables image cropping
        },
      },
      {
        name: 'website',
        type: 'url',
        title: 'Website',
        description: 'The website URL of the sponsor.',
      },
    ],
  };