import { release } from '@vitejs/release-scripts'
import { logRecentCommits } from './releaseUtils'

release({
  repo: 'vite',
  packages: ['vite', 'create-vite', 'plugin-legacy'],
  toTag: (pkg, version) =>
    pkg === 'vite' ? `v${version}` : `${pkg}@${version}`,
  logChangelog: (pkg) => logRecentCommits(pkg),
  generateChangelog: async (pkgName) => {
  },
})
