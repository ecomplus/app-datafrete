# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [2.0.3](https://github.com/ecomplus/application-starter/compare/v2.0.2...v2.0.3) (2022-11-07)


### Bug Fixes

* add flag to fullfillment on webhook and debug post request ([f7f2570](https://github.com/ecomplus/application-starter/commit/f7f25702e13f5e7a0ef4de9c43711457479403c4))

### [2.0.2](https://github.com/ecomplus/application-starter/compare/v2.0.1...v2.0.2) (2022-11-03)


### Bug Fixes

* **deps:** update all non-major dependencies ([#54](https://github.com/ecomplus/application-starter/issues/54)) [skip ci] ([e4ae4b0](https://github.com/ecomplus/application-starter/commit/e4ae4b01a58eec591c541170c6d1766fd8b4c4a2))
* **webhook:** better debugging shipping line update request ([738d3ec](https://github.com/ecomplus/application-starter/commit/738d3ec08bfa807c6e9908e773981fbc6c6a96c5))
* **webhook:** better debugging shipping line update request ([b7ff5e4](https://github.com/ecomplus/application-starter/commit/b7ff5e4dc8589aee6ecc4bc246d73b97453aeba0))
* **webhook:** never skip when invoices or tracking codes set ([75ef460](https://github.com/ecomplus/application-starter/commit/75ef460d7ed5c6134c9649983775651ef5544e04))
* **webhook:** respond right afetr fulfillment (status) update ([97e0f57](https://github.com/ecomplus/application-starter/commit/97e0f579105573e5313585c26d40c90b30b856cb))
* **webhook:** return api error when shipping line update fails ([fc527dc](https://github.com/ecomplus/application-starter/commit/fc527dc75ad9503409832ee046198eea5f5ae6e7))

### [2.0.1](https://github.com/ecomplus/application-starter/compare/v2.0.0...v2.0.1) (2022-11-01)


### Bug Fixes

* add orders/fulfillments POST to authentication scope ([2e539a0](https://github.com/ecomplus/application-starter/commit/2e539a0133feb1ded16ddb1ca061f879d71a9464))
* better handling store api error on datafrete webhook ([e4ee5d2](https://github.com/ecomplus/application-starter/commit/e4ee5d26bb7bc3678f5ba8158c3c91bc5fc9cdbe))

## [2.0.0](https://github.com/ecomplus/application-starter/compare/v1.4.0...v2.0.0) (2022-10-07)

## [1.4.0](https://github.com/ecomplus/application-starter/compare/v1.3.0...v1.4.0) (2022-10-07)


### Features

* new /datafrete/webhook endpoint for fulfillment ([0bfd7ba](https://github.com/ecomplus/application-starter/commit/0bfd7ba8c28f79d0edd843b96b3ec851fe6ae5e1))


### Bug Fixes

* **deps:** update @ecomplus/application-sdk to v1.15.5 firestore ([286ea89](https://github.com/ecomplus/application-starter/commit/286ea894ceeeae50f45ad0bb68d3191e69d79df5))
* **deps:** update all non-major dependencies ([#46](https://github.com/ecomplus/application-starter/issues/46)) ([a83a7aa](https://github.com/ecomplus/application-starter/commit/a83a7aaa0be9652d0e91f40a5b80b9b9ff8e1cf5))
* **deps:** update dependency firebase-admin to v10 ([#50](https://github.com/ecomplus/application-starter/issues/50)) ([8a80b45](https://github.com/ecomplus/application-starter/commit/8a80b45648b60cd2598bbb2912a833d2b5a3946e))

## [1.3.0](https://github.com/ecomplus/application-starter/compare/v1.2.1...v1.3.0) (2021-07-27)


### Features

* **multi-cd:** handle multiple doc numbers for each branch by cd ([c61265a](https://github.com/ecomplus/application-starter/commit/c61265a6d831d9ef99bb540a188526bf9fd408d9))

### [1.2.1](https://github.com/ecomplus/application-starter/compare/v1.2.0...v1.2.1) (2021-07-26)


### Bug Fixes

* **ecom-config:** fix admin settings `warehouses` schema ([08bfc31](https://github.com/ecomplus/application-starter/commit/08bfc316a5f8c8d6f358ac64a0f9047d5ba150b2))

## [1.2.0](https://github.com/ecomplus/application-starter/compare/v1.1.0...v1.2.0) (2021-07-26)


### Features

* **multi-cd:** handle multiple (per CD) datafrete tokens ([a262ce1](https://github.com/ecomplus/application-starter/commit/a262ce1bf17037e59f43ec69e872c55074f7cb0e))


### Bug Fixes

* **calculate-shipping:** check available stock per warehouse ([de9de24](https://github.com/ecomplus/application-starter/commit/de9de24eeeb712ddd1566bb68dfafa2dc9e86e45))
* **deps:** update all non-major dependencies ([#33](https://github.com/ecomplus/application-starter/issues/33)) ([1570e89](https://github.com/ecomplus/application-starter/commit/1570e896924f3a53e4c3de42d846dc97230853e3))

## [1.1.0](https://github.com/ecomplus/application-starter/compare/v1.0.5...v1.1.0) (2021-05-29)


### Features

* **calculate-shipping:** handling warehouses for multi cd ([06e2697](https://github.com/ecomplus/application-starter/commit/06e2697196a5216a94cdfd378a4716a6b10dd463))

### [1.0.5](https://github.com/ecomplus/application-starter/compare/v1.0.4...v1.0.5) (2021-05-05)


### Bug Fixes

* **calculate-shipping:** prefer `nome_transportador` field for label ([0ef9ab1](https://github.com/ecomplus/application-starter/commit/0ef9ab127f2a649a9d2563890efe13f2051a2754))
* **deps:** update all non-major dependencies ([#13](https://github.com/ecomplus/application-starter/issues/13)) ([1e1b07f](https://github.com/ecomplus/application-starter/commit/1e1b07f8c24f409c727e766f91ce1834722cdcb6))

### [1.0.4](https://github.com/ecomplus/application-starter/compare/v1.0.3...v1.0.4) (2021-03-08)


### Bug Fixes

* **calculate-shipping:** better handling item prices (`final_price`) ([e5037af](https://github.com/ecomplus/application-starter/commit/e5037afa30871e49532ee293c9cc00071d3b36d1))

### [1.0.3](https://github.com/ecomplus/application-starter/compare/v1.0.2...v1.0.3) (2021-02-05)


### Bug Fixes

* **ecom-config:** unset app authentication (not needed) ([70ec88a](https://github.com/ecomplus/application-starter/commit/70ec88a1ff5d8dbe1c24a786ce83e80fc0024a4c))

### [1.0.2](https://github.com/ecomplus/application-starter/compare/v1.0.1...v1.0.2) (2020-11-05)


### Bug Fixes

* **deps:** update all non-major dependencies ([#7](https://github.com/ecomplus/application-starter/issues/7)) ([4f1f2c7](https://github.com/ecomplus/application-starter/commit/4f1f2c7136b45d83f31555dcef19b0fdbd142ff6))
* **refresh-tokens:** add scheduled cloud function to run update ([4ec97e3](https://github.com/ecomplus/application-starter/commit/4ec97e3d948a40d098ab015d54a9f1b31981c6ab))

### [1.0.1](https://github.com/ecomplus/application-starter/compare/v1.0.0...v1.0.1) (2020-09-02)


### Bug Fixes

* **calculate-shipping:** accepting 'valor_frete_exibicao' zero for free shipping ([52efb9f](https://github.com/ecomplus/application-starter/commit/52efb9f5d9716536ec80657d5e50cf7288342e76))
* **deps:** update all non-major dependencies ([#6](https://github.com/ecomplus/application-starter/issues/6)) ([a639ffe](https://github.com/ecomplus/application-starter/commit/a639ffeebd7902680341551623cc0a964b5a28c9))

## 1.0.0 (2020-08-17)


### Features

* **calculate-shipping:** simple calculate shipping handler with datafrete api ([e42f128](https://github.com/ecomplus/application-starter/commit/e42f1282ecc47bbcda65b5307f580020b32777bc))
* **ecom-config:** setup app admin settings fields ([70d525f](https://github.com/ecomplus/application-starter/commit/70d525fde1bfa3219ed52a5dbbff6b4077f26637))
* **ecom-config:** setup app config ([c9dfe16](https://github.com/ecomplus/application-starter/commit/c9dfe161346077cdd331aca614046ed7bfc88b09))


### Bug Fixes

* **calculate-shipping:** fix datafrete ws endpoint ([bbc7ba5](https://github.com/ecomplus/application-starter/commit/bbc7ba58915546a164451cd966f4faea47735487))
* **calculate-shipping:** send success response ([8fda086](https://github.com/ecomplus/application-starter/commit/8fda086d46ec87822607505a70663d212eb9e880))

## [1.0.0-starter.15](https://github.com/ecomplus/application-starter/compare/v1.0.0-starter.14...v1.0.0-starter.15) (2020-07-26)


### Bug Fixes

* **deps:** bump @ecomplus/application-sdk@firestore ([fe4fe46](https://github.com/ecomplus/application-starter/commit/fe4fe46c2c4e1dfd21790f8c03a84245cb8fc8f3))
* **deps:** update all non-major dependencies ([#36](https://github.com/ecomplus/application-starter/issues/36)) ([b14f2e9](https://github.com/ecomplus/application-starter/commit/b14f2e9cb56d5b18500b678b074dbdbe099b041a))
* **deps:** update dependency firebase-admin to v9 ([#37](https://github.com/ecomplus/application-starter/issues/37)) ([204df95](https://github.com/ecomplus/application-starter/commit/204df95c37d24c455951081f9186178222097778))

## [1.0.0-starter.14](https://github.com/ecomplus/application-starter/compare/v1.0.0-starter.13...v1.0.0-starter.14) (2020-06-30)


### Bug Fixes

* **auth-callback:** check `row.setted_up` in place of 'settep_up' ([e2a73ca](https://github.com/ecomplus/application-starter/commit/e2a73ca029868d9c899d4a1c0d982f1c1ed5829f))
* **deps:** update all non-major dependencies ([#31](https://github.com/ecomplus/application-starter/issues/31)) ([702bee9](https://github.com/ecomplus/application-starter/commit/702bee9a31370579dd7718b5722180e5bb8996e8))
* **deps:** update dependency firebase-functions to ^3.7.0 ([#30](https://github.com/ecomplus/application-starter/issues/30)) ([0f459a3](https://github.com/ecomplus/application-starter/commit/0f459a3ab9fe21f8dc9e9bdfce33c0b6d43e3622))
* **deps:** update dependency firebase-tools to ^8.4.2 ([#29](https://github.com/ecomplus/application-starter/issues/29)) ([cf7e61e](https://github.com/ecomplus/application-starter/commit/cf7e61ef50aa976f33725d855ba19d06a7522fd4))
* **pkg:** update deps, start using node 10 ([172ed7f](https://github.com/ecomplus/application-starter/commit/172ed7f223cd23b9874c5d6209928b7d620b0cf6))

## [1.0.0-starter.13](https://github.com/ecomplus/application-starter/compare/v1.0.0-starter.12...v1.0.0-starter.13) (2020-06-03)


### Bug Fixes

* **deps:** update @ecomplus/application-sdk to v1.13.0 ([b424410](https://github.com/ecomplus/application-starter/commit/b42441089e7020774c9586ed176e691ef4c755be))
* **refresh-tokens:** force appSdk update tokens task ([139a350](https://github.com/ecomplus/application-starter/commit/139a350c230fa36c37ab83e2debfe979d831cb08))

## [1.0.0-starter.12](https://github.com/ecomplus/application-starter/compare/v1.0.0-starter.11...v1.0.0-starter.12) (2020-05-29)


### Bug Fixes

* **deps:** replace @ecomplus/application-sdk to firestore version ([3d2ee85](https://github.com/ecomplus/application-starter/commit/3d2ee85feb2edab77950e5c266514152fbc9674d))
* **deps:** update all non-major dependencies ([#21](https://github.com/ecomplus/application-starter/issues/21)) ([7a370da](https://github.com/ecomplus/application-starter/commit/7a370da11dfd098c0a90da05d39fc62f9264fd63))
* **deps:** update all non-major dependencies ([#26](https://github.com/ecomplus/application-starter/issues/26)) ([e37e0e8](https://github.com/ecomplus/application-starter/commit/e37e0e8151768d79e81f4184ab937ddf9d775a4f))
* **deps:** update dependency uglify-js to ^3.9.2 ([#20](https://github.com/ecomplus/application-starter/issues/20)) ([adccf0a](https://github.com/ecomplus/application-starter/commit/adccf0a2fed37f2ccce57ded20d25af85407ac8a))

## [1.0.0-starter.11](https://github.com/ecomplus/application-starter/compare/v1.0.0-starter.10...v1.0.0-starter.11) (2020-04-27)


### Bug Fixes

* **deps:** update @ecomplus/application-sdk to v1.11.13 ([70584c2](https://github.com/ecomplus/application-starter/commit/70584c245e97a1b539a3df3f74109f20d9a1fa3c))
* **setup:** ensure enable token updates by default ([67aea0e](https://github.com/ecomplus/application-starter/commit/67aea0eb363be3cc535a0f0f4d1b5b682958f243))

## [1.0.0-starter.10](https://github.com/ecomplus/application-starter/compare/v1.0.0-starter.9...v1.0.0-starter.10) (2020-04-27)


### Bug Fixes

* **deps:** update @ecomplus/application-sdk to v1.11.11 ([b8217d0](https://github.com/ecomplus/application-starter/commit/b8217d03fe92b5c233615a0b6b4c01d7bad676c2))
* **deps:** update all non-major dependencies ([#19](https://github.com/ecomplus/application-starter/issues/19)) ([a99797a](https://github.com/ecomplus/application-starter/commit/a99797a129d6e2383ef5ef69c06afacd13cccfb0))
* **setup:** do not disable updates on refresh-tokens route ([b983a45](https://github.com/ecomplus/application-starter/commit/b983a45ada5575ee6435f7b3016ef35c28355762))

## [1.0.0-starter.9](https://github.com/ecomplus/application-starter/compare/v1.0.0-starter.8...v1.0.0-starter.9) (2020-04-21)


### Bug Fixes

* **deps:** update @ecomplus/application-sdk to v1.11.10 ([8da579c](https://github.com/ecomplus/application-starter/commit/8da579c19c6530e8cc9fd338a07aece1fccc64ff))

## [1.0.0-starter.8](https://github.com/ecomplus/application-starter/compare/v1.0.0-starter.7...v1.0.0-starter.8) (2020-04-18)


### Bug Fixes

* **deps:** update all non-major dependencies ([#17](https://github.com/ecomplus/application-starter/issues/17)) ([785064e](https://github.com/ecomplus/application-starter/commit/785064ef5bf06db7c084f9b17b37a6077645735b))

## [1.0.0-starter.7](https://github.com/ecomplus/application-starter/compare/v1.0.0-starter.6...v1.0.0-starter.7) (2020-04-07)

## [1.0.0-starter.6](https://github.com/ecomplus/application-starter/compare/v1.0.0-starter.5...v1.0.0-starter.6) (2020-04-06)


### Bug Fixes

* **deps:** update all non-major dependencies ([#10](https://github.com/ecomplus/application-starter/issues/10)) ([b3c65e5](https://github.com/ecomplus/application-starter/commit/b3c65e5c7eb89a4825eb47c852ce65293d172314))
* **deps:** update all non-major dependencies ([#13](https://github.com/ecomplus/application-starter/issues/13)) ([33ff19b](https://github.com/ecomplus/application-starter/commit/33ff19bbdad1f34b6d1c255089dc0a0e4092b955))
* **deps:** update all non-major dependencies ([#8](https://github.com/ecomplus/application-starter/issues/8)) ([feba5b9](https://github.com/ecomplus/application-starter/commit/feba5b9cdc54e8304beff2b12658a6343ef37569))
* **deps:** update dependency firebase-functions to ^3.6.0 ([#15](https://github.com/ecomplus/application-starter/issues/15)) ([5f7f0a2](https://github.com/ecomplus/application-starter/commit/5f7f0a2bf5c744000996e2a0b78690b363462ee7))
* **deps:** update dependency firebase-tools to ^7.16.1 ([#14](https://github.com/ecomplus/application-starter/issues/14)) ([b8e4798](https://github.com/ecomplus/application-starter/commit/b8e479851bd02bf5929a7df8a71a761f1c1c1654))
* **deps:** update dependency firebase-tools to v8 ([#16](https://github.com/ecomplus/application-starter/issues/16)) ([b72560e](https://github.com/ecomplus/application-starter/commit/b72560e4fc86496499d553e47094ace25436272b))
* **ecom-modules:** fix parsing mod names to filenames and vice versa ([99c185a](https://github.com/ecomplus/application-starter/commit/99c185afebeae77deb61537ed9de1c77132c16ce))

## [1.0.0-starter.5](https://github.com/ecomplus/application-starter/compare/v1.0.0-starter.4...v1.0.0-starter.5) (2020-03-05)


### Features

* **market-publication:** handle full featured app publication to Market ([28379dc](https://github.com/ecomplus/application-starter/commit/28379dc3c4784e757c8f25e5d737f6143682b0db))
* **static:** handle static with server app files from public folder ([827d000](https://github.com/ecomplus/application-starter/commit/827d00079b0dc169b2eef31b8e0ac73c596307a8))

## [1.0.0-starter.4](https://github.com/ecomplus/application-starter/compare/v1.0.0-starter.3...v1.0.0-starter.4) (2020-02-21)


### Features

* **calculate-shipping:** basic setup for calculate shipping module ([db77595](https://github.com/ecomplus/application-starter/commit/db7759514bb25d151dd4508fb96b84c52b3e94ba))


### Bug Fixes

* **home:** fix replace accets regex exps to generate slug from title ([198cc0b](https://github.com/ecomplus/application-starter/commit/198cc0b911d4874d96f3cd5254d30cab5fe89765))
* **home:** gen slug from pkg name or app title if not set or default ([25c20bf](https://github.com/ecomplus/application-starter/commit/25c20bfade65a86e4f4b1026ef59a5694a022a74))

## [1.0.0-starter.3](https://github.com/ecomplus/application-starter/compare/v1.0.0-starter.2...v1.0.0-starter.3) (2020-02-21)

## [1.0.0-starter.2](https://github.com/ecomplus/application-starter/compare/v1.0.0-starter.1...v1.0.0-starter.2) (2020-02-21)


### Bug Fixes

* **config:** stop reading app from functions config ([7b9aab7](https://github.com/ecomplus/application-starter/commit/7b9aab727fefe8a5b84695e90a0d68e02b8c3f62))

## [1.0.0-starter.1](https://github.com/ecomplus/application-starter/compare/v1.0.0-starter.0...v1.0.0-starter.1) (2020-02-20)


### Features

* **get-auth:** endpoint to return auth id and token for external usage ([40a8ae2](https://github.com/ecomplus/application-starter/commit/40a8ae2e895d6e32c7032ca500040ec82c80dc5d))
* **server:** also supporting passing Store Id from query ([111f3a7](https://github.com/ecomplus/application-starter/commit/111f3a716fbfd2e155e3fb24242bddcae7cb065c))


### Bug Fixes

* **server:** remove 'routes' path when setting filename for routes ([119524c](https://github.com/ecomplus/application-starter/commit/119524c523a11364ed912769637a6f8e479af5f1))

## [1.0.0-starter.0](https://github.com/ecomplus/application-starter/compare/v0.1.1...v1.0.0-starter.0) (2020-02-18)


### Features

* **router:** recursive read routes dir to auto setup server routes ([ff2b456](https://github.com/ecomplus/application-starter/commit/ff2b45604723a8146c9481ea36a9400da5ccc2bc))


### Bug Fixes

* **home:** fix semver on for app.version (remove version tag if any) ([ad36461](https://github.com/ecomplus/application-starter/commit/ad364614a7f5599850ad39e00a94d310742e8f80))
* **middlewares:** update route files exports (named exports by methods) ([6a22e67](https://github.com/ecomplus/application-starter/commit/6a22e67135bc6110e6da6b4ab25f67ad8d77f597))

### [0.1.1](https://github.com/ecomplus/application-starter/compare/v0.1.0...v0.1.1) (2020-02-18)


### Features

* **env:** get 'pkg' from functions config ([bf45ec3](https://github.com/ecomplus/application-starter/commit/bf45ec33a2147d5be91fdc4955bd6cfa1b0867e2))
* **home:** set version and slug from root package, fix with uris ([d4b61fa](https://github.com/ecomplus/application-starter/commit/d4b61fab427aefdb2ac485d90eb1abe15d6aafc6))


### Bug Fixes

* **env:** firebase doesnt uppercase config ([502185e](https://github.com/ecomplus/application-starter/commit/502185ed30f346d8db77b849d6ba0eb48cb777cb))
* **require:** update @ecomplus/application-sdk dependency name ([d4174ac](https://github.com/ecomplus/application-starter/commit/d4174ac5425b85590db0e92d4b1d69a8567a6c55))

## [0.1.0](https://github.com/ecomplus/application-starter/compare/v0.0.4...v0.1.0) (2020-02-17)

### [0.0.4](https://github.com/ecomclub/firebase-app-boilerplate/compare/v0.0.3...v0.0.4) (2020-02-16)


### Bug Fixes

* **server:** update routes names (refresh-tokens) ([79a2910](https://github.com/ecomclub/firebase-app-boilerplate/commit/79a2910817cf4193b40e02b2b1e6b920e7fefb2d))

### [0.0.3](https://github.com/ecomclub/express-app-boilerplate/compare/v0.0.2...v0.0.3) (2020-02-15)


### Features

* **server:** start reading env options, handle operator token ([ce107b7](https://github.com/ecomclub/express-app-boilerplate/commit/ce107b74cde375e875a85cc3ba0cc6a73740785d))
* **update-tokens:** adding route to start update tokens service (no content) ([20c62ec](https://github.com/ecomclub/express-app-boilerplate/commit/20c62ec6800fc326b89e8cf54b2916f56e5910e4))


### Bug Fixes

* **auth-callback:** fix handling docRef (desn't need to get by id again) ([629ca5a](https://github.com/ecomclub/express-app-boilerplate/commit/629ca5ab9849e3822cc190f423da5bf2e0c4daab))
* **auth-callback:** save procedures if not new, check and set 'settep_up' ([#3](https://github.com/ecomclub/express-app-boilerplate/issues/3)) ([4a01f86](https://github.com/ecomclub/express-app-boilerplate/commit/4a01f86c37e09cd7c0363f6fbc80de6eeef3ba20))
* **ECOM_AUTH_UPDATE_INTERVAL:** disable set interval (no daemons on cloud functions) ([2aa2442](https://github.com/ecomclub/express-app-boilerplate/commit/2aa2442061f0308be9eb9430552fa04ad148788c))
* **env:** fixed to get appInfor variable ([e9b1a3c](https://github.com/ecomclub/express-app-boilerplate/commit/e9b1a3ce0d17ee74a5eada70589340fd5a70e786))
* **env:** fixed to get appInfor variable ([22687e2](https://github.com/ecomclub/express-app-boilerplate/commit/22687e25f611d49f8c01494af114e0289cec251e))
* **middleware:** check standard http headers for client ip ([5045113](https://github.com/ecomclub/express-app-boilerplate/commit/504511329afe9277d540f0f542a316d04634ce9e))

### 0.0.2 (2020-02-11)


### Bug Fixes

* **lib:** remove unecessary/incorrect requires with new deps ([69f2b77](https://github.com/ecomclub/express-app-boilerplate/commit/69f2b77))
* **routes:** fix handling appSdk (param) ([0cf2dde](https://github.com/ecomclub/express-app-boilerplate/commit/0cf2dde))
* **setup:** added initializeApp() to firebase admin ([e941e59](https://github.com/ecomclub/express-app-boilerplate/commit/e941e59))
* **setup:** manually setup ecomplus-app-sdk with firestore ([64e49f8](https://github.com/ecomclub/express-app-boilerplate/commit/64e49f8))
* **setup:** manually setup ecomplus-app-sdk with firestore ([c718bd0](https://github.com/ecomclub/express-app-boilerplate/commit/c718bd0))
* **setup:** manually setup ecomplus-app-sdk with firestore ([33909bf](https://github.com/ecomclub/express-app-boilerplate/commit/33909bf)), closes [/github.com/ecomclub/ecomplus-app-sdk/blob/master/main.js#L45](https://github.com/ecomclub//github.com/ecomclub/ecomplus-app-sdk/blob/master/main.js/issues/L45)
* **startup:** setup routes after appSdk ready, add home route ([d182555](https://github.com/ecomclub/express-app-boilerplate/commit/d182555))


### Features

* **firestore-app-boilerplate:** Initial commit ([c9963f0](https://github.com/ecomclub/express-app-boilerplate/commit/c9963f0))
* **firestore-app-boilerplate:** Initial commit ([be493ea](https://github.com/ecomclub/express-app-boilerplate/commit/be493ea))
* **firestore-support:** minor changes ([3718cba](https://github.com/ecomclub/express-app-boilerplate/commit/3718cba))
* **firestore-support:** refactoring to  use saveProcedures function ([62971ef](https://github.com/ecomclub/express-app-boilerplate/commit/62971ef))
* **firestore-support:** removed sqlite error clausule ([2d47996](https://github.com/ecomclub/express-app-boilerplate/commit/2d47996))
* **routes:** add home route (app json) ([42a3f2b](https://github.com/ecomclub/express-app-boilerplate/commit/42a3f2b))

# [LEGACY] Express App Boilerplate

### [0.1.1](https://github.com/ecomclub/express-app-boilerplate/compare/v0.1.0...v0.1.1) (2019-07-31)


### Bug Fixes

* **procedures:** fix checking for procedures array to run configureSetup ([1371cdc](https://github.com/ecomclub/express-app-boilerplate/commit/1371cdc))

## [0.1.0](https://github.com/ecomclub/express-app-boilerplate/compare/v0.0.2...v0.1.0) (2019-07-31)

### 0.0.2 (2019-07-31)


### Bug Fixes

* chain promise catch on lib getConfig ([281abf9](https://github.com/ecomclub/express-app-boilerplate/commit/281abf9))
* fix mergin hidden data to config ([8b64d58](https://github.com/ecomclub/express-app-boilerplate/commit/8b64d58))
* fix path to require 'get-config' from lib ([11425b0](https://github.com/ecomclub/express-app-boilerplate/commit/11425b0))
* get storeId from header and set on req object ([a3bebaa](https://github.com/ecomclub/express-app-boilerplate/commit/a3bebaa))
* handle error on get config instead of directly debug ([f182589](https://github.com/ecomclub/express-app-boilerplate/commit/f182589))
* routes common fixes ([2758a57](https://github.com/ecomclub/express-app-boilerplate/commit/2758a57))
* using req.url (from http module) instead of req.baseUrl ([d9057ca](https://github.com/ecomclub/express-app-boilerplate/commit/d9057ca))


### Features

* authentication callback ([8f18892](https://github.com/ecomclub/express-app-boilerplate/commit/8f18892))
* conventional store api error handling ([bcde87e](https://github.com/ecomclub/express-app-boilerplate/commit/bcde87e))
* function to get app config from data and hidden data ([ba470f5](https://github.com/ecomclub/express-app-boilerplate/commit/ba470f5))
* getting store id from web.js ([72f18c6](https://github.com/ecomclub/express-app-boilerplate/commit/72f18c6))
* handling E-Com Plus webhooks ([63ba19f](https://github.com/ecomclub/express-app-boilerplate/commit/63ba19f))
* main js file including bin web and local ([6b8a71a](https://github.com/ecomclub/express-app-boilerplate/commit/6b8a71a))
* pre-validate body for ecom modules endpoints ([f06bdb0](https://github.com/ecomclub/express-app-boilerplate/commit/f06bdb0))
* setup app package dependencies and main.js ([b2826ed](https://github.com/ecomclub/express-app-boilerplate/commit/b2826ed))
* setup base app.json ([015599a](https://github.com/ecomclub/express-app-boilerplate/commit/015599a))
* setup daemon processes, configure store setup ([db3ca8c](https://github.com/ecomclub/express-app-boilerplate/commit/db3ca8c))
* setup procedures object ([c5e8627](https://github.com/ecomclub/express-app-boilerplate/commit/c5e8627))
* setup web app with express ([d128430](https://github.com/ecomclub/express-app-boilerplate/commit/d128430))
