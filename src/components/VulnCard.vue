<template>
  <div class="row">
    <div class="col">
      <div class="card m-1">
        <div class="card-header" style="height: 50px;">
          <router-link
            class="btn btn-link font-weight-bold float-left"
            :to="`/vuln/detail/${vuln.id}`"
            style="margin-top: -15px; font-size: 25px; text-decoration: none; color: slategrey;"
          >
            <b>{{ vuln.title }}</b>
          </router-link>
          <a class="btn btn-link font-weight-bolder float-right" href="javascript:void(0);">
            {{ vuln.author }}
          </a>
          <a class="btn btn-link text-muted font-italic float-right" href="javascript:void(0);">
            {{ vuln.date }}
          </a>
          <a class="btn btn-link text-muted font-italic float-right" href="javascript:void(0);">
            浏览量：&nbsp;{{ vuln.viewCount }}
          </a>
        </div>
        <div class="card-body">
          <div class="row no-gutters">
            <div class="col-3">
              <img
                :src="vuln.image"
                class="card-img img-thumbnail vuln-logo"
                alt=""
                loading="lazy"
                style="width: 270px; height: 170px;"
                @error="onImgError"
              />
            </div>
            <div class="col-9">
              <div class="m-3">
                <p class="card-text" v-html="vuln.summary"></p>
                <p class="card-text">
                  <small class="text-muted">更新时间: {{ vuln.updateTime }}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  </div>
</template>

<script setup>
defineProps({
  vuln: { type: Object, required: true }
})

function onImgError(e) {
  e.target.style.display = 'none'
}
</script>
