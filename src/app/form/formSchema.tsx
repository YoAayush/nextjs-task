import { z } from 'zod';

export const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  fields: z.array(
    z.object({
      label: z.string().min(1, "Label is required"),
      value: z.string().min(1, "Value is required"),
    })
  ).min(2, "You must add at least 2 fields"),
});
