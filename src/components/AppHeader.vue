<template>
  <header id="topnav">
    <div class="topbar-main">
      <div class="container">
        <!-- LOGO -->
        <div class="topbar-left">
          <router-link to="/vuln" class="logo">
            <span>VulnStack</span>
          </router-link>
        </div>

        <div id="navigation">
          <ul class="navigation-menu">
            <li>
              <router-link to="/vuln">
                <i class="zmdi zmdi-view-dashboard"></i> <span> 漏洞列表 </span>
              </router-link>
            </li>
            <li>
              <router-link to="/wiki">
                <i class="fa fa-file-pdf-o"></i> <span> 资源列表 </span>
              </router-link>
            </li>
            <li>
              <a href="http://qiyuanxuetang.net/courses/" target="_blank">
                <i class="fa fa-paper-plane-o"></i> <span> 帮助文档 </span>
              </a>
            </li>
            <li>
              <a href="https://vulnstack.github.io/" target="_blank">
                <i class="fa fa-eye"></i> <span> 漏洞博客 </span>
              </a>
            </li>
            <li>
              <a href="http://www.sec-redclub.com/" target="_blank">
                <i class="fa fa-star"></i> <span> 关于我们 </span>
              </a>
            </li>
          </ul>
        </div>

        <div class="menu-extras">
          <form class="form-inline" @submit.prevent="onSearch">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              v-model="searchKey"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const searchKey = ref('')

function onSearch() {
  if (searchKey.value.trim()) {
    router.push({ path: '/vuln', query: { key: searchKey.value.trim() } })
  }
}
</script>
