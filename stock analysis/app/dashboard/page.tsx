'use client';

import { useState, useEffect } from 'react';
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
    initialStocks: any[];
}

const Dashboard = ({ user, initialStocks }: DashboardProps) => {
    const scriptUrl = `https://s3.tradingview.com/external-embedding/embed-widget-`;
    const [activeTab, setActiveTab] = useState<'market-data' | 'heatmap'>('market-data');
    const [selectedView, setSelectedView] = useState<string>('market');

    const handleViewChange = (view: string) => {
        setSelectedView(view);
    };

    const renderContent = () => {
        switch (selectedView) {
            case 'market':
                return (
                    <div className="flex min-h-screen gap-6">
                        {/* Left Column - Market Overview (30%) */}
                        <aside className="w-[30%] bg-white border-r border-gray-200 p-4">
                            <h2 className="text-xl font-semibold text-blue-600 mb-4">Market Overview</h2>
                            <TradingViewWidget
                                title=""
                                scriptUrl={`${scriptUrl}market-overview.js`}
                                config={MARKET_OVERVIEW_WIDGET_CONFIG}
                                className="custom-chart"
                                height={600}
                            />
                        </aside>

                        {/* Center Column - Market Data/Stock Heatmap (50%) */}
                        <main className="w-[50%] px-4 pb-4">
                            <div className="bg-white rounded-lg border border-gray-200 p-4">
                                <div className="flex space-x-1 mb-5">
                                    <button 
                                        className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                                            activeTab === 'market-data' 
                                                ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600' 
                                                : 'text-gray-500 hover:text-blue-600 hover:bg-gray-50'
                                        }`}
                                        onClick={() => setActiveTab('market-data')}
                                    >
                                        Market Data
                                    </button>
                                    <button 
                                        className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                                            activeTab === 'heatmap' 
                                                ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600' 
                                                : 'text-gray-500 hover:text-blue-600 hover:bg-gray-50'
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
                            </div>
                        </main>

                        {/* Right Column - Top Stories (20%) */}
                        <aside className="w-[20%] bg-white border-l border-gray-200 p-4">
                            <h2 className="text-xl font-semibold text-blue-600 mb-4">Top Stories</h2>
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
                return (
                    <div className="w-full p-4">
                        <TradingViewWidget
                            title=""
                            scriptUrl={`${scriptUrl}market-quotes.js`}
                            config={MARKET_DATA_WIDGET_CONFIG}
                            height={700}
                        />
                    </div>
                );
            case 'crypto':
                return (
                    <div className="w-full p-4">
                        <TradingViewWidget
                            title=""
                            scriptUrl={`${scriptUrl}market-quotes.js`}
                            config={MARKET_DATA_WIDGET_CONFIG}
                            height={700}
                        />
                    </div>
                );
            case 'forex':
                return (
                    <div className="w-full p-4">
                        <TradingViewWidget
                            title=""
                            scriptUrl={`${scriptUrl}market-quotes.js`}
                            config={MARKET_DATA_WIDGET_CONFIG}
                            height={700}
                        />
                    </div>
                );
            case 'commodities':
                return (
                    <div className="w-full p-4">
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
                    <div className="w-full p-4">
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
                    <div className="w-full p-4">
                        <div className="bg-white rounded-lg border border-gray-200 p-6">
                            <p className="text-gray-600">Your personalized price alerts will appear here.</p>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <Header 
                user={user} 
                initialStocks={initialStocks} 
                selectedView={selectedView}
                onViewChange={handleViewChange}
            />
            
            <main className="px-8 py-4">
                <div className="mb-8 text-center">
                    <h1 className="text-4xl font-bold mb-4 mt-4 bg-gradient-to-r from-blue-300 to-blue-900 bg-clip-text text-transparent">
                        Never Miss a Market Move Again
                    </h1>
                    <p className="text-lg text-gray-600 max-w-6xl mx-auto leading-relaxed mb-4">
                        Get instant alerts on price movements that matter to your portfolio. Track real-time data across stocks, crypto, forex, and commodities for smarter, AI-powered investment decisions.
                    </p>
                </div>

                {renderContent()}
            </main>
        </div>
    );
};

export default Dashboard;