<template>
  <div>
    <!-- 搜索框 -->
    <div class="wiki-search">
      <div class="col">
        <input
          type="text"
          class="form-control"
          v-model="searchTitle"
          placeholder="请输入搜索文章标题"
          style="width: 400px;"
        />
      </div>
      <div class="col">
        <button class="btn btn-primary" style="width: 80px;" @click="onSearch">搜索</button>
      </div>
    </div>
    <br /><br />

    <!-- 文章表格 -->
    <div class="wiki-table">
      <table class="table table-hover">
        <thead style="font-size: 20px; color: white;">
          <tr>
            <th style="width: 15%;">添加时间</th>
            <th style="width: 35%;">标题</th>
            <th style="width: 10%;">作者</th>
            <th style="width: 10%;">点击量</th>
            <th style="width: 30%;">标签</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="article in displayedArticles"
            :key="article.id"
            style="font-size: 18px; color: white;"
          >
            <td>{{ article.date }}</td>
            <td>
              <a
                href="javascript:void(0)"
                style="text-decoration: none; color: white;"
                @click="viewArticle(article)"
              >
                <span style="cursor: pointer;">&nbsp;&nbsp; {{ article.title }}</span>
              </a>
            </td>
            <td>{{ article.author }}</td>
            <td>{{ article.views }}</td>
            <td>
              <button
                v-for="(tag, i) in article.tags"
                :key="i"
                type="button"
                class="btn btn-primary"
                style="margin-right: 5px;"
              >
                {{ tag }}
              </button>
            </td>
          </tr>
          <tr v-if="displayedArticles.length === 0">
            <td colspan="5" style="text-align: center; color: #999;">暂无数据</td>
          </tr>
        </tbody>
      </table>
    </div>

    <Pagination
      :current-page="currentPage"
      :total-pages="wikiTotalPages"
      @page-change="changePage"
    />
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Pagination from '../components/Pagination.vue'
import { wikiArticles, wikiTotalPages, getWikiByPage } from '../data/wiki'

const route = useRoute()
const router = useRouter()
const searchTitle = ref('')
const isSearching = ref(false)

const currentPage = ref(Number(route.params.page) || 1)

const displayedArticles = computed(() => {
  if (isSearching.value && searchTitle.value) {
    return wikiArticles.filter(a =>
      a.title.toLowerCase().includes(searchTitle.value.toLowerCase())
    )
  }
  return getWikiByPage(currentPage.value)
})

watch(() => route.params.page, (newPage) => {
  currentPage.value = Number(newPage) || 1
  isSearching.value = false
})

function onSearch() {
  if (searchTitle.value.trim()) {
    isSearching.value = true
  } else {
    isSearching.value = false
  }
}

function changePage(page) {
  isSearching.value = false
  router.push(`/wiki/page/${page}`)
}

function viewArticle(article) {
  // 演示模式：原站通过 AJAX 获取文章链接
  alert(`演示模式：点击查看文章「${article.title}」\n（原站通过后端 API 跳转，此处为模拟）`)
}
</script>
