module.exports = {
  'testEnvironment': 'jsdom',
  'setupFilesAfterEnv': ['<rootDir>/jest-setup.ts'],
  'collectCoverageFrom': ['src/**/*.{ts,tsx,js,jsx}', '!src/**/*.d.rs', '!src/*.d.rs', '!src/constant/**'],
  'moduleNameMapper': {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/mocks/fileMock.js',
    '\\.(css|less)$': 'identity-obj-proxy',
    '@/(.*)': '<rootDir>/src/$1',
  },
  'moduleDirectories': ['node_modules', __dirname],
}
