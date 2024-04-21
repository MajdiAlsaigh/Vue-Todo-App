<template>
  <section>
    <h1>Add New Todo</h1>
    <p>Create your to-do list below</p>
    <form action="" @submit.prevent="addTodo">
      <input
        v-model="todoObject.text"
        type="text"
        placeholder="Add New Todo.."
        required
      />
      <div class="">
        <input
          v-model="todoObject.from"
          type="date"
          placeholder="From"
          required
        />
        <input v-model="todoObject.to" type="date" placeholder="To" required />
      </div>
      <button type="submit">Add</button>
    </form>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

// Data
const todoList = ref([]);

const todoObject = ref({
  id: "",
  text: "",
  from: "",
  to: "",
  createdAt: "",
  isCompleted: false,
});

// methods

// Add todo
const addTodo = () => {
  todoObject.value.id = todoList.value.length + 1;
  todoObject.value.createdAt = new Date();
  todoList.value.push(todoObject.value);
  addToLocalSt();
  alert("Todo was added successfully");
  todoObject.value = {
    id: "",
    text: "",
    from: "",
    to: "",
    createdAt: "",
    isCompleted: false,
  };
  console.log(todoList.value);
};

// Set to local storage
const addToLocalSt = () => {
  localStorage.setItem("todos", JSON.stringify(todoList.value));
};

// Update todos list in local storage
const updateTodos = () => {
  if (localStorage.getItem("todos")) {
    todoList.value = JSON.parse(localStorage.getItem("todos"));
  }
};

// Hooks
onMounted(() => {
  updateTodos();
});
</script>

<style lang="scss" scoped>
form {
  display: grid;
  justify-content: center;
  align-content: center;
  gap: 1rem;
  width: 16rem;
  margin: 0 auto;
  padding: 2rem;
  background-color: #1a1a1a;

  div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
  }

  input[type="text"] {
    border-radius: 8px;
    border: 2px solid lightseagreen;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
  }

  input[type="date"] {
    border-radius: 8px;
    border: 2px solid lightseagreen;
    padding: 0.5em 0.5em;
    font-size: 0.85em;
    font-weight: 350;
    font-family: inherit;
    background-color: #1a1a1a;
  }

  button {
    margin-top: 2rem;
    border: 2px solid lightseagreen;
  }
}
</style>
