'use client';

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TrendingUp, BarChart3, Bell, Shield, Users, Zap } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">Signalist</span>
            </div>
            <div className="flex space-x-4">
              <Link href="/sign-in">
                <Button className="btn-primary">
                  Sign In
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button className="btn-primary">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Title Section */}
      <section className="py-4 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-3 mt-2 bg-gradient-to-r from-blue-300 to-blue-900 bg-clip-text text-transparent">
            Never Miss a Market Move Again
          </h1>
          <p className="text-base text-gray-600 max-w-4xl mx-auto leading-relaxed mb-3">
            Get instant alerts on price movements that matter to your portfolio. Track real-time data across stocks, crypto, forex, and commodities for smarter, AI-powered investment decisions.
          </p>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Master the Market with
            <span className="text-blue-600 block">Real-Time Insights</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Track stocks, get personalized alerts, and make informed investment decisions 
            with our comprehensive market analysis platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/sign-up">
              <Button className="btn-large">
                Start Trading Smart
              </Button>
            </Link>
            <Link href="/sign-in">
              <Button className="btn-primary">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional-grade tools and insights to help you navigate the stock market with confidence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <BarChart3 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-Time Charts</h3>
              <p className="text-gray-600">
                Interactive TradingView charts with technical analysis and market data.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <Bell className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Alerts</h3>
              <p className="text-gray-600">
                Get notified when stocks hit your target prices or show unusual activity.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure & Reliable</h3>
              <p className="text-gray-600">
                Bank-level security with reliable data feeds from trusted sources.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized</h3>
              <p className="text-gray-600">
                Customized experience based on your investment goals and preferences.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <Zap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-gray-600">
                Real-time data updates and instant notifications for market movements.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Market Insights</h3>
              <p className="text-gray-600">
                AI-powered news summaries and market analysis to guide your decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Start Your Investment Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of investors who trust Signalist for their market analysis and trading decisions.
          </p>
          <Link href="/sign-up">
            <Button className="btn-large bg-white text-blue-600 hover:bg-gray-100">
              Get Started Free
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <TrendingUp className="h-6 w-6 text-blue-400" />
              <span className="text-xl font-bold">Signalist</span>
            </div>
            <div className="text-gray-400 text-center md:text-right">
              <p>&copy; 2025 Signalist. All rights reserved.</p>
              <p className="text-sm">Professional stock market analysis platform</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
