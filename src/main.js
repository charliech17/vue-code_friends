import { createApp } from 'vue';
import App from './App.vue';
import BaseSection from './components/UI/BaseSection.vue';
import BaseButton from './components/UI/BaseButton.vue';
import BaseDialog from './components/UI/BaseDialog.vue';

const app = createApp(App);

app.component('base-section',BaseSection);
app.component('base-button',BaseButton);
app.component('base-dialog',BaseDialog);

app.mount('#app')
