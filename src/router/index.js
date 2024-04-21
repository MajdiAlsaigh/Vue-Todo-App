import { createRouter, createWebHistory } from "vue-router";
import HomeTodo from "../components/HomeTodo.vue";

const routes = [
  {
    name: "HomeTodo",
    path: "/",
    component: HomeTodo,
    meta: { title: "Home Todo" },
  },
  {
    name: "ShowTodos",
    path: "/show-todos",
    component: () => import("../components/ShowTodos.vue"),
    meta: { title: "Show Todos" },

  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
