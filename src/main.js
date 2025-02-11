import { createApp } from 'vue'
import App from '@/App.vue'
import components from '@/components/UI'
import directives from '@/directives'
import store from '@/store'
import '@/assets/styles/reset.css'

const app = createApp(App)

components.forEach((component) => app.component(component.name, component))
directives.forEach((directive) => app.directive(directive.name, directive))

app.use(store).mount('#app')
