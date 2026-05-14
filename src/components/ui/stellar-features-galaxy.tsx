"use client"

import React, { Suspense, useEffect, useMemo, useRef, useState, createContext, useContext } from "react"
import * as THREE from "three"
import { Canvas, useFrame } from "@react-three/fiber"
import {
  OrbitControls,
  Environment,
  Html,
  Plane,
  Sphere,
} from "@react-three/drei"
import { X, Database, Shield, Zap, Lock, Globe, Code2, Brain, Activity, CreditCard } from "lucide-react"

type Feature = {
  id: string
  title: string
  description: string
  icon: any
}

const FEATURES: Feature[] = [
  { id: "1", title: "Synthetic Data", description: "Generate millions of realistic records.", icon: Database },
  { id: "2", title: "Fraud Simulation", description: "Inject complex AML & fraud patterns.", icon: Shield },
  { id: "3", title: "Real-time API", description: "Stream synthetic data instantly.", icon: Zap },
  { id: "4", title: "Privacy Safe", description: "Zero exposure to real customer data.", icon: Lock },
  { id: "5", title: "Global Schemas", description: "Support for multi-region data structures.", icon: Globe },
  { id: "6", title: "SDK Integration", description: "Native Python, Node.js, and Go SDKs.", icon: Code2 },
  { id: "7", title: "Model Training", description: "Train risk models on edge cases.", icon: Brain },
  { id: "8", title: "Activity Graphs", description: "Map out synthetic network behaviors.", icon: Activity },
  { id: "9", title: "Card Rails", description: "Simulate advanced payment networks.", icon: CreditCard },
  { id: "10", title: "Enterprise SLA", description: "99.99% uptime with dedicated support.", icon: Shield },
]

type CardContextType = {
  selectedCard: Feature | null
  setSelectedCard: (card: Feature | null) => void
  cards: Feature[]
}

const CardContext = createContext<CardContextType | undefined>(undefined)

function useCard() {
  const ctx = useContext(CardContext)
  if (!ctx) throw new Error("useCard must be used within CardProvider")
  return ctx
}

function CardProvider({ children }: { children: React.ReactNode }) {
  const [selectedCard, setSelectedCard] = useState<Feature | null>(null)
  return (
    <CardContext.Provider value={{ selectedCard, setSelectedCard, cards: FEATURES }}>
      {children}
    </CardContext.Provider>
  )
}

function StarfieldBackground() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setClearColor(0x000000, 1)
    mountRef.current.appendChild(renderer.domElement)

    const starsGeometry = new THREE.BufferGeometry()
    const starsCount = 10000
    const positions = new Float32Array(starsCount * 3)
    for (let i = 0; i < starsCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 2000
      positions[i * 3 + 1] = (Math.random() - 0.5) * 2000
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2000
    }
    starsGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.7, sizeAttenuation: true })
    const stars = new THREE.Points(starsGeometry, starsMaterial)
    scene.add(stars)

    camera.position.z = 10

    let animationId = 0
    const animate = () => {
      animationId = requestAnimationFrame(animate)
      stars.rotation.y += 0.0001
      stars.rotation.x += 0.00005
      renderer.render(scene, camera)
    }
    animate()

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationId)
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
      starsGeometry.dispose()
      starsMaterial.dispose()
    }
  }, [])

  return <div ref={mountRef} className="absolute top-0 left-0 w-full h-full z-0 bg-navy-950" />
}

