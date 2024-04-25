import { createRouter, createWebHistory } from "vue-router";
import HomeTodo from "../components/HomeTodo.vue";

const routes = [
  {
    name: "HomeTodo",
    path: "/",
    component: HomeTodo,
    meta: { title: "Home" },
  },
  {
    name: "ShowTodos",
    path: "/show-todos",
    component: () => import("../components/ShowTodos.vue"),
    meta: { title: "Todos" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;

