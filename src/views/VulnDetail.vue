<template>
  <div v-if="vuln" class="row">
    <div class="col">
      <div class="card m-1">
        <!-- 子导航栏 -->
        <div class="card-header">
          <nav class="navbar navbar-light bg-light">
            <a class="btn btn-link" href="javascript:void(0)" @click="goBack">返回</a>
            <ul class="nav nav-pills" style="margin-left: 400px;">
              <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)" @click="scrollTo('base')">
                  <h5>基本信息</h5>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)" @click="scrollTo('desc')">
                  <h5>描述</h5>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)" @click="scrollTo('image')">
                  <h5>镜像</h5>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)" @click="scrollTo('file')">
                  <h5>文件</h5>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)" @click="scrollTo('screenshot')">
                  <h5>截图</h5>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div class="card-body">
          <!-- 基本信息 -->
          <div id="base" class="card border-secondary m-1 detail-section">
            <div class="card-header"><b>基本信息</b></div>
            <div class="card-body">
              <ul>
                <li>
                  <b>作&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;者:&nbsp;&nbsp;</b>
                  {{ vuln.detail.author || '' }}
                </li>
                <li>
                  <b>创建时间:&nbsp;&nbsp;</b>
                  {{ vuln.detail.createTime }}
                </li>
                <li>
                  <b>标&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;签:&nbsp;&nbsp;</b>
                  <span v-for="(tag, i) in vuln.detail.tags" :key="i">
                    <a class="tag">{{ tag }}</a>
                    <span v-if="i < vuln.detail.tags.length - 1"> | </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div class="w-100"></div>

          <!-- 描述 -->
          <div id="desc" class="card border-secondary m-1 detail-section">
            <div class="card-header"><b>描述</b></div>
            <div class="card-body">
              <div class="detail-description" v-html="vuln.detail.description"></div>
            </div>
          </div>
          <div class="w-100"></div>

          <!-- 文件 -->
          <div id="file" class="card border-secondary m-1 detail-section">
            <div class="card-header"><b>文件</b></div>
            <div class="card-body">
              <dl>
                <dt>{{ vuln.detail.file.name }}</dt>
                <dd>
                  <ul>
                    <li><b>文件大小:&nbsp;&nbsp;&nbsp;</b> {{ vuln.detail.file.size }}</li>
                    <li><b>文件MD5:&nbsp;&nbsp;</b> {{ vuln.detail.file.md5 }}</li>
                    <li><b>文件SHA1:&nbsp;&nbsp;</b> {{ vuln.detail.file.sha1 }}</li>
                    <li>
                      <b>下载地址:&nbsp;&nbsp;&nbsp;</b>
                      <button class="btn btn-primary" @click="showDownload = true">下载</button>
                    </li>
                  </ul>
                </dd>
              </dl>
            </div>
          </div>
          <div class="w-100"></div>

          <!-- 截图 -->
          <div id="screenshot" class="card border-secondary m-1 detail-section">
            <div class="card-header"><b>截屏</b></div>
            <div class="card-body">
              <div v-if="vuln.detail.screenshots.length" class="screenshot">
                <a
                  v-for="(img, i) in vuln.detail.screenshots"
                  :key="i"
                  :href="img"
                  target="_blank"
                >
                  <img class="rounded img-thumbnail" :src="img" />
                </a>
              </div>
              <p v-else style="color: #999;">暂无截图</p>
            </div>
          </div>
        </div>
      </div>
      <div class="w-100"></div>
    </div>

    <!-- 下载弹窗 -->
    <DownloadDialog
      :visible="showDownload"
      :file-name="vuln.detail.file.name"
      @close="showDownload = false"
    />
  </div>

  <div v-else class="text-center" style="padding: 50px; color: #fff;">
    <h2>未找到该漏洞信息</h2>
    <router-link to="/vuln" class="btn btn-primary">返回列表</router-link>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import DownloadDialog from '../components/DownloadDialog.vue'
import { getVulnById } from '../data/vulns'

const route = useRoute()
const router = useRouter()
const showDownload = ref(false)

const vuln = computed(() => getVulnById(route.params.id))

watch(() => route.params.id, () => {
  showDownload.value = false
})

function goBack() {
  router.back()
}

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
