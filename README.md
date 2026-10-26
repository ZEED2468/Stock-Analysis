# IntelliStock

AI-powered stock market analysis - real-time prices, alerts, charts, and insights.

Live: https://stock-analysis-alpha-amber.vercel.app/

Formerly branded as Signalist / Stock Analysis. Product name aligned to portfolio as **IntelliStock**.

## Features

- **Real-Time Stock Prices** - Live market data with instant updates via Finnhub.
- **Smart Stock Search** - Quickly search stocks by company name or ticker symbol.
- **Personalized Price Alerts** - Receive notifications when stocks reach your target price.
- **Interactive Charts** - Analyze historical performance with dynamic and customizable charts.
- **AI-Powered Insights** - Get intelligent market analysis, trend detection, and investment insights powered by Google Gemini.
- **Daily Market News Summary** - Stay informed with curated financial news and AI-generated summaries, delivered via automated email digests.
- **Watchlists** - Track your favorite stocks in one place with real-time updates.

## Tech Stack

- **Frontend:** Next.js
- **Backend:** Node.js
- **Database:** MongoDB
- **Real-Time Market Data:** Finnhub API
- **AI:** Google Gemini API
- **Background Jobs / Scheduling:** Inngest
- **Email Delivery:** Nodemailer
- **Charts:** TradingView
- **Authentication:** Better Auth
- **Deployment:** Vercel

## Technical Highlights

- **Real-time price updates:** Live stock prices are pulled from the Finnhub API.
- **Background automation with Inngest:** Daily market news summaries and email digests are handled as scheduled background jobs via Inngest, decoupling long-running tasks (like AI summarization and email delivery) from the main request/response cycle.
- **AI-generated insights:** Market analysis and news summaries are generated using Google Gemini, with prompts designed to turn raw price/news data into concise, readable insights for users.

## Use Cases

- Monitor live stock prices
- Track personal investment portfolios
- Receive instant price alerts
- Analyze market trends with AI
- Stay updated with daily financial news
- Build and manage custom watchlists

## Future Enhancements

- Portfolio performance tracking
- Stock comparison tools
- Technical indicators (RSI, MACD, Bollinger Bands)
- Earnings calendar
- Global market support
- Social sentiment analysis
- AI investment assistant

## License

This project is licensed under the MIT License.
