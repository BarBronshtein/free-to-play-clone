import { createApp } from 'vue';
import { createStore } from 'vuex';
import gameModule from './modules/game.module';
// Create a new store instance.
const store = createStore({
	modules: gameModule,
});
