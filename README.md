# eslint-config-shanbay

Improving [eslint-config-airbnb](https://npmjs.com/eslint-config-airbnb).

## Install

**Note:** Please install it globally!

If you have global installed `eslint-config-airbnb` and `eslint`, you can skip step 1 and step 2.

**Step 1.** Install `eslint`:

```sh
npm i -g eslint
```

**Step 2.** Install `eslint-config-airbnb` in Linux/OSX:

```sh
(
  export PKG=eslint-config-airbnb;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install -g "$PKG@latest"
)
```

**Step 3.** Install `eslint-config-shanbay`

```sh
npm i -g eslint-config-shanbay
```

## Usage

In `.eslintrc.json` or `.eslintrc`:

```json
{
    "extends": ["airbnb", "shanbay"]
}
```

or

```json
{
    "extends": ["airbnb-base", "shanbay/base"]
}
```

