import { release } from '@vitejs/release-scripts'
import { logRecentCommits } from './releaseUtils'

release({
  repo: 'aurora-test2',
  packages: ['aurora-test2'],
  toTag: (pkg, version) => `v${version}`,
  getPkgDir: (pkg) => ".",
  logChangelog: (pkg) => logRecentCommits(pkg),
  generateChangelog: async (pkgName) => {
  },
})
