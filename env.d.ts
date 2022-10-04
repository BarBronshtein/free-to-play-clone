/// <reference types="vite/client" />
// vuex.d.ts
import { Store } from 'vuex';
import { ComponentCustomProperties } from 'vue';
declare module '@vue/runtime-core' {
	// declare your own store states
	// provide typings for `this.$store`
	interface ComponentCustomProperties {
		$store: Store;
	}
}
