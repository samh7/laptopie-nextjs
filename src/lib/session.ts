import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/auth";

export const session = await getServerSession(authOptions);

