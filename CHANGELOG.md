# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

# [1.2.0](https://github.com/systemjs/systemjs/compare/fork1.1.0...fork1.2.0) (2021-01-11)


### Features

* subscribe 支持 buffered 参数 ([efae28e](https://github.com/systemjs/systemjs/commit/efae28ee56db64b763f52462a58b5041d9a22e00))



# 1.1.0 (2021-01-11)


### Bug Fixes

* cleaning up registerRegistry after instantiate ([#2125](https://github.com/systemjs/systemjs/issues/2125)) ([90c8490](https://github.com/systemjs/systemjs/commit/90c8490f3642cef6500faf6b016071d8152e1670))
* Registering minified modules without dependencies throws error ([8df6856](https://github.com/systemjs/systemjs/commit/8df68568e37971336931ecb6dda00a9935098362))
* strip search param and hash when determining module type ([#2096](https://github.com/systemjs/systemjs/issues/2096)) ([c7f5e12](https://github.com/systemjs/systemjs/commit/c7f5e1273c91278f883eae136b65c792fa9673f3))
* 重新使用对象作为 ns ([e6399f1](https://github.com/systemjs/systemjs/commit/e6399f1428adc170f6e826d1b33893f3024aef86))
* **compat:** allow global import on IE when using iframes ([#2035](https://github.com/systemjs/systemjs/issues/2035)) ([94c9cae](https://github.com/systemjs/systemjs/commit/94c9cae09569cd373b85984270796f14fbeacdf7))
* **extras:** avoid to check frames in global import ([9da282e](https://github.com/systemjs/systemjs/commit/9da282eb6dfff5f75384d3f81fd402c66fdf6ff3))


### Features

* add id & parentUrl to event ([d117e34](https://github.com/systemjs/systemjs/commit/d117e3486ab9cf6d9172b21ea3942c6588162eb5))
* expose extendImportMap ([678aabb](https://github.com/systemjs/systemjs/commit/678aabb96dd29c1fb607b9c5004b8f9ce345586f))
* impl subscribe method ([4f35be9](https://github.com/systemjs/systemjs/commit/4f35be9a2e702aef586e3d76866e314f4944e5aa))
* 修改 module 容器处理方式 ([bacd846](https://github.com/systemjs/systemjs/commit/bacd84624ed5044745ecd834e13719b3163af172))
* 支持 registerGlobal ([8400b14](https://github.com/systemjs/systemjs/commit/8400b14a77d6a7e051b4a281a73b5f49520fc88b))
* 支持跨域脚本加载 ([592e41d](https://github.com/systemjs/systemjs/commit/592e41d922f10ba03f286b3c4d887fdb4fef201b))
* 添加 exec 事件，resolved -> import ([a420f95](https://github.com/systemjs/systemjs/commit/a420f955a5382d3687377a3321e71e87d3c0b0a2))


### Reverts

* Revert "treat transpilers as plugins" ([cfcc201](https://github.com/systemjs/systemjs/commit/cfcc20154c409bbd94f2d94633220c1e1d366f81))
* Revert "backwards compat for #1008" ([c4ce4d9](https://github.com/systemjs/systemjs/commit/c4ce4d91ae519491ce161290a1f8c12984e22e8d)), closes [#1008](https://github.com/systemjs/systemjs/issues/1008)
* Revert "always use vm-based execution in Node environments" ([c2a3ea9](https://github.com/systemjs/systemjs/commit/c2a3ea9efbaed4a12d2bbceee5bc00396ce8d08c))
* Revert "stricter baseURL setting" ([a77fdb9](https://github.com/systemjs/systemjs/commit/a77fdb9c1cc3b2954ccd9f5b59ada8d6ba63dd3e))
* Revert "0.19 dev build" ([c2fa14a](https://github.com/systemjs/systemjs/commit/c2fa14a5bbcbf0f6c68bd5226b72d73da2e4d118))
* Revert "with exact package lookup, no need to provide separate extension removal" ([ecab74b](https://github.com/systemjs/systemjs/commit/ecab74be333c72019c6a70e9dd43e01c29f75c4d))
* Revert "source maps error test" ([3f41d78](https://github.com/systemjs/systemjs/commit/3f41d784528a32e346467f1cb7fefb91fa2fc32d))
* Revert "plugin normalize hook support (#542)" ([4b6a370](https://github.com/systemjs/systemjs/commit/4b6a3700d47d548581c0ad1ca9989fd20dfcada8)), closes [#542](https://github.com/systemjs/systemjs/issues/542)
* Revert "experiment to move defaultJSExtensions to end of paths pipeline" ([7ef0047](https://github.com/systemjs/systemjs/commit/7ef0047726bde83cb9ab386c77a10d32afdd4a36))
* Revert ""register" -> "system"" ([a93a085](https://github.com/systemjs/systemjs/commit/a93a085d478dcea682916a09fa9f2977ff146301))
* Revert "default export convenience" ([b5b0c25](https://github.com/systemjs/systemjs/commit/b5b0c25bdc8916b14879f93fa188c520c7e904bb))
