<template>
  <div ref="viewerContainer" class="robot-viewer"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const viewerContainer = ref(null)

// Данные из Blender
const blenderCameraLocation = { x: 140.119, y: -58.2818, z: 43.3978 }  // в метрах
const blenderCameraRotationDegrees = { x: 85.6949, y: 0.138457, z: 56.6261 } // градусы
const blenderModelScale = { x: 1, y: 1, z: 1 }  // масштаб модели

// Конвертация градусов в радианы
function degToRad(deg) {
  return (deg * Math.PI) / 180
}

onMounted(() => {
  const scene = new THREE.Scene()

  // Создаём камеру
  const camera = new THREE.PerspectiveCamera(
    75,
    viewerContainer.value.clientWidth / viewerContainer.value.clientHeight,
    0.1,
    1000
  )

// Перевод координат: Z Blender → Y Three.js, Y Blender → -Z Three.js
camera.position.set(
  blenderCameraLocation.x,
  blenderCameraLocation.z,
  -blenderCameraLocation.y
)

// Перевод углов: Blender Euler XYZ → Three.js Euler XYZ с учётом осей
const euler = new THREE.Euler(
  degToRad(blenderCameraRotationDegrees.x),
  degToRad(blenderCameraRotationDegrees.y),
  degToRad(blenderCameraRotationDegrees.z),
  'XYZ'
)

// Корректируем вращение: перевести в кватернион и применить
camera.quaternion.setFromEuler(euler)

// ВНИМАНИЕ: возможно, нужно инвертировать ось поворота вокруг Y (если камера смотрит назад)
camera.rotateY(Math.PI) // если смотришь "в стену", попробуй удалить или оставить эту строку

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(viewerContainer.value.clientWidth, viewerContainer.value.clientHeight)
  viewerContainer.value.appendChild(renderer.domElement)

  const controls = new OrbitControls(camera, renderer.domElement)
  controls.enableZoom = false
  controls.enablePan = false
  controls.enableRotate = false
  controls.update()

  // Свет
  const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 5)
  scene.add(hemiLight)

  const dirLight = new THREE.DirectionalLight(0xffffff, 1)
  dirLight.position.set(1, 10, 5)
  scene.add(dirLight)

  // Загрузка модели
  const loader = new GLTFLoader()
  loader.load('/models/robotRender.glb', (gltf) => {
    const model = gltf.scene

    // Масштаб из Blender к модели
    model.scale.set(blenderModelScale.x, blenderModelScale.z, blenderModelScale.y) // тот же перенос осей для масштаба

    scene.add(model)

    const mixer = new THREE.AnimationMixer(model)
    gltf.animations.forEach((clip) => mixer.clipAction(clip).play())

    const clock = new THREE.Clock()
    const animate = () => {
      requestAnimationFrame(animate)
      const delta = clock.getDelta()
      mixer.update(delta)
      controls.update()
      renderer.render(scene, camera)
    }
    animate()
  })
})
</script>

<style scoped>
.robot-viewer {
  width: 100%;
  height: 700px;
  background: transparent;
  margin-top: 20px;
  position: relative;
  z-index: 10;
}
</style>
