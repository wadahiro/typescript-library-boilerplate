# TypeScript Library Boilerplate

## Setup

```bash
# Install typings
npm install -g typings

# Install devDependencies
npm install
```

## Run test

```bash
$ npm run test

> typescript-library-boilerplate@1.0.0 test c:\Users\wadahiro\src\github.com\wadahiro\typescript-library-boilerplate
> mocha --compilers ts:node_modules/espower-typescript/guess test/**/*.ts



  Sample
    add()
      √ should return sum
    add() failed
      1) should return sum


  1 passing (26ms)
  1 failing

  1) Sample add() failed should return sum:

      AssertionError:   # file.ts:16

  assert.equal(sum, 2)
               |
               3

      + expected - actual

      -3
      +2
...
```