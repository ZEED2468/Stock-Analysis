'use client';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {useRouter} from "next/navigation";
import {Button} from "@/components/ui/button";
import {LogOut} from "lucide-react";
import NavItems from "@/components/NavItems";
import {signOut} from "@/lib/actions/auth.actions";

const UserDropdown = ({ user, initialStocks }: {user: User, initialStocks: StockWithWatchlistStatus[]}) => {
    const router = useRouter();

    const handleSignOut = async () => {
        await signOut();
        router.push("/sign-in");
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-3 text-white/80 hover:bg-white/5 hover:text-white">
                    <Avatar className="h-8 w-8 border border-white/15">
                        <AvatarFallback className="bg-[#0FEDBE]/20 text-sm font-bold text-[#0FEDBE]">
                            {user.name[0]}
                        </AvatarFallback>
                    </Avatar>
                    <span className="hidden text-sm font-medium md:inline">{user.name.split(' ')[0]}</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="border-white/10 bg-[#0B1220] text-white">
                <DropdownMenuLabel>
                    <div className="relative flex items-center gap-3 py-2">
                        <Avatar className="h-10 w-10 border border-white/15">
                            <AvatarFallback className="bg-[#0FEDBE]/20 text-sm font-bold text-[#0FEDBE]">
                                {user.name[0]}
                            </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                            <span className='text-base font-medium text-white'>
                                {user.name}
                            </span>
                            <span className="text-sm text-white/45">{user.email}</span>
                        </div>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-white/10"/>
                <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer text-md font-medium text-white/80 focus:bg-[#0FEDBE]/15 focus:text-[#0FEDBE]">
                    <LogOut className="mr-2 hidden h-4 w-4 sm:block" />
                    Logout
                </DropdownMenuItem>
                <DropdownMenuSeparator className="hidden bg-white/10 sm:block"/>
                <nav className="sm:hidden">
                    <NavItems initialStocks={initialStocks} />
                </nav>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
export default UserDropdown
