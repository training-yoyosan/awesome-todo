<template>
  <li>
    <div>
      {{ task.name }} {{ index }}
      <button @click="deleteTask(index)">X</button>
    </div>

    <small>{{ task.dueDate }} @ {{ task.dueTime }}</small>
  </li>
</template>

<script>
export default {
  props: ['task', 'index']
}
</script>

<style>

</style>
