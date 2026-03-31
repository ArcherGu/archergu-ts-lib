import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs'],
  dts: true,
  clean: true,
  fixedExtension: false,
  outExtensions: () => ({
    js: '.js',
    dts: '.d.ts',
  }),
})
