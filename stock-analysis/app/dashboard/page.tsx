'use client';

import { useState } from 'react';
import TradingViewWidget from "@/components/TradingViewWidget";
import {
    HEATMAP_WIDGET_CONFIG,
    MARKET_DATA_WIDGET_CONFIG,
    MARKET_OVERVIEW_WIDGET_CONFIG,
    TOP_STORIES_WIDGET_CONFIG
} from "@/lib/constants";
import Header from "@/components/Header";

interface DashboardProps {
    user: User;
    initialStocks: StockWithWatchlistStatus[];
}

const Dashboard = ({ user, initialStocks }: DashboardProps) => {
    const scriptUrl = `https://s3.tradingview.com/external-embedding/embed-widget-`;
    const [activeTab, setActiveTab] = useState<'market-data' | 'heatmap'>('market-data');
    const [selectedView, setSelectedView] = useState<string>('market');

    const handleViewChange = (view: string) => {
        setSelectedView(view);
    };

    const panel =
        "rounded-2xl border border-white/10 bg-[#080D18]/80 shadow-[0_0_0_1px_rgba(15,237,190,0.04)] backdrop-blur-sm";

    const renderContent = () => {
        switch (selectedView) {
            case 'market':
                return (
                    <div className="flex min-h-[70vh] flex-col gap-4 xl:flex-row xl:gap-5">
                        <aside className={`w-full p-4 xl:w-[30%] ${panel}`}>
                            <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#0FEDBE]">
                                Market Overview
                            </h2>
                            <TradingViewWidget
                                title=""
                                scriptUrl={`${scriptUrl}market-overview.js`}
                                config={MARKET_OVERVIEW_WIDGET_CONFIG}
                                className="custom-chart"
                                height={600}
                            />
                        </aside>

                        <main className={`w-full px-4 pb-4 xl:w-[50%] ${panel}`}>
                            <div className="mb-5 flex space-x-1 border-b border-white/10">
                                <button
                                    className={`px-4 py-2 text-sm font-medium transition-colors ${
                                        activeTab === 'market-data'
                                            ? 'border-b-2 border-[#0FEDBE] text-[#0FEDBE]'
                                            : 'text-white/45 hover:text-white'
                                    }`}
                                    onClick={() => setActiveTab('market-data')}
                                >
                                    Market Data
                                </button>
                                <button
                                    className={`px-4 py-2 text-sm font-medium transition-colors ${
                                        activeTab === 'heatmap'
                                            ? 'border-b-2 border-[#0FEDBE] text-[#0FEDBE]'
                                            : 'text-white/45 hover:text-white'
                                    }`}
                                    onClick={() => setActiveTab('heatmap')}
                                >
                                    Stock Heatmap
                                </button>
                            </div>

                            <div className="min-h-[600px]">
                                {activeTab === 'market-data' ? (
                                    <TradingViewWidget
                                        title=""
                                        scriptUrl={`${scriptUrl}market-quotes.js`}
                                        config={MARKET_DATA_WIDGET_CONFIG}
                                        height={600}
                                    />
                                ) : (
                                    <TradingViewWidget
                                        title=""
                                        scriptUrl={`${scriptUrl}stock-heatmap.js`}
                                        config={HEATMAP_WIDGET_CONFIG}
                                        height={600}
                                    />
                                )}
                            </div>
                        </main>

                        <aside className={`w-full p-4 xl:w-[20%] ${panel}`}>
                            <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#0FEDBE]">
                                Top Stories
                            </h2>
                            <TradingViewWidget
                                title=""
                                scriptUrl={`${scriptUrl}timeline.js`}
                                config={TOP_STORIES_WIDGET_CONFIG}
                                height={600}
                            />
                        </aside>
                    </div>
                );
            case 'stocks':
            case 'crypto':
            case 'forex':
            case 'commodities':
                return (
                    <div className={`w-full p-4 ${panel}`}>
                        <TradingViewWidget
                            title=""
                            scriptUrl={`${scriptUrl}market-quotes.js`}
                            config={MARKET_DATA_WIDGET_CONFIG}
                            height={700}
                        />
                    </div>
                );
            case 'news':
                return (
                    <div className={`w-full p-4 ${panel}`}>
                        <TradingViewWidget
                            title=""
                            scriptUrl={`${scriptUrl}timeline.js`}
                            config={TOP_STORIES_WIDGET_CONFIG}
                            height={700}
                        />
                    </div>
                );
            case 'alerts':
                return (
                    <div className={`w-full p-6 ${panel}`}>
                        <h2 className="mb-2 text-lg font-medium text-white">Price alerts</h2>
                        <p className="text-white/50">
                            Your personalized price alerts will appear here.
                        </p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-[#030712] text-white">
            <Header
                user={user}
                initialStocks={initialStocks}
                selectedView={selectedView}
                onViewChange={handleViewChange}
            />

            <main className="px-4 py-6 sm:px-6 lg:px-8">
                <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
                    <div>
                        <h1
                            className="text-2xl font-semibold tracking-tight text-white sm:text-3xl"
                            style={{ fontFamily: "var(--font-unbounded), system-ui, sans-serif" }}
                        >
                            Welcome back, {user.name.split(" ")[0]}.
                        </h1>
                    </div>
                    <p className="max-w-md text-sm text-white/45">
                        Live markets, alerts, and AI context in one dark surface.
                    </p>
                </div>

                {renderContent()}
            </main>
        </div>
    );
};

export default Dashboard;
