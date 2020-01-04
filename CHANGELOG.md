# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.1.1](https://github.com/nodecraft-js/yggdrasil-client/compare/v0.1.0...v0.1.1) (2020-01-04)


### Features

* **client:** add options for `new YggdrasilClient()` ([ceb7cba](https://github.com/nodecraft-js/yggdrasil-client/commit/ceb7cba83956548f7482c89b5a97b4544775b6df))
* **client:** added `YggdrasilClient.Options` ([f5fab91](https://github.com/nodecraft-js/yggdrasil-client/commit/f5fab9160546a6980778e025a55fc8100965bcc9))
* **client:** added `YggdrasilClient.OptionsWithAuthServer` ([9b8d351](https://github.com/nodecraft-js/yggdrasil-client/commit/9b8d351146386d3b04f3f45e87067b2109c0c972))
* **client:** added overloads for `YggdrasilClient.constructor` ([39eaff5](https://github.com/nodecraft-js/yggdrasil-client/commit/39eaff5e39f550c8c55f18ef3bc29a2b0f5e4213))
* **client:** added overloads for `YggdrasilClient#invalidate` ([65979d1](https://github.com/nodecraft-js/yggdrasil-client/commit/65979d1014bae89d33eab0a5431a952e8839292e))

## [0.1.0](https://github.com/nodecraft-js/yggdrasil-client/compare/v0.0.1...v0.1.0) (2020-01-03)


### ⚠ BREAKING CHANGES

* drop support for `YggdrasilClient#refresh` overloads
* drop support for `YggdrasilClient#authenticate` overloads

### Features

* added `YggdrasilClient.RefreshOptions` ([aa73fb4](https://github.com/nodecraft-js/yggdrasil-client/commit/aa73fb428dbb52da16241f0f30969da110c261f5))
* allow `YggdrasilClient.AuthenticateOptions#clientToken` to set to null ([e161c63](https://github.com/nodecraft-js/yggdrasil-client/commit/e161c639d00e75b082b3165adcc79d5253f9a67b))

## 0.0.1 (2020-01-03)


### Features

* added `generateRandomUuid` to generate UUID ([7853187](https://github.com/nodecraft-js/yggdrasil-client/commit/78531872498e3b9fe0a16999e6ea71075d8c8868))
* added `isAxiosError` to determine typing ([76b9735](https://github.com/nodecraft-js/yggdrasil-client/commit/76b973581064ded383c3c69332d1f958f72fa4b5))
* added `isYggdrasilErrorResponse` to determine ([7efd372](https://github.com/nodecraft-js/yggdrasil-client/commit/7efd372dedc3c25aa3a7e0b64e4564e06ef6982b))
* added `RawYggdrasilClient` class ([aec375e](https://github.com/nodecraft-js/yggdrasil-client/commit/aec375e1a8e36e51e7f10519a799b4f4e40bb80d))
* added `YggdrasilClient` class (WIP) ([d8ae962](https://github.com/nodecraft-js/yggdrasil-client/commit/d8ae962ee56e84e5feaddc1de863eeb1e3885f01))
* Added some `Error` classes ([f28d9ee](https://github.com/nodecraft-js/yggdrasil-client/commit/f28d9eefecb7502629cb52f133741b7841a80a54))
* added typings for various Yggdrasil ([8819c5c](https://github.com/nodecraft-js/yggdrasil-client/commit/8819c5c31b61b2a5357f5d582095ce320af1cdf8))
