"use client";
import Header from "@/components/Header";
import { usePathname } from "next/navigation";
export default function LayoutProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  return ["/login", "/register"].some(path => path === pathname) ? (<main className="flex min-h-screen flex-col">{children}</main>) : (<> <Header />
    <main className="flex min-h-screen flex-col">{children}</main></>)




};
