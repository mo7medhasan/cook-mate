import Logo from "@/components/Logo";

export  default function SignInLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
       <> 
       <div className="flex-1 w-full flex flex-col space-y-8 container !ml-auto !mr-0 mt-[4%]  !pr-0">
        <Logo />
            {children}
        </div></>
    )
}