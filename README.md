# Solana Token Creator

This repository provides a simple web application for experimenting with token creation on the Solana blockchain. It aims to make the process intuitive and accessible, especially for users familiar with EVM-based chains but new to Solana's nuances.

Built on top of the [Solana dApp Scaffold](https://github.com/solana-labs/dapp-scaffold). Inspired by [Token-Creator](https://github.com/jacobcreech/Token-Creator) by Jacob Creech.

### Live Demo
- Primary: [https://solana-token-creator.vercel.app/](https://solana-token-creator.vercel.app/)
- Alternative: [https://token-creator-lac.vercel.app/](https://token-creator-lac.vercel.app/)

### Features
- Easy token creation with metadata (name, symbol, supply, etc.).
- Wallet integration for signing transactions (supports Phantom, Solflare, WalletConnect, and others via Solana Wallet Adapter).
- Airdrop request for test SOL on devnet.
- Responsive UI built with Next.js, Tailwind CSS, and DaisyUI.

### Prerequisites
- Node.js (v14+ recommended, but compatible with v12+ due to Next.js 12).
- A Solana wallet (e.g., Phantom extension).
- Environment variables: Copy `env.example` to `.env.local` and fill in if needed (e.g., RPC endpoint).

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/BroccoliFin/BrocoTokenCreator.git
   ```
   ```
   cd BrocoTokenCreator

2. Install dependencies:
   ```bash
   npm install

3. Run locally:
   ```bash
   npm run dev

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Usage
- Connect your Solana wallet using the "Connect Wallet" button.
- Fill in token details (name, symbol, decimals, supply, metadata URI if needed).
- Click "Create Token" — confirm the transaction in your wallet.
- View the token address and details after success.

**Note:** Use Solana devnet for testing to avoid real fees. Switch networks in your wallet if necessary.

### Dependencies
Key libraries (from `package.json`):
- Blockchain: `@solana/web3.js`, `@solana/spl-token`, `@metaplex-foundation/mpl-token-metadata`.
- Wallet: `@solana/wallet-adapter-base`, `@solana/wallet-adapter-react`, `@solana/wallet-adapter-react-ui`, `@solana/wallet-adapter-wallets` (includes WalletConnect support).
- UI/State: `next`, `react`, `tailwindcss`, `daisyui`, `zustand`.
- Full list: See `package.json`.

### Updating Dependencies
Run 
```
npm outdated
```
 to check for updates. Be cautious with major versions due to potential breaking changes (e.g., update Next.js to 14+ requires React 18+).

### Contributing
- Fork the repo.
- Create a feature branch: `git checkout -b feature/new-feature`.
- Commit changes: `git commit -m 'Add new feature'`.
- Push: `git push origin feature/new-feature`.
- Open a Pull Request.

### License
MIT License. 

### Contact
- GitHub: https://github.com/BroccoliFin
- X (Twitter): https://x.com/broccolifinance
- Telegram: https://t.me/devbroco

