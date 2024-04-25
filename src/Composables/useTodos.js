import { ref, onMounted } from "vue";

export function useTodos() {
  // Data
  const todosList = ref([]);

  // Methods
  // Set to local storage
  function addToLocalSt() {
    return localStorage.setItem("todos", JSON.stringify(todosList.value));
  }

  // Update todos list in local storage
  function updateTodos() {
    if (localStorage.getItem("todos")) {
      return (todosList.value = JSON.parse(localStorage.getItem("todos")));
    }
  }

  // Hooks
  onMounted(() => {
    updateTodos();
  });

  return { todosList, addToLocalSt };
}