function FloatingCard({
  card,
  position,
}: {
  card: Feature
  position: { x: number; y: number; z: number; rotationX: number; rotationY: number; rotationZ: number }
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  const groupRef = useRef<THREE.Group>(null)
  const [hovered, setHovered] = useState(false)
  const { setSelectedCard } = useCard()
  const Icon = card.icon

  useFrame(({ camera }) => {
    if (groupRef.current) {
      groupRef.current.lookAt(camera.position)
    }
  })

  const handleClick = (e: any) => {
    e.stopPropagation()
    setSelectedCard(card)
  }
  const handlePointerOver = (e: any) => {
    e.stopPropagation()
    setHovered(true)
    document.body.style.cursor = "pointer"
  }
  const handlePointerOut = (e: any) => {
    e.stopPropagation()
    setHovered(false)
    document.body.style.cursor = "auto"
  }

  return (
    <group ref={groupRef} position={[position.x, position.y, position.z]}>
      <Plane
        ref={meshRef}
        args={[4.5, 6]}
        onClick={handleClick}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      >
        <meshBasicMaterial transparent opacity={0} />
      </Plane>

      <Html
        transform
        distanceFactor={10}
        position={[0, 0, 0.01]}
        style={{
          transition: "all 0.3s ease",
          transform: hovered ? "scale(1.15)" : "scale(1)",
          pointerEvents: "none",
        }}
      >
        <div
          className="w-44 h-56 rounded-xl overflow-hidden shadow-2xl bg-navy-900/80 backdrop-blur-md p-4 select-none flex flex-col justify-center items-center text-center border"
          style={{
            boxShadow: hovered
              ? "0 25px 50px rgba(212, 175, 55, 0.3), 0 0 30px rgba(212, 175, 55, 0.15)"
              : "0 15px 30px rgba(0, 0, 0, 0.6)",
            borderColor: hovered ? "rgba(212, 175, 55, 0.5)" : "rgba(255, 255, 255, 0.05)",
          }}
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center mb-3">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-white text-sm font-bold mb-2">{card.title}</h3>
          <p className="text-xs text-text-secondary line-clamp-3">{card.description}</p>
        </div>
      </Html>
    </group>
  )
}

function CardModal() {
  const { selectedCard, setSelectedCard } = useCard()
  const cardRef = useRef<HTMLDivElement>(null)

  if (!selectedCard) return null

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = (y - centerY) / 15
    const rotateY = (centerX - x) / 15
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transition = "transform 0.5s ease-out"
      cardRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)"
    }
  }

  const handleClose = () => setSelectedCard(null)
  const handleBackdropClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.target === e.currentTarget) handleClose()
  }

  const Icon = selectedCard.icon

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={handleBackdropClick}>
      <div className="relative max-w-sm w-full mx-4">
        <button onClick={handleClose} className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10">
          <X className="w-8 h-8" />
        </button>

        <div style={{ perspective: "1000px" }} className="w-full">
          <div
            ref={cardRef}
            className="relative cursor-pointer rounded-2xl bg-navy-900 border border-white/10 p-8 transition-all duration-500 ease-out w-full flex flex-col items-center text-center"
            style={{
              transformStyle: "preserve-3d",
              boxShadow: "0 25px 50px -12px rgba(212, 175, 55, 0.25)",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center mb-6 shadow-lg shadow-amber-500/20">
              <Icon className="w-10 h-10 text-white" />
            </div>

            <h3 className="text-white text-2xl font-bold mb-4">{selectedCard.title}</h3>
            <p className="text-text-secondary mb-6">{selectedCard.description}</p>

            <button
              type="button"
              onClick={handleClose}
              className="inline-flex h-10 w-full items-center justify-center rounded-lg text-sm font-bold text-navy-950 transition duration-300 ease-out hover:opacity-90 active:scale-[0.97] bg-gradient-to-r from-yellow-400 to-amber-500"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function CardGalaxy() {
  const { cards } = useCard()

  const cardPositions = useMemo(() => {
    const positions: {
      x: number
      y: number
      z: number
      rotationX: number
      rotationY: number
      rotationZ: number
    }[] = []
    const numCards = cards.length
    const goldenRatio = (1 + Math.sqrt(5)) / 2

    for (let i = 0; i < numCards; i++) {
      const y = 1 - (i / (numCards - 1)) * 2
      const radiusAtY = Math.sqrt(1 - y * y)
      const theta = (2 * Math.PI * i) / goldenRatio
      const x = Math.cos(theta) * radiusAtY
      const z = Math.sin(theta) * radiusAtY
      const layerRadius = 12 + (i % 3) * 4

      positions.push({
        x: x * layerRadius,
        y: y * layerRadius,
        z: z * layerRadius,
        rotationX: Math.atan2(z, Math.sqrt(x * x + y * y)),
        rotationY: Math.atan2(x, z),
        rotationZ: (Math.random() - 0.5) * 0.2,
      })
    }
    return positions
  }, [cards.length])

  return (
    <>
      <Sphere args={[2, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#d4af37" transparent opacity={0.15} wireframe />
      </Sphere>
      <Sphere args={[12, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#d4af37" transparent opacity={0.05} wireframe />
      </Sphere>
      <Sphere args={[16, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#d4af37" transparent opacity={0.03} wireframe />
      </Sphere>
      <Sphere args={[20, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#d4af37" transparent opacity={0.02} wireframe />
      </Sphere>

      {cards.map((card, i) => (
        <FloatingCard key={card.id} card={card} position={cardPositions[i]} />
      ))}
    </>
  )
}

export function StellarFeaturesGalaxy() {
  return (
    <CardProvider>
      <div className="w-full h-[600px] md:h-[800px] relative overflow-hidden rounded-3xl border border-white/5 my-20">
        <StarfieldBackground />

        <Canvas
          camera={{ position: [0, 0, 18], fov: 60 }}
          className="absolute inset-0 z-10"
          onCreated={({ gl }) => {
            gl.domElement.style.pointerEvents = "auto"
          }}
        >
          <Suspense fallback={null}>
            <Environment preset="night" />
            <ambientLight intensity={0.4} />
            <pointLight position={[10, 10, 10]} intensity={0.6} />
            <pointLight position={[-10, -10, -10]} intensity={0.3} />
            <CardGalaxy />
            <OrbitControls
              enablePan
              enableZoom={false}
              enableRotate
              minDistance={5}
              maxDistance={40}
              autoRotate={true}
              rotateSpeed={0.5}
              target={[0, 0, 0]}
            />
          </Suspense>
        </Canvas>

        <CardModal />

        <div className="absolute top-8 left-8 z-20 pointer-events-none">
          <h2 className="text-3xl font-bold mb-2 text-white">Platform Features</h2>
          <p className="text-sm text-text-secondary">Drag to explore the Altyn ecosystem</p>
        </div>
      </div>
    </CardProvider>
  )
}
