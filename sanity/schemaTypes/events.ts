export default {
  name: "event",
  type: "document",
  title: "Event",
  fields: [
    {
      name: "id",
      type: "string",
      title: "Event ID",
      description: "Unique identifier for the event.",
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: "title",
      type: "string",
      title: "Title",
      description: "Title of the event.",
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: "poster",
      type: "image",
      title: "Poster",
      description: "Upload the event poster.",
      options: {
        hotspot: true,
      },
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      description: "Brief description of the event.",
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: "date",
      type: "date",
      title: "Date",
      description: "Date of the event.",
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: "time",
      type: "string",
      title: "Time",
      description: "Time of the event (e.g., '10:00 AM').",
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: "entryFee",
      type: "number",
      title: "Entry Fee",
      description: "Entry fee for the event.",
      validation: (Rule: {
        min: (arg0: number) => {
          (): any;
          new (): any;
          required: { (): any; new (): any };
        };
      }) => Rule.min(0).required(),
    },
    {
      name: "prizePool",
      type: "number",
      title: "Prize Pool",
      description: "Total prize pool for the event.",
      validation: (Rule: {
        min: (arg0: number) => {
          (): any;
          new (): any;
          required: { (): any; new (): any };
        };
      }) => Rule.min(0).required(),
    },
    {
      name: "eventCoordinators",
      type: "array",
      title: "Event Coordinators",
      description: "List of event coordinators.",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              type: "string",
              title: "Name",
              validation: (Rule: { required: () => any }) => Rule.required(),
            },
            {
              name: "phone",
              type: "string",
              title: "Phone Number",
              validation: (Rule: { required: () => any }) => Rule.required(),
            },
          ],
        },
      ],
    },
    {
      name: "staffCoordinators",
      type: "array",
      title: "Staff Coordinators",
      description: "List of staff coordinators.",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              type: "string",
              title: "Name",
              validation: (Rule: { required: () => any }) => Rule.required(),
            },
            {
              name: "phone",
              type: "string",
              title: "Phone Number",
              validation: (Rule: { required: () => any }) => Rule.required(),
            },
          ],
        },
      ],
    },
    {
      name: "registrationLink",
      type: "url",
      title: "Registration Link",
      description: "URL for registration.",
    },
    {
      name: "rules",
      type: "array",
      title: "Rules",
      description: "List of rules for the event.",
      of: [
        {
          type: "string",
        },
      ],
    },
  ],
};
