# TypeScript Library Boilerplate

## Setup

```bash
# Install typings
npm install -g typings

# Install devDependencies
npm install
```

## Run test example

```bash
$ npm run test

> typescript-library-boilerplate@1.20 test c:\Users\wadahiro\src\github.com\wadahiro\typescript-library-boilerplate
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

## Build example

```bash
$ npm run build

> typescript-library-boilerplate@1.2.0 build c:\Users\wadahiro\src\github.com\wadahiro\typescript-library-boilerplate
> tsc


```

## Distribute example

```bash
$ npm run dist

> typescript-library-boilerplate@1.2.0 dist C:\Users\wadahiro\src\github.com\wadahiro\typescript-library-boilerplate
> browserify lib --debug | exorcist dist/bundle.js.map > dist/bundle.js && uglifyjs dist/bundle.js --in-source-map dist/bundle.js.
map --mangle --compress --output dist/bundle.min.js --source-map dist/bundle.min.js.map


```


## License

Licensed under the [MIT](/LICENSE.txt) license.


