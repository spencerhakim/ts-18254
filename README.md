# ts-18254

Bug repro for [Microsoft/TypeScript#18254](https://github.com/Microsoft/TypeScript/issues/18254)

## Usage

`npm install && npm run build`

## Notes

In `tsconfig.json`, if `noResolve` is set to `true`, only 2 out of 3 imports trigger an error:
```
src/app.ts(2,23): error TS2307: Cannot find module 'http-status-codes'.
src/app.ts(4,18): error TS2307: Cannot find module './SubB'.
```

If `noResolve` is set to false/omitted, then the following error is thrown:
```
$PWD/node_modules/typescript/lib/tsc.js:24702
            ts.Debug.assert(targets === undefined || sources.length === targets.length);
                     ^
Error: Debug Failure. False expression.
    at createTypeMapper ($PWD/node_modules/typescript/lib/tsc.js:24702:22)
    at createSignatureInstantiation ($PWD/node_modules/typescript/lib/tsc.js:23498:52)
    at getSignatureInstantiation ($PWD/node_modules/typescript/lib/tsc.js:23493:56)
    at $PWD/node_modules/typescript/lib/tsc.js:22025:97
    at Object.sameMap ($PWD/node_modules/typescript/lib/tsc.js:472:34)
    at getInstantiatedConstructorsForTypeArguments ($PWD/node_modules/typescript/lib/tsc.js:22025:23)
    at resolveCallExpression ($PWD/node_modules/typescript/lib/tsc.js:30643:48)
    at resolveSignature ($PWD/node_modules/typescript/lib/tsc.js:30850:28)
    at getResolvedSignature ($PWD/node_modules/typescript/lib/tsc.js:30870:26)
    at checkCallExpression ($PWD/node_modules/typescript/lib/tsc.js:30913:29)
    at checkExpressionWorker ($PWD/node_modules/typescript/lib/tsc.js:32218:28)
    at checkExpression ($PWD/node_modules/typescript/lib/tsc.js:32162:42)
    at checkExpressionStatement ($PWD/node_modules/typescript/lib/tsc.js:33912:13)
    at checkSourceElement ($PWD/node_modules/typescript/lib/tsc.js:35434:28)
    at Object.forEach ($PWD/node_modules/typescript/lib/tsc.js:275:30)
    at checkBlock ($PWD/node_modules/typescript/lib/tsc.js:33588:16)
    at checkSourceElement ($PWD/node_modules/typescript/lib/tsc.js:35430:28)
    at checkConstructorDeclaration ($PWD/node_modules/typescript/lib/tsc.js:32616:13)
    at checkSourceElement ($PWD/node_modules/typescript/lib/tsc.js:35383:28)
    at Object.forEach ($PWD/node_modules/typescript/lib/tsc.js:275:30)
    at checkClassDeclaration ($PWD/node_modules/typescript/lib/tsc.js:34534:16)
    at checkSourceElement ($PWD/node_modules/typescript/lib/tsc.js:35467:28)
    at Object.forEach ($PWD/node_modules/typescript/lib/tsc.js:275:30)
    at checkSourceFileWorker ($PWD/node_modules/typescript/lib/tsc.js:35536:20)
    at checkSourceFile ($PWD/node_modules/typescript/lib/tsc.js:35521:13)
    at Object.forEach ($PWD/node_modules/typescript/lib/tsc.js:275:30)
    at getDiagnosticsWorker ($PWD/node_modules/typescript/lib/tsc.js:35586:16)
    at getDiagnostics ($PWD/node_modules/typescript/lib/tsc.js:35563:24)
    at Object.getEmitResolver ($PWD/node_modules/typescript/lib/tsc.js:18561:13)
    at emitWorker ($PWD/node_modules/typescript/lib/tsc.js:56075:69)
    at $PWD/node_modules/typescript/lib/tsc.js:56051:66
    at runWithCancellationToken ($PWD/node_modules/typescript/lib/tsc.js:56129:24)
    at Object.emit ($PWD/node_modules/typescript/lib/tsc.js:56051:20)
    at compileProgram ($PWD/node_modules/typescript/lib/tsc.js:59097:38)
    at compile ($PWD/node_modules/typescript/lib/tsc.js:59051:26)
    at performCompilation ($PWD/node_modules/typescript/lib/tsc.js:58940:33)
    at Object.executeCommandLine ($PWD/node_modules/typescript/lib/tsc.js:58883:9)
    at Object.<anonymous> ($PWD/node_modules/typescript/lib/tsc.js:59241:4)
    at Module._compile (module.js:573:30)
    at Object.Module._extensions..js (module.js:584:10)
    at Module.load (module.js:507:32)
    at tryModuleLoad (module.js:470:12)
    at Function.Module._load (module.js:462:3)
    at Module.require (module.js:517:17)
    at require (internal/module.js:11:18)
    at Object.<anonymous> ($PWD/node_modules/typescript/bin/tsc:2:1)
    at Module._compile (module.js:573:30)
    at Object.Module._extensions..js (module.js:584:10)
    at Module.load (module.js:507:32)
    at tryModuleLoad (module.js:470:12)
    at Function.Module._load (module.js:462:3)
    at Function.Module.runMain (module.js:609:10)
    at startup (bootstrap_node.js:158:16)
    at bootstrap_node.js:598:3
```

At the time of writting, this behavior was observed with both `typescript@2.5.2` and `typescript@next` (`2.6.0-dev.20170910`), though the stacktrace above is from v2.5.2
