import { z } from "zod";

export const TransferSchema = z.object({
    account: z
        .string()
        .min(8, { message: "No rekening minimal 8 digit" })
        .max(16, { message: "No rekening maksimal 16 digit" })
        .regex(/^\d+$/, { message: "Hanya boleh angka" }),

    amount: z
        .string()
        .regex(/^\d+$/, { message: "Hanya boleh angka" })
        .refine((val) => parseInt(val) > 0, {
            message: "Jumlah harus lebih dari 0",
        }),
});

export type TransferInput = z.infer<typeof TransferSchema>;
