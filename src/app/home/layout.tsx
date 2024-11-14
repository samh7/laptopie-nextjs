import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { authOptions } from "@/lib/auth/auth";
import { getServerSession } from "next-auth";
import NextAuthProvider from "@/components/auth/NextAuthProvider";

export const metadata: Metadata = {
  title: "Laptopie",
  description: "Best laptop recommendation system.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  return (
    <NextAuthProvider>
      <div className="w-screen" >
        <Header userLoggedIn={session ? true : false} />

      <main className="flex min-h-screen flex-col items-center justify-between">
        <div className="container">
          <div className="container  py-10">{children}</div>
        </div>
      </main>
      <Footer />
    </div>
    </NextAuthProvider>
  );
}
