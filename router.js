import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [
  { path: "/", component: Home },
  { path: "/music", component: Music },
  { path: "/linux", component: Linux },
  { path: "/webdev", component: WebDev },
  { path: "/artint", component: ArtInt },
  { path: "/spotify", component: Spotify },
  { path: "/apps", component: Apps },
];

export function createRouter() {
  return new Router({
    mode: "history",
    routes,
  });
}
