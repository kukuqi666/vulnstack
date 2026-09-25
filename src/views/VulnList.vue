<template>
  <div>
    <VulnCard
      v-for="vuln in displayedVulns"
      :key="vuln.id"
      :vuln="vuln"
    />

    <Pagination
      :current-page="currentPage"
      :total-pages="totalPages"
      @page-change="changePage"
    />
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import VulnCard from '../components/VulnCard.vue'
import Pagination from '../components/Pagination.vue'
import { vulns, totalPages, getVulnsByPage } from '../data/vulns'

const route = useRoute()
const router = useRouter()

const currentPage = ref(Number(route.params.page) || 1)

const displayedVulns = computed(() => {
  // 如果有搜索关键字，显示搜索结果
  const key = route.query.key
  if (key) {
    return vulns.filter(v =>
      v.title.toLowerCase().includes(key.toLowerCase())
    )
  }
  return getVulnsByPage(currentPage.value)
})

watch(() => route.params.page, (newPage) => {
  currentPage.value = Number(newPage) || 1
})

watch(() => route.query.key, () => {
  // 搜索时重置到第一页
  currentPage.value = 1
})

function changePage(page) {
  router.push(`/vuln/page/${page}`)
}
</script>
