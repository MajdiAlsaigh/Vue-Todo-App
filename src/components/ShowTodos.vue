<script setup>
import { useTodos } from "../Composables/useTodos";
import { useFlashAlert } from "../Composables/useFlashAlert";

const { todosList, addToLocalSt } = useTodos();
const { FlashAlert } = useFlashAlert();
// Methods
// Delete Todo
const deleteTodo = (index) => {
  todosList.value.splice(index, 1);
  addToLocalSt();
  // sweet alert
  FlashAlert("Deleted!", "Todo has been deleted successfully");
};

// Mark as completed
const markCompleted = (todo) => {
  todo.isCompleted = !todo.isCompleted;
  addToLocalSt();
};
</script>

<template>
  <section>
    <div class="show-todos">
      <h1>Todos Table</h1>
      <table v-if="todosList.length">
        <thead>
          <tr>
            <th>Title</th>
            <th>From-deat</th>
            <th>To-deat</th>
            <th>Created-deat</th>
            <th style="border: 0; width: 7rem">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(todo, index) in todosList"
            :key="todo.id"
            :style="[
              todo.isCompleted
                ? { 'background-color': 'rgba(32, 178, 170,0.4)' }
                : { 'background-color': 'transparent' },
            ]"
          >
            <td style="text-align: left; padding-left: 1rem">
              {{ todo.text }}
            </td>
            <td>{{ todo.from }}</td>
            <td>{{ todo.to }}</td>
            <td>{{ new Date(todo.createdAt).toLocaleDateString() }}</td>
            <td style="border: 0; background-color: black">
              <div>
                <button class="completed" @click="markCompleted(todo)">
                  {{ todo.isCompleted ? "&#x2611;" : "&#x2610;" }}
                </button>
                <button class="deleted" @click="deleteTodo(index)">
                  &#128473;
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <h4 v-else>No todos to show in table</h4>
    </div>
  </section>
</template>

<style lang="scss" scoped>
table {
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  background-color: #1a1a1a;
  th,
  td {
    padding: 0 0.5rem;
    border: 1px solid hwb(177 13% 30%);
  }

  th {
    padding: 0.5rem 0;
    background-color: black;
  }

  button {
    border-radius: 0;
    border: 0;
    margin: 0 0.25rem;
    padding: 0 0.3rem;
    font-size: 0.75em;
    font-weight: bold;
    background-color: black;

    &:hover {
      background-color: #1b1b1b;
    }

    &.completed {
      background-color: rgb(27, 234, 223);
      &:hover {
        background-color: rgb(20, 139, 133);
      }
    }
    &.deleted {
      background-color: indianred;
      &:hover {
        background-color: red;
      }
    }

    &:focus,
    &:focus-visible {
      outline: 0.5px auto -webkit-focus-ring-color;
    }
  }
}
</style>
