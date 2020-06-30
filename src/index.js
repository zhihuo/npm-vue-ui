import HelloWorld from './packages/hello-world/index.js';
import MoorButton from './packages/button/index.js';
import MoorSelect from './packages/select/index.js';
import MoorSwitch from './packages/switch/index.js';

const components = [
  HelloWorld,
  MoorButton,
  MoorSelect,
  MoorSwitch
]

const install = function(Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  })
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  HelloWorld,
  MoorButton,
  MoorSelect,
  MoorSwitch
}