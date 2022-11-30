import Button from './button.vue'
import type { Plugin } from 'vue'

export const WButton = (Button as Plugin).install = (app) => {
    app.component(Button.name, Button)
    return Button
}

export default WButton