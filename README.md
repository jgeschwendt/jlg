# typescript

The `@jlg` shared toolchain configs, published to npm from one Bun workspace. No
app code — the packages ARE the product.

| package                                            | what                                                                      |
| -------------------------------------------------- | ------------------------------------------------------------------------- |
| [`@jlg/oxlint`](packages/oxlint/README.md)         | shareable oxlint base ruleset — every category on, then curated overrides |
| [`@jlg/oxfmt`](packages/oxfmt/README.md)           | canonical oxfmt settings — the formatter companion to `@jlg/oxlint`       |
| [`@jlg/tsconfig`](packages/tsconfig/tsconfig.json) | the shared `tsconfig.json`, consumed by `extends`                         |

## Consuming

Each package README carries its own install and composition paths — the JS entry
(`defineConfig`), the raw-JSONC `extends`, and the peer ranges each one declares.

## Releasing

[Changesets](https://changesets.dev) drives it end to end:

1. Every change that touches a package ships with a changeset — `bun run changeset`.
2. A push to `main` with pending changesets opens (or refreshes) the **Version
   Packages** PR. Patch-only, it auto-merges the moment `check` goes green;
   minor or major, it waits for the owner's merge.
3. Merging it publishes from `.github/workflows/release.yaml` over npm trusted
   publishing — no npm token anywhere, provenance attached automatically.

**Root package name.** The workspace root is `typescript-monorepo`, never
`typescript`: Changesets treats a workspace whose name matches a dependency
(`@jlg/tsconfig` peers on `typescript`) as the package satisfying it, reads the
root's missing version, and every `changeset` command dies with an opaque
`ERR_INVALID_ARG_TYPE`. `private: true` alone does not prevent it. (observed
2026-09-08 · @changesets/cli 3.0.2)

**Minimum bump.** Pre-1.0 the smallest honest bump wins: a breaking change is a
`minor` changeset, everything else is `patch`. `major` is forbidden until a
deliberate 1.0, and the `check` job fails on one. Patch should almost always be
the answer.

**Who releases what.** A patch-only Version Packages PR auto-merges and ships
itself. One carrying a `minor` (or, after 1.0, a `major`) is not auto-merged:
`release.yaml` requests the owner's review instead, and the hand merge is the
approval.

### Bootstrap

All of this happens **before** the first PR merges to `main`: with no pending
changesets, `release.yaml` decides the 0.1.0 packages are unpublished and tries
to ship them over OIDC, which fails until the names exist on npm and their
trusted publishers point here.

- [ ] A GitHub App with **contents: write** and **pull-requests: write** on this
      repo; its client id in the repo variable `APP_CLIENT_ID` and its
      private key in the repo secret `APP_PRIVATE_KEY`. The Version
      Packages PR must come from this app: nothing `GITHUB_TOKEN` creates raises
      a workflow event, so a PR it opened never runs `check` and can never merge.
- [ ] Repo setting **Allow GitHub Actions to create and approve pull requests**
      turned on.
- [ ] A first publish of each package by hand from a logged-in shell — trusted
      publishing cannot create a package, only add versions to one:
      `cd packages/<name> && npm publish --access public`.
- [ ] On npmjs.com, a trusted publisher on each of the three packages: GitHub
      Actions, user `jgeschwendt`, repo `typescript`, workflow filename
      `release.yaml`, no environment, **allow `npm publish`** ticked (publishers
      created after 2026-09-03 default to stage-only).
- [ ] After that every merge to `main` carrying a changeset releases itself.
