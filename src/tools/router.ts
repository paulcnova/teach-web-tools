
import HomeView from "@/components/home/HomeView.vue";
import WordSearchView from "@/components/word-search/WordSearchView.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
	{ path: "/", component: HomeView },
	{ path: "/word-search", component: WordSearchView },
];
const router = createRouter({
	routes: routes,
	history: createWebHistory(),
});

export default router;
