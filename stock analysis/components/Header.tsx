import Link from "next/link";
import Image from "next/image";
import NavItems from "@/components/NavItems";
import UserDropdown from "@/components/UserDropdown";
import {searchStocks} from "@/lib/actions/finnhub.actions";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
    user: User;
    initialStocks: any[];
    selectedView?: string;
    onViewChange?: (view: string) => void;
}

const Header = ({ user, initialStocks, selectedView = 'market', onViewChange }: HeaderProps) => {

    const marketOptions = [
        { value: 'market', label: 'Market Overview' },
        { value: 'stocks', label: 'Stock Analysis' },
        { value: 'crypto', label: 'Cryptocurrency' },
        { value: 'forex', label: 'Forex' },
        { value: 'commodities', label: 'Commodities' },
        { value: 'news', label: 'Market News' },
        { value: 'alerts', label: 'Price Alerts' }
    ];

    return (
        <header className="sticky top-0 header">
            <div className="container header-wrapper">
                <Link href="/">
                    <Image src="/assets/icons/logo.png" alt="Signalist logo" width={140} height={32} className="h-8 w-auto cursor-pointer" />
                </Link>
                
                <div className="flex items-center gap-8">
                    <nav className="hidden sm:block">
                        <NavItems initialStocks={initialStocks} />
                    </nav>
                    
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="flex items-center gap-2 bg-white border-gray-300 text-gray-700 hover:bg-gray-50">
                                {marketOptions.find(option => option.value === selectedView)?.label || 'Market'}
                                <ChevronDown className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-white border-gray-300">
                            {marketOptions.map((option) => (
                                <DropdownMenuItem
                                    key={option.value}
                                    onClick={() => onViewChange?.(option.value)}
                                    className="text-gray-900 hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
                                >
                                    {option.label}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                
                <div className="flex items-center">
                    <UserDropdown user={user} initialStocks={initialStocks} />
                </div>
            </div>
        </header>
    )
}
export default Header
