import { buttonVariants } from "@/components/ui/Button";
import { FC } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import SignUp from "@/components/SignUp";



const page: FC = ({}) => {
    return <div className="absolute inset-0">
        <div className="h-full max-w-2xl mx-auto flex flex-col items-center justify-center gap-2">
            <Link href="/" className={cn(buttonVariants({variant : 'ghost'}), 'self-start -mt-20')}>
                Home
            </Link>
            <SignUp/>
        </div>
    </div>
}


export default page