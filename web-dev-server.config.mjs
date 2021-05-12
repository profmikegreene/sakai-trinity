// import { storybookPlugin } from '@web/dev-server-storybook';

export default {
  open: true,
  nodeResolve: false,
  watch: true,
  appIndex: '/app/index.html',
  // plugins: [storybookPlugin({ type: "web-components" })]
  // in a monorepo you need to set set the root dir to resolve modules
  // rootDir: 'app',
};