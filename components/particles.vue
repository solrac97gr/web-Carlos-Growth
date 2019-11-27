/* eslint-disable no-constant-condition */
<template>
  <div>
    <canvas></canvas>
  </div>
</template>
<script>
export default {
  mounted() {
    const canvas = document.querySelector('canvas')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    const ctx = canvas.getContext('2d')
    const particules = []
    const configuration = {
      numberParticules: 90,
      minSpeed: 0.4,
      maxSpeed: 0.4,
      maxDistance: 0.07 * window.innerWidth + 0.05 * window.innerHeight,
      radius: 2,
      backgroundColor: '#001b32',
      frontColor: '#FFF',
      mouseSpace: 100
    }
    let mouseX = -300
    let mouseY = -300

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    })

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    })

    const render = () => {
      requestAnimationFrame(render)
      ctx.fillStyle = configuration.backgroundColor
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particules.forEach((particule) => {
        const x = particule.x + particule.speedX
        const y = particule.y + particule.speedY

        if (x <= 0 || x >= window.innerWidth) particule.speedX *= -1
        if (y <= 0 || y >= window.innerHeight) particule.speedY *= -1

        particule.x = x
        particule.y = y

        const mouseDx = mouseX - particule.x
        const mouseDy = mouseY - particule.y
        const mouseD = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy)

        // eslint-disable-next-line no-constant-condition
        if (mouseD <= configuration.mouseSpace && false) {
          if (!particule.isColliding) {
            const angle = Math.atan2(particule.y - mouseY, particule.y - mouseY)
            particule.x =
              Math.cos(angle) * configuration.mouseSpace + 1 + mouseX
            particule.y =
              Math.sin(angle) * configuration.mouseSpace + 1 + mouseY
            particule.isColliding = true
          } else {
            particule.speedX *= -1
            particule.speedY *= -1
            particule.isColliding = false
          }
        }

        ctx.beginPath()
        ctx.fillStyle = configuration.frontColor
        ctx.arc(
          particule.x,
          particule.y,
          configuration.radius,
          0,
          Math.PI * 2,
          true
        )
        ctx.fill()
        particules.forEach((nextParticule) => {
          const dx = particule.x - nextParticule.x
          const dy = particule.y - nextParticule.y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d <= configuration.maxDistance) {
            ctx.save()
            ctx.globalAlpha = 1 - d / configuration.maxDistance
            ctx.beginPath()
            ctx.strokeStyle = configuration.frontColor
            ctx.moveTo(particule.x, particule.y)
            ctx.lineTo(nextParticule.x, nextParticule.y)
            ctx.stroke()
            ctx.restore()
          }
        })
      })
    }

    const createParticules = () => {
      return new Promise((resolve) => {
        for (let i = 0; i < configuration.numberParticules; i++) {
          const particule = {
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            speedX:
              Math.random() *
                (configuration.maxSpeed - configuration.minSpeed) +
              configuration.minSpeed,
            speedY:
              Math.random() *
                (configuration.maxSpeed - configuration.minSpeed) +
              configuration.minSpeed,
            isColliding: false
          }
          if (Math.random() <= 0.5) particule.speedX *= -1
          if (Math.random() <= 0.5) particule.speedY *= -1
          particules.push(particule)
        }
        resolve()
      })
    }

    createParticules().then(() => {
      render()
    })
  }
}
</script>
<style lang="css" scoped>
canvas {
  width: 100%;
  height: 100%;
  z-index: -1;
  position: fixed;
  left: 0;
  top: 0;
}
</style>
