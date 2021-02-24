# EthReal

A command line utility that will display the current market values of the Cryptocurrencies you care most about right in your terminal. EthReal utilizes data from the [coinmarketcap.com](https://coinmarketcap.com) top 100.

- [Install](#install)
- [Useage](#useage)
- [Configuration](#configuration)
- [Following a Cryptocurrency](#following-a-cryptocurrency)
- [Colors](#colors)
- [Options](#options)
- [Supported Cryptocurrencies](#supported-cryptocurrencies)

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
╔══════════════╤══════════╤════════╤════════╤═══════════╤══════════╗
║ Crypto       │ USD      │ 24h    │ 7d     │ Holding   │ USD      ║
╟──────────────┼──────────┼────────┼────────┼───────────┼──────────╢
║ Bitcoin      │ $15477.3 │  8.5   │ -19.49 │ -         │ -        ║
╟──────────────┼──────────┼────────┼────────┼───────────┼──────────╢
║ Ethereum     │ $759.211 │  9.31  │  9.0   │ 2         │ $1518.42 ║
╟──────────────┼──────────┼────────┼────────┼───────────┼──────────╢
║ Bitcoin Cash │ $3448.4  │  19.08 │  90.88 │ 1         │ $3448.40 ║
╟──────────────┼──────────┼────────┼────────┼───────────┼──────────╢
║ Litecoin     │ $304.587 │  9.87  │  0.93  │ 0.1194417 │ $36.38   ║
╚══════════════╧══════════╧════════╧════════╧═══════════╧══════════╝
```

### Configuration

All the configuration data is stored in a `json` file in your home directory `~/.ethreal`

### Holdings

You can now calculate the value of your holdings automatically with EthReal. Holdings data is stored in the configuration file `~/.ethreal` as a type float. No private data is saved or stored, just a number.

##### Set Holdings

Example setting bitcoin holdings to `1.2345`

```
ethreal -s btc -i 1.2345
```

##### Add Holdings

Example adding `0.001234` to your bitcoin holdings

```
ethreal -a 0.001234 -s btc
```

##### Remove Holdings

Example removing `0.001234` from your bitcoin holdings

```
ethreal -r 0.001234 -s btc
```

### Following a Cryptocurrency

###### Follow

Example, start following Bytecoin. the color option is optional. `red` will be used by default

```
ethreal -f bcn -c yellow
```

###### Un-follow

Example, stop following Bytecoin

```
ethreal -u bcn
```

### Colors

Changing the color of a cryptocurrency row is easy.

```
ethreal -s btc -c blue
```

##### Available colors

black, red, green, yellow, blue, magenta, cyan, white, gray, grey,
bgBlack, bgRed, bgGreen, bgYellow, bgBlue, bgMagenta, bgCyan, bgWhite,
reset, bold, dim, italic, underline, inverse, hidden, strikethrough,
rainbow, zebra, america, trap, random

### Additional Options

```
ethreal -h
```

### Supported Cryptocurrencies

EthReal is currently able to display the current market value in USD for the [coinmarketcap.com](https://coinmarketcap.com) top 100:
