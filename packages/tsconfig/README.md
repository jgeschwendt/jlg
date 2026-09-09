# @jlg/tsconfig

The shared `tsconfig.json` for the `@jlg` stack, consumed by `extends`. Strict
everything, `ES2024` lib, `node16` module resolution, `noEmit`-friendly, no
framework assumptions — a Next.js consumer overrides `jsx`, `module`,
`moduleResolution`, `paths` and `plugins` on top.

```json
{
  "extends": "@jlg/tsconfig",
  "compilerOptions": {
    "noEmit": true
  },
  "include": ["**/*.ts"]
}
```

Peer: `typescript ^7.0.0`.
