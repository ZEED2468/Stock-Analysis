import NavItems from "@/components/NavItems";
import UserDropdown from "@/components/UserDropdown";
import BrandMark from "@/components/BrandMark";
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
    initialStocks: StockWithWatchlistStatus[];
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
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#030712]/90 backdrop-blur-xl">
            <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between gap-4 px-4 sm:px-6">
                <BrandMark href="/dashboard" />

                <div className="flex items-center gap-4 sm:gap-8">
                    <nav className="hidden sm:block">
                        <NavItems initialStocks={initialStocks} />
                    </nav>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="outline"
                                className="flex h-9 items-center gap-2 border-white/15 bg-white/5 text-white/90 hover:bg-white/10 hover:text-white"
                            >
                                {marketOptions.find(option => option.value === selectedView)?.label || 'Market'}
                                <ChevronDown className="h-4 w-4 opacity-70" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="border-white/10 bg-[#0B1220] text-white">
                            {marketOptions.map((option) => (
                                <DropdownMenuItem
                                    key={option.value}
                                    onClick={() => onViewChange?.(option.value)}
                                    className="cursor-pointer text-white/80 focus:bg-[#0FEDBE]/15 focus:text-[#0FEDBE]"
                                >
                                    {option.label}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                <UserDropdown user={user} initialStocks={initialStocks} />
            </div>
        </header>
    )
}
export default Header
