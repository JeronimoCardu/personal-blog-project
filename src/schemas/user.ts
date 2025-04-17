import { z } from "zod";

export const userSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

export type userForm = z.infer<typeof userSchema>;
