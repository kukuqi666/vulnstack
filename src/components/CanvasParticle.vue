<template>
  <canvas id="particle-canvas" ref="canvasRef"></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvasRef = ref(null)
let animationId = null

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')

  const config = {
    vx: 4,
    vy: 4,
    height: 2,
    width: 2,
    count: 100,
    color: '255, 255, 255',
    stroke: '26, 129, 197',
    dist: 6000,
    max_conn: 10
  }

  let particles = []
  let mouse = { x: null, y: null }

  function resize() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }
  resize()
  window.addEventListener('resize', resize)

  function createParticles() {
    particles = []
    for (let i = 0; i < config.count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * config.vx,
        vy: (Math.random() - 0.5) * config.vy,
        size: config.width
      })
    }
  }
  createParticles()

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i]
      p.x += p.vx / 20
      p.y += p.vy / 20

      if (p.x < 0 || p.x > canvas.width) p.vx = -p.vx
      if (p.y < 0 || p.y > canvas.height) p.vy = -p.vy

      ctx.fillStyle = `rgba(${config.color}, 0.8)`
      ctx.fillRect(p.x, p.y, p.size, p.size)

      // 连线
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j]
        const dx = p.x - p2.x
        const dy = p.y - p2.y
        const distSq = dx * dx + dy * dy
        if (distSq < config.dist) {
          const opacity = 1 - distSq / config.dist
          ctx.strokeStyle = `rgba(${config.stroke}, ${opacity * 0.3})`
          ctx.lineWidth = 0.5
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(p2.x, p2.y)
          ctx.stroke()
        }
      }
    }
    animationId = requestAnimationFrame(draw)
  }
  draw()

  onUnmounted(() => {
    if (animationId) cancelAnimationFrame(animationId)
    window.removeEventListener('resize', resize)
  })
})
</script>
