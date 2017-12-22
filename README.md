# EthReal

### Install
```
npm install ethreal -g
```

### Useage
```
ethreal
```

### Output
```
╔══════════╤══════════╤═══════╤════════╗
║ Crypto   │ USD      │ 24h   │ 7d     ║
╟──────────┼──────────┼───────┼────────╢
║ Bitcoin  │ $18828.0 │ -2.94 │  11.98 ║
╟──────────┼──────────┼───────┼────────╢
║ Ethereum │ $740.959 │  3.64 │  56.57 ║
╟──────────┼──────────┼───────┼────────╢
║ Litecoin │ $319.694 │  0.01 │  71.96 ║
╚══════════╧══════════╧═══════╧════════╝
```

### Configuration (Optional)

By default EthReal will display `BTC`, `ETH`, `BCH`, `LTC`. By adding a configuration file (`.ethreal`) to your users home directory, you can specify which [Supported Cryptocurriencies](#supported-cryptocurriencies) to display and the rows color style.

#### Sample `.ethreal` config file
```
{
    "crypto": [
      {
          "symbol": "BTC"
        , "color": "magenta"
      },
      {
          "symbol": "BCH"
        , "color": "green"
      },
      {
          "symbol": "ETH"
        , "color": "cyan"
      },
      {
          "symbol": "LTC"
        , "color": "yellow"
      }
    ]
  }
```

### Available colors 
black, red, green, yellow, blue, magenta, cyan, white, gray, grey

### Background colors
bgBlack, bgRed, bgGreen, bgYellow, bgBlue, bgMagenta, bgCyan, bgWhite

### Styles
reset, bold, dim, italic, underline, inverse, hidden, strikethrough

### Extras
rainbow, zebra, america, trap, random

### Supported Cryptocurriencies

EthReal is currently able to display the current market value in USD for the folowing:
```
- Bitcoin (BTC)
- Ethereum (ETH)
- Bitcoin Cash (BCH)
- Ripple (XRP)
- Litecoin (LTC)
- IOTA (MIOTA)
- Cardano (ADA)
- Dash (DASH)
- NEM (XEM)
- Bitcoin Gold (BTG)
- Monero (XMR)
- EOS (EOS)
- Qtum (QTUM)
- NEO (NEO)
- Stellar (XLM)
- Ethereum Classic (ETC)
- TRON (TRX)
- Lisk (LSK)
- BitConnect (BCC)
- Zcash (ZEC)
- Verge (XVG)
- OmiseGO (OMG)
- Populous (PPT)
- BitShares (BTS)
- Waves (WAVES)
- Hshare (HSR)
- Stratis (STRAT)
- Ardor (ARDR)
- Tether (USDT)
- Komodo (KMD)
- Nxt (NXT)
- Bytecoin (BCN)
- Steem (STEEM)
- Augur (REP)
- Dogecoin (DOGE)
- MonaCoin (MONA)
- Ark (ARK)
- Veritaseum (VERI)
- Siacoin (SC)
- RaiBlocks (XRB)
- Status (SNT)
- Decred (DCR)
- PIVX (PIVX)
- Golem (GNT)
- Binance Coin (BNB)
- Electroneum (ETN)
- SALT (SALT)
- DigiByte (DGB)
- Byteball Bytes (GBYTE)
- VeChain (VET)
- Power Ledger (POWR)
- Bytom (BTM)
- Walton (WTC)
- Basic Attention Token (BAT)
- TenX (PAY)
- Vertcoin (VTC)
- MaidSafeCoin (MAID)
- Factom (FCT)
- DigixDAO (DGD)
- ZCoin (XZC)
- Kyber Network (KNC)
- Aeternity (AE)
- Syscoin (SYS)
- QASH (QASH)
- BitcoinDark (BTCD)
- 0x (ZRX)
- ReddCoin (RDD)
- Gas (GAS)
- Einsteinium (EMC2)
- BitBay (BAY)
- GameCredits (GAME)
- FunFair (FUN)
- Decentraland (MANA)
- Santiment Network Token (SAN)
- GXShares (GXS)
- Aion (AION)
- Iconomi (ICN)
- Civic (CVC)
- Cryptonex (CNX)
- Dragonchain (DRGN)
- Ethos (ETHOS)
- Gnosis (GNO)
- Nexus (NXS)
- Monaco (MCO)
- Metal (MTL)
- Raiden Network Token (RDN)
- Bancor (BNT)
- Request Network (REQ)
- Storj (STORJ)
- Blocknet (BLOCK)
- NAV Coin (NAV)
- Streamr DATAcoin (DATA)
- PayPie (PPP)
- ChainLink (LINK)
- RChain (RHOC)
- Groestlcoin (GRS)
- Ubiq (UBQ)
- Substratum (SUB)
- Asch (XAS)
- Edgeless (EDG)
```