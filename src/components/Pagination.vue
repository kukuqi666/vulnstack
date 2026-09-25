<template>
  <div class="pagination-wrap">
    <ul class="pagination">
      <li>
        <a
          v-if="currentPage > 1"
          href="javascript:void(0)"
          @click="goPage(currentPage - 1)"
        >&laquo;</a>
        <a v-else href="javascript:void(0)">&laquo;</a>
      </li>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <li>共&nbsp;{{ totalPages }}&nbsp;页</li>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <li>当前第&nbsp;{{ currentPage }}&nbsp;页</li>
      &nbsp;&nbsp;&nbsp;
      <li>
        <a
          v-if="currentPage < totalPages"
          href="javascript:void(0)"
          @click="goPage(currentPage + 1)"
        >&raquo;</a>
        <a v-else href="javascript:void(0)">&raquo;</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  currentPage: { type: Number, default: 1 },
  totalPages: { type: Number, default: 1 }
})

const emit = defineEmits(['page-change'])

function goPage(page) {
  if (page < 1 || page > props.totalPages) return
  emit('page-change', page)
}
</script>
