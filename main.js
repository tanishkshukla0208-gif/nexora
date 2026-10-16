/**
 * NEXORA — Master Interactive Script
 * Author: Tanishk Shukla (GLA University, Mathura - Section AN)
 * Stack: Vanilla ES6+, GSAP, ScrollTrigger, Three.js, Canvas Confetti
 */

import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import confetti from 'canvas-confetti';

import {
  TECHNOLOGIES_DATA,
  INNOVATION_LAB_PROJECTS,
  ROADMAP_STAGES,
  CREATOR_PROFILE,
  NAV_LINKS
} from './data.js';

// Register GSAP Plugins
gsap.registerPlugin(ScrollTrigger);

// LocalStorage Keys
const STORAGE_FAVORITES_KEY = 'nexora_saved_ideas';
const STORAGE_ROADMAP_KEY = 'nexora_completed_stages';

/* ==========================================================================
   1. GLOBAL TOAST SYSTEM
   ========================================================================== */
export function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast-item toast-${type}`;
  toast.setAttribute('role', 'alert');

  let iconSvg = '';
  if (type === 'success') {
    iconSvg = `<svg class="toast-icon text-cyan" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`;
  } else if (type === 'error') {
    iconSvg = `<svg class="toast-icon text-coral" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`;
  } else {
    iconSvg = `<svg class="toast-icon text-cyan" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`;
  }

  toast.innerHTML = `
    ${iconSvg}
    <span class="toast-text">${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('toast-fadeout');
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
  }, 3500);
}

/* ==========================================================================
   2. DESKTOP AMBIENT CURSOR GLOW
   ========================================================================== */
function initAmbientCursorGlow() {
  const glowEl = document.getElementById('cursorAmbientGlow');
  if (!glowEl || window.matchMedia('(max-width: 768px)').matches) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let currentX = mouseX;
  let currentY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateGlow() {
    currentX += (mouseX - currentX) * 0.12;
    currentY += (mouseY - currentY) * 0.12;
    glowEl.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;
    requestAnimationFrame(animateGlow);
  }

  animateGlow();
}

/* ==========================================================================
   3. NAVIGATION & SCROLL TRACKING
   ========================================================================== */
function initNavigation() {
  const header = document.getElementById('siteHeader');
  const scrollFill = document.getElementById('scrollProgressFill');
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mobileDrawer = document.getElementById('mobileNavMenu');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  const backToTopBtn = document.getElementById('backToTopBtn');

  // Scroll Progress and Header Sticky Style
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;

    if (scrollFill) {
      scrollFill.style.width = `${progress}%`;
    }

    if (header) {
      if (scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  }, { passive: true });

  // Mobile Menu Toggle
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', !isExpanded);
      mobileDrawer.classList.toggle('open');
      mobileDrawer.setAttribute('aria-hidden', isExpanded);
    });

    // Close mobile menu on link click
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileDrawer.classList.remove('open');
        mobileDrawer.setAttribute('aria-hidden', 'true');
      });
    });
  }

  // Active Section Highlighting
  const sections = document.querySelectorAll('section[id]');
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => sectionObserver.observe(section));

  // Back to Top Button
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Dynamic Year in Footer
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/* ==========================================================================
   4. THREE.JS 3D HERO GRAPHIC (WITH FALLBACK)
   ========================================================================== */
function initThreeHero() {
  const container = document.getElementById('heroThreeContainer');
  const fallback = document.getElementById('threeFallback');
  if (!container) return;

  // Reduced motion preference check
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    if (fallback) fallback.style.display = 'flex';
    return;
  }

  let scene, camera, renderer, icosahedron, outerRing, innerCore, particleSystem;
  let mouseX = 0, mouseY = 0;
  let targetRotationX = 0, targetRotationY = 0;

  try {
    const width = container.clientWidth || 450;
    const height = container.clientHeight || 450;

    // Scene
    scene = new THREE.Scene();

    // Camera
    camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 4.2;

    // Renderer
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    if (fallback) {
      fallback.style.display = 'none';
    }

    // Geometry 1: Futuristic Wireframe Icosahedron
    const icoGeometry = new THREE.IcosahedronGeometry(1.35, 1);
    const icoMaterial = new THREE.MeshStandardMaterial({
      color: 0x00E5FF,
      wireframe: true,
      roughness: 0.2,
      metalness: 0.9,
      emissive: 0x004466,
      emissiveIntensity: 0.4
    });
    icosahedron = new THREE.Mesh(icoGeometry, icoMaterial);
    scene.add(icosahedron);

    // Geometry 2: Inner Glowing Energy Core
    const coreGeometry = new THREE.SphereGeometry(0.65, 32, 32);
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0x8B5CF6,
      roughness: 0.1,
      metalness: 0.6,
      emissive: 0x8B5CF6,
      emissiveIntensity: 0.8
    });
    innerCore = new THREE.Mesh(coreGeometry, coreMaterial);
    scene.add(innerCore);

    // Geometry 3: Orbital Torus Ring
    const ringGeometry = new THREE.TorusGeometry(1.9, 0.02, 16, 100);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x3B82F6,
      wireframe: true
    });
    outerRing = new THREE.Mesh(ringGeometry, ringMaterial);
    outerRing.rotation.x = Math.PI / 3;
    scene.add(outerRing);

    // Floating Quantum Particle Field
    const particleCount = 400;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      const radius = 2.0 + Math.random() * 1.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = radius * Math.cos(phi);
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x00E5FF,
      size: 0.035,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });
    particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.8);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x00E5FF, 3, 20);
    pointLight.position.set(3, 4, 5);
    scene.add(pointLight);

    const violetLight = new THREE.PointLight(0x8B5CF6, 2.5, 20);
    violetLight.position.set(-3, -4, -3);
    scene.add(violetLight);

    // Mouse movement interaction
    window.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      mouseX = x * 0.45;
      mouseY = y * 0.45;
    });

    // Handle container resize
    const onResize = () => {
      if (!container || !renderer || !camera) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', onResize);

    // Animation Loop with clock
    const clock = new THREE.Clock();
    function animate() {
      requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse damping
      targetRotationY += (mouseX - targetRotationY) * 0.05;
      targetRotationX += (mouseY - targetRotationX) * 0.05;

      if (icosahedron) {
        icosahedron.rotation.x = elapsedTime * 0.25 + targetRotationX;
        icosahedron.rotation.y = elapsedTime * 0.35 + targetRotationY;
      }

      if (innerCore) {
        const scale = 1 + Math.sin(elapsedTime * 2.5) * 0.06;
        innerCore.scale.set(scale, scale, scale);
      }

      if (outerRing) {
        outerRing.rotation.z = elapsedTime * 0.4;
        outerRing.rotation.y = elapsedTime * 0.2 + targetRotationY;
      }

      if (particleSystem) {
        particleSystem.rotation.y = elapsedTime * 0.08;
      }

      renderer.render(scene, camera);
    }
    animate();

  } catch (err) {
    console.warn('WebGL initialization failed, switching to CSS fallback:', err);
    if (fallback) fallback.style.display = 'flex';
  }
}

/* ==========================================================================
   5. GSAP SCROLL & ENTRANCE ANIMATIONS
   ========================================================================== */
function initGsapAnimations() {
  // If reduced motion is requested, skip complex GSAP choreography
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // Hero Entrance Timeline
  const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  heroTl
    .from('.animate-hero-badge', { opacity: 0, y: -20, duration: 0.7, delay: 0.2 })
    .from('.animate-hero-title', { opacity: 0, y: 30, duration: 0.9 }, '-=0.4')
    .from('.animate-hero-subtitle', { opacity: 0, y: 20, duration: 0.7 }, '-=0.5')
    .from('.animate-hero-desc', { opacity: 0, y: 20, duration: 0.7 }, '-=0.5')
    .from('.animate-hero-cta', { opacity: 0, y: 20, duration: 0.7 }, '-=0.5')
    .from('.animate-hero-telemetry', { opacity: 0, y: 20, duration: 0.7 }, '-=0.5')
    .from('.animate-hero-visual', { opacity: 0, scale: 0.85, duration: 1 }, '-=0.8');

  // Staggered Sections Reveals
  gsap.utils.toArray('.section-header').forEach((header) => {
    gsap.from(header, {
      scrollTrigger: {
        trigger: header,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: 'power3.out'
    });
  });

  // Staggered Trajectory Nodes in Section E
  gsap.utils.toArray('.trajectory-node').forEach((node, i) => {
    gsap.from(node, {
      scrollTrigger: {
        trigger: node,
        start: 'top 88%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      x: -30,
      duration: 0.6,
      delay: i * 0.1,
      ease: 'power2.out'
    });
  });
}

/* ==========================================================================
   6. SECTION B — EXPLORE TECHNOLOGIES (6 CARDS & ACCESSIBLE MODAL)
   ========================================================================== */
function initTechnologiesSection() {
  const grid = document.getElementById('techCardsGrid');
  const modal = document.getElementById('techDetailModal');
  const modalCard = document.getElementById('modalCard');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const modalBody = document.getElementById('modalTechBody');
  const modalTitle = document.getElementById('modalTechTitle');
  const modalBadge = document.getElementById('modalTechBadge');
  const modalIcon = document.getElementById('modalTechIcon');

  if (!grid) return;

  // Render 6 cards
  grid.innerHTML = TECHNOLOGIES_DATA.map(tech => `
    <article class="tech-card" style="--card-accent: ${tech.accentColor}; --card-glow: ${tech.glowColor};" data-tech-id="${tech.id}" tabindex="0" role="button" aria-label="Explore details about ${tech.title}">
      <div class="tech-card-glow-bg"></div>
      <div>
        <div class="tech-card-header">
          <div class="tech-icon-wrap">${tech.icon}</div>
          <span class="tech-badge-pill">${tech.badge}</span>
        </div>
        <h3 class="tech-card-title">${tech.title}</h3>
        <p class="tech-card-tagline">${tech.tagline}</p>
        <p class="tech-card-desc">${tech.shortDesc}</p>
      </div>
      <div class="tech-card-footer">
        <span class="tech-explore-btn">
          <span>Explore Details</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </span>
      </div>
    </article>
  `).join('');

  // 3D Card Tilt Interaction on Desktop
  if (!window.matchMedia('(max-width: 768px)').matches) {
    document.querySelectorAll('.tech-card').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -6;
        const rotateY = ((x - centerX) / centerX) * 6;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  // Open Modal Function
  let lastActiveElement = null;

  function openTechModal(techId) {
    const tech = TECHNOLOGIES_DATA.find(t => t.id === techId);
    if (!tech || !modal) return;

    lastActiveElement = document.activeElement;

    modalTitle.textContent = tech.title;
    modalBadge.textContent = tech.badge;
    modalIcon.innerHTML = tech.icon;
    modalIcon.style.color = tech.accentColor;

    modalBody.innerHTML = `
      <!-- 1. What This Technology Means -->
      <section>
        <h4 class="modal-section-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
          <span>1. Technical Architecture & Meaning</span>
        </h4>
        <div class="modal-desc-box">${tech.fullDefinition}</div>
      </section>

      <!-- 2. Real-World Applications -->
      <section>
        <h4 class="modal-section-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
          <span>2. Real-World Applications & Impact</span>
        </h4>
        <div class="modal-apps-grid">
          ${tech.realWorldApplications.map(app => `
            <div class="modal-app-card">
              <h5 class="modal-app-title">${app.title}</h5>
              <p class="modal-app-desc">${app.desc}</p>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- 3. Essential Beginner Skills -->
      <section>
        <h4 class="modal-section-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
          <span>3. Beginner Skills to Learn First</span>
        </h4>
        <div class="modal-skills-list">
          ${tech.beginnerSkills.map(skill => `
            <div class="modal-skill-item">
              <span class="modal-skill-bullet">▸</span>
              <div>
                <div class="modal-skill-name">${skill.name}</div>
                <div class="modal-skill-tip">${skill.tip}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- 4. Beginner Starter Project -->
      <section>
        <h4 class="modal-section-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          <span>4. Beginner-Friendly Starter Project Blueprint</span>
        </h4>
        <div class="modal-starter-project">
          <div class="starter-proj-header">
            <h5 class="starter-proj-title">${tech.starterProject.title}</h5>
            <span class="pill-badge" style="background:${tech.accentColor}">${tech.starterProject.difficulty}</span>
          </div>
          <p class="modal-app-desc">${tech.starterProject.overview}</p>
          <div class="starter-tools-pills">
            ${tech.starterProject.tools.map(tool => `<span class="starter-tool-pill">${tool}</span>`).join('')}
          </div>
          <div class="starter-steps-list">
            ${tech.starterProject.steps.map((step, idx) => `
              <div class="starter-step-item">
                <span class="starter-step-num">0${idx + 1}.</span>
                <span>${step}</span>
              </div>
            `).join('')}
          </div>
          <div style="margin-top: 1.5rem;">
            <button id="modalSendToLabBtn" class="btn btn-secondary" style="width:100%; border-color:${tech.accentColor}">
              <span>Customize & Launch in Innovation Lab</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
          </div>
        </div>
      </section>
    `;

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Hook up Send to Lab Button
    const sendToLabBtn = document.getElementById('modalSendToLabBtn');
    if (sendToLabBtn) {
      sendToLabBtn.addEventListener('click', () => {
        closeModal();
        const categorySelect = document.getElementById('categorySelect');
        if (categorySelect) {
          categorySelect.value = tech.id;
          const labSection = document.getElementById('lab');
          if (labSection) {
            labSection.scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => {
              const genBtn = document.getElementById('generateIdeaBtn');
              if (genBtn) genBtn.click();
            }, 500);
          }
        }
      });
    }

    // Set focus inside modal
    if (closeModalBtn) closeModalBtn.focus();
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastActiveElement) lastActiveElement.focus();
  }

  // Card click & keyboard listeners
  grid.addEventListener('click', (e) => {
    const card = e.target.closest('.tech-card');
    if (card) {
      const techId = card.getAttribute('data-tech-id');
      openTechModal(techId);
    }
  });

  grid.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      const card = e.target.closest('.tech-card');
      if (card) {
        e.preventDefault();
        openTechModal(card.getAttribute('data-tech-id'));
      }
    }
  });

  // Modal Close Events
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('open')) {
      closeModal();
    }
  });
}

/* ==========================================================================
   7. SECTION C — INNOVATION LAB (GENERATOR, COPY & FAVORITES)
   ========================================================================== */
function initInnovationLab() {
  const categorySelect = document.getElementById('categorySelect');
  const difficultySelect = document.getElementById('difficultySelect');
  const goalSelect = document.getElementById('goalSelect');
  const generateBtn = document.getElementById('generateIdeaBtn');
  const resultCard = document.getElementById('projectResultCard');

  // Favorites Drawer elements
  const navFavoritesBtn = document.getElementById('navSavedIdeasBtn');
  const navFavoritesCount = document.getElementById('navFavoritesCount');
  const favoritesDrawer = document.getElementById('favoritesDrawer');
  const closeDrawerBtn = document.getElementById('closeDrawerBtn');
  const favoritesBody = document.getElementById('favoritesDrawerBody');
  const drawerCountBadge = document.getElementById('drawerCountBadge');
  const clearAllFavoritesBtn = document.getElementById('clearAllFavoritesBtn');

  let currentProject = null;

  // Retrieve saved favorites from localStorage
  function getFavorites() {
    try {
      const saved = localStorage.getItem(STORAGE_FAVORITES_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  }

  function saveFavorites(favorites) {
    try {
      localStorage.setItem(STORAGE_FAVORITES_KEY, JSON.stringify(favorites));
      updateFavoritesUI();
    } catch (err) {
      console.warn('LocalStorage save error:', err);
    }
  }

  function updateFavoritesUI() {
    const favorites = getFavorites();
    const count = favorites.length;

    if (navFavoritesCount) navFavoritesCount.textContent = count;
    if (drawerCountBadge) drawerCountBadge.textContent = count;

    // Render Drawer items
    if (!favoritesBody) return;

    if (count === 0) {
      favoritesBody.innerHTML = `
        <div class="drawer-empty-state">
          <svg class="empty-state-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
          </svg>
          <h4 class="empty-state-title">No Saved Blueprints Yet</h4>
          <p class="empty-state-desc">Generate project ideas in the Innovation Lab and click "Save to Favorites" to build your personal roadmap repository.</p>
        </div>
      `;
    } else {
      favoritesBody.innerHTML = favorites.map(item => `
        <div class="saved-idea-card" data-favorite-id="${item.id}">
          <div class="saved-idea-header">
            <span class="saved-idea-title">${item.title}</span>
            <button class="saved-idea-delete-btn" aria-label="Remove ${item.title} from favorites" data-delete-id="${item.id}">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>
          <p class="saved-idea-desc">${item.overview}</p>
          <div class="result-card-badges">
            <span class="result-badge badge-cat">${item.category.toUpperCase()}</span>
            <span class="result-badge badge-diff">${item.difficulty.toUpperCase()}</span>
          </div>
        </div>
      `).join('');
    }

    // Update Result Card favorite button state if current project matches
    const saveBtn = document.getElementById('saveFavoriteBtn');
    if (saveBtn && currentProject) {
      const isSaved = favorites.some(f => f.id === currentProject.id);
      if (isSaved) {
        saveBtn.classList.add('saved-active');
        saveBtn.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
          <span>Saved in Favorites</span>
        `;
      } else {
        saveBtn.classList.remove('saved-active');
        saveBtn.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
          <span>Save to Favorites</span>
        `;
      }
    }
  }

  // Project synthesis generator for any combination
  function findOrCreateProject(cat, diff, goal) {
    // 1. Direct match in curated pool
    const directMatches = INNOVATION_LAB_PROJECTS.filter(p => 
      p.category === cat && p.difficulty === diff && p.goal === goal
    );

    if (directMatches.length > 0) {
      return directMatches[Math.floor(Math.random() * directMatches.length)];
    }

    // 2. Fallback to same category matches
    const catMatches = INNOVATION_LAB_PROJECTS.filter(p => p.category === cat);
    if (catMatches.length > 0) {
      const base = catMatches[Math.floor(Math.random() * catMatches.length)];
      return {
        ...base,
        id: `${cat}-${diff}-${goal}-${Date.now()}`,
        difficulty: diff,
        goal: goal
      };
    }

    // 3. Algorithmic dynamic project blueprint
    const categoryNames = {
      ai: "Artificial Intelligence",
      web: "Web Engineering",
      robotics: "Robotics & Embedded IoT",
      data: "Data Science & Analytics",
      cybersecurity: "Cybersecurity Defense",
      cloud: "Cloud & Distributed Systems"
    };

    return {
      id: `${cat}-${diff}-${goal}-gen`,
      category: cat,
      difficulty: diff,
      goal: goal,
      title: `${categoryNames[cat] || 'System'}: Practical Architecture Lab`,
      overview: `A focused engineering blueprint engineered to ${goal === 'skill' ? 'build practical competence' : goal === 'problem' ? 'tackle real community challenges' : 'stand out as a flagship portfolio asset'} through hands-on development.`,
      techStack: ["Modern JS / Python", "RESTful Protocols", "Structured JSON", "Vite / Git"],
      steps: [
        "Plan software architecture, data schemas, and interface wireframes.",
        "Implement core algorithmic business logic with clean modular functions.",
        "Add comprehensive unit testing, edge case handling, and responsive UX states.",
        "Deploy to a free static host and publish full open-source documentation."
      ],
      learningOutcome: "Gain tangible end-to-end engineering competence transforming abstract computer science concepts into resilient software solutions."
    };
  }

  // Render Result Card
  function displayProject(project) {
    if (!resultCard) return;
    currentProject = project;

    const favorites = getFavorites();
    const isSaved = favorites.some(f => f.id === project.id);

    resultCard.innerHTML = `
      <div class="result-card-badges">
        <span class="result-badge badge-cat">${project.category.toUpperCase()} DOMAIN</span>
        <span class="result-badge badge-diff">${project.difficulty.toUpperCase()} LEVEL</span>
        <span class="result-badge badge-goal">${project.goal.toUpperCase()}</span>
      </div>

      <h3 class="result-title">${project.title}</h3>
      <p class="result-overview">${project.overview}</p>

      <div class="result-tools-block">
        <div class="result-section-label">Recommended Tech Stack & Tooling:</div>
        <div class="result-tools-list">
          ${project.techStack.map(tool => `<span class="tool-chip">${tool}</span>`).join('')}
        </div>
      </div>

      <div class="result-section-label">Development Roadmap & Milestones:</div>
      <div class="result-steps-timeline">
        ${project.steps.map((step, idx) => `
          <div class="result-step-item">
            <span class="step-marker">0${idx + 1}</span>
            <p class="step-desc">${step}</p>
          </div>
        `).join('')}
      </div>

      <div class="result-outcome-box">
        <div class="outcome-title">Verified Learning Outcome:</div>
        <p class="outcome-text">${project.learningOutcome}</p>
      </div>

      <div class="result-actions-bar">
        <div class="result-btn-group">
          <!-- Generate Another Idea Button -->
          <button id="regenerateBtn" class="action-pill-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/></svg>
            <span>Generate Another Idea</span>
          </button>

          <!-- Copy Idea Button -->
          <button id="copyIdeaBtn" class="action-pill-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            <span>Copy Idea</span>
          </button>
        </div>

        <div class="result-btn-group">
          <!-- Save to Favorites Button -->
          <button id="saveFavoriteBtn" class="action-pill-btn ${isSaved ? 'saved-active' : ''}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
            <span>${isSaved ? 'Saved in Favorites' : 'Save to Favorites'}</span>
          </button>

          <!-- Open Drawer Button -->
          <button id="viewAllSavedBtn" class="action-pill-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
            <span>View Saved</span>
          </button>
        </div>
      </div>
    `;

    // Hook up generated buttons
    document.getElementById('regenerateBtn').addEventListener('click', () => {
      handleGenerate();
    });

    document.getElementById('copyIdeaBtn').addEventListener('click', () => {
      copyProjectToClipboard(project);
    });

    document.getElementById('saveFavoriteBtn').addEventListener('click', () => {
      toggleFavorite(project);
    });

    document.getElementById('viewAllSavedBtn').addEventListener('click', () => {
      openFavoritesDrawer();
    });

    // Animate result card
    gsap.fromTo(resultCard, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' });
  }

  function handleGenerate() {
    const cat = categorySelect ? categorySelect.value : 'web';
    const diff = difficultySelect ? difficultySelect.value : 'beginner';
    const goal = goalSelect ? goalSelect.value : 'problem';

    const project = findOrCreateProject(cat, diff, goal);
    displayProject(project);
  }

  function copyProjectToClipboard(project) {
    const text = `
NEXORA Project Blueprint: ${project.title}
Domain: ${project.category.toUpperCase()} | Level: ${project.difficulty.toUpperCase()} | Objective: ${project.goal.toUpperCase()}

Overview:
${project.overview}

Recommended Stack:
${project.techStack.join(', ')}

Execution Steps:
${project.steps.map((s, i) => `${i + 1}. ${s}`).join('\n')}

Learning Outcome:
${project.learningOutcome}

Generated via NEXORA — Where Innovation Begins (Created by Tanishk Shukla)
    `.trim();

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        showToast('Project blueprint copied to clipboard!', 'success');
      }).catch(() => {
        fallbackCopy(text);
      });
    } else {
      fallbackCopy(text);
    }
  }

  function fallbackCopy(text) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
      showToast('Project blueprint copied to clipboard!', 'success');
    } catch {
      showToast('Could not auto-copy, please copy manually.', 'error');
    }
    document.body.removeChild(ta);
  }

  function toggleFavorite(project) {
    const favorites = getFavorites();
    const existingIndex = favorites.findIndex(f => f.id === project.id);

    if (existingIndex >= 0) {
      favorites.splice(existingIndex, 1);
      saveFavorites(favorites);
      showToast('Removed from saved favorites.', 'info');
    } else {
      favorites.unshift({
        id: project.id,
        title: project.title,
        overview: project.overview,
        category: project.category,
        difficulty: project.difficulty,
        goal: project.goal
      });
      saveFavorites(favorites);
      showToast('Added to your saved favorites!', 'success');
    }
  }

  // Drawer handlers
  function openFavoritesDrawer() {
    if (!favoritesDrawer) return;
    updateFavoritesUI();
    favoritesDrawer.classList.add('open');
    favoritesDrawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeFavoritesDrawer() {
    if (!favoritesDrawer) return;
    favoritesDrawer.classList.remove('open');
    favoritesDrawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (navFavoritesBtn) {
    navFavoritesBtn.addEventListener('click', openFavoritesDrawer);
  }

  if (closeDrawerBtn) {
    closeDrawerBtn.addEventListener('click', closeFavoritesDrawer);
  }

  if (favoritesDrawer) {
    favoritesDrawer.addEventListener('click', (e) => {
      if (e.target === favoritesDrawer) closeFavoritesDrawer();
    });
  }

  if (favoritesBody) {
    favoritesBody.addEventListener('click', (e) => {
      const deleteBtn = e.target.closest('.saved-idea-delete-btn');
      if (deleteBtn) {
        const idToDelete = deleteBtn.getAttribute('data-delete-id');
        const favorites = getFavorites().filter(f => f.id !== idToDelete);
        saveFavorites(favorites);
        showToast('Idea removed from favorites.', 'info');
      }
    });
  }

  if (clearAllFavoritesBtn) {
    clearAllFavoritesBtn.addEventListener('click', () => {
      const favorites = getFavorites();
      if (favorites.length === 0) return;
      if (window.confirm('Are you sure you want to clear all saved project blueprints?')) {
        saveFavorites([]);
        showToast('All saved ideas cleared.', 'info');
      }
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && favoritesDrawer && favoritesDrawer.classList.contains('open')) {
      closeFavoritesDrawer();
    }
  });

  if (generateBtn) {
    generateBtn.addEventListener('click', handleGenerate);
  }

  // Initial Load: Generate first default idea & update favorites UI
  updateFavoritesUI();
  handleGenerate();
}

/* ==========================================================================
   8. SECTION D — LEARNING ROADMAP (INTERACTIVE MILESTONES & PERSISTENCE)
   ========================================================================== */
function initLearningRoadmap() {
  const timeline = document.getElementById('roadmapTimeline');
  const progressBar = document.getElementById('roadmapProgressBar');
  const progressText = document.getElementById('roadmapProgressText');
  const percentageText = document.getElementById('roadmapPercentageText');
  const resetBtn = document.getElementById('resetRoadmapBtn');

  if (!timeline) return;

  function getCompletedStages() {
    try {
      const saved = localStorage.getItem(STORAGE_ROADMAP_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  }

  function saveCompletedStages(stages) {
    try {
      localStorage.setItem(STORAGE_ROADMAP_KEY, JSON.stringify(stages));
      updateRoadmapProgress();
    } catch (err) {
      console.warn('LocalStorage error:', err);
    }
  }

  function updateRoadmapProgress() {
    const completed = getCompletedStages();
    const count = completed.length;
    const total = ROADMAP_STAGES.length;
    const percentage = Math.round((count / total) * 100);

    if (progressBar) progressBar.style.width = `${percentage}%`;
    if (progressText) progressText.textContent = `${count} of ${total} Milestones Completed`;
    if (percentageText) percentageText.textContent = `${percentage}%`;

    // Update milestone cards styling
    document.querySelectorAll('.roadmap-milestone').forEach(card => {
      const stageId = card.getAttribute('data-stage-id');
      const isCompleted = completed.includes(stageId);
      const toggleBtn = card.querySelector('.milestone-toggle-btn');

      if (isCompleted) {
        card.classList.add('completed');
        if (toggleBtn) {
          toggleBtn.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span>Completed</span>
          `;
        }
      } else {
        card.classList.remove('completed');
        if (toggleBtn) {
          toggleBtn.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>
            <span>Mark Complete</span>
          `;
        }
      }
    });

    // Celebrate with confetti if all stages completed!
    if (count === total && count > 0) {
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // Fallback gracefully
      }
    }
  }

  // Render 6 Stages
  timeline.innerHTML = ROADMAP_STAGES.map(stage => `
    <div class="roadmap-milestone" data-stage-id="${stage.id}">
      <div class="milestone-node-wrap">
        <button class="milestone-node-btn" aria-label="Toggle completion for ${stage.name}">
          0${stage.stageNumber}
        </button>
      </div>
      <div class="milestone-content-card">
        <div class="milestone-header-row">
          <span class="milestone-phase-badge">${stage.phase}</span>
          <span class="milestone-duration-pill">${stage.duration}</span>
        </div>
        <h4 class="milestone-title">${stage.name}</h4>
        <p class="milestone-desc">${stage.description}</p>
        
        <div class="milestone-skills-wrap">
          <div class="milestone-subheading">Core Competencies:</div>
          <div class="milestone-skills-tags">
            ${stage.keySkills.map(skill => `<span class="milestone-skill-pill">${skill}</span>`).join('')}
          </div>
        </div>

        <div class="milestone-challenge-box">
          <div class="challenge-title">Hands-On Mini Challenge:</div>
          <div class="challenge-desc">${stage.practicalChallenge}</div>
        </div>

        <div class="milestone-footer-row">
          <span class="milestone-duration-pill">Resource: ${stage.recommendedResource}</span>
          <button class="milestone-toggle-btn" aria-label="Toggle milestone state">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>
            <span>Mark Complete</span>
          </button>
        </div>
      </div>
    </div>
  `).join('');

  // Handle click toggling
  timeline.addEventListener('click', (e) => {
    const trigger = e.target.closest('.milestone-toggle-btn, .milestone-node-btn');
    if (trigger) {
      const milestone = trigger.closest('.roadmap-milestone');
      if (milestone) {
        const stageId = milestone.getAttribute('data-stage-id');
        const completed = getCompletedStages();
        const index = completed.indexOf(stageId);

        if (index >= 0) {
          completed.splice(index, 1);
          showToast('Milestone status marked in-progress.', 'info');
        } else {
          completed.push(stageId);
          showToast('Milestone achieved! Excellent progress.', 'success');
        }

        saveCompletedStages(completed);
      }
    }
  });

  // Reset Progress
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      const completed = getCompletedStages();
      if (completed.length === 0) return;
      if (window.confirm('Reset all roadmap completion progress?')) {
        saveCompletedStages([]);
        showToast('Roadmap milestones reset.', 'info');
      }
    });
  }

  // Initial Progress State
  updateRoadmapProgress();
}

/* ==========================================================================
   9. SECTION F — CONTACT FORM VALIDATION & CLIENT SUBMISSION
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const nameInput = document.getElementById('contactName');
  const emailInput = document.getElementById('contactEmail');
  const subjectInput = document.getElementById('contactSubject');
  const messageInput = document.getElementById('contactMessage');
  const feedback = document.getElementById('formFeedback');
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');

  if (!form) return;

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;
    if (nameError) nameError.textContent = '';
    if (emailError) emailError.textContent = '';
    if (messageError) messageError.textContent = '';
    if (feedback) feedback.textContent = '';

    // Validate Name
    const nameVal = nameInput ? nameInput.value.trim() : '';
    if (!nameVal || nameVal.length < 2) {
      if (nameError) nameError.textContent = 'Please enter your name (at least 2 characters).';
      if (nameInput) nameInput.classList.add('input-error');
      isValid = false;
    } else {
      if (nameInput) nameInput.classList.remove('input-error');
    }

    // Validate Email
    const emailVal = emailInput ? emailInput.value.trim() : '';
    if (!emailVal || !validateEmail(emailVal)) {
      if (emailError) emailError.textContent = 'Please provide a valid email address.';
      if (emailInput) emailInput.classList.add('input-error');
      isValid = false;
    } else {
      if (emailInput) emailInput.classList.remove('input-error');
    }

    // Validate Message
    const msgVal = messageInput ? messageInput.value.trim() : '';
    if (!msgVal || msgVal.length < 10) {
      if (messageError) messageError.textContent = 'Please provide a message with at least 10 characters.';
      if (messageInput) messageInput.classList.add('input-error');
      isValid = false;
    } else {
      if (messageInput) messageInput.classList.remove('input-error');
    }

    if (!isValid) {
      showToast('Please correct the highlighted form errors.', 'error');
      return;
    }

    // Successful Client-Side Mailto Trigger
    const subjectVal = subjectInput && subjectInput.value.trim() ? subjectInput.value.trim() : 'NEXORA Platform Inquiry';
    const recipient = 'tanishkshukla.dev@gmail.com';
    const mailtoUri = `mailto:${recipient}?subject=${encodeURIComponent(subjectVal)}&body=${encodeURIComponent(`Hi Tanishk,\n\nName: ${nameVal}\nEmail: ${emailVal}\n\nMessage:\n${msgVal}\n\n[Sent from NEXORA Interactive Web Application]`)}`;

    if (feedback) {
      feedback.className = 'form-status-feedback status-success';
      feedback.innerHTML = `✓ Thank you, ${nameVal}! Launching your default email client...`;
    }

    showToast('Launching your mail client to send inquiry to Tanishk Shukla.', 'success');

    // Trigger mailto client
    setTimeout(() => {
      window.location.href = mailtoUri;
      form.reset();
    }, 600);
  });

  // Clear errors on input
  [nameInput, emailInput, messageInput].forEach(input => {
    if (input) {
      input.addEventListener('input', () => {
        input.classList.remove('input-error');
      });
    }
  });
}

/* ==========================================================================
   10. APP BOOTSTRAPPER
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  initAmbientCursorGlow();
  initNavigation();
  initThreeHero();
  initGsapAnimations();
  initTechnologiesSection();
  initInnovationLab();
  initLearningRoadmap();
  initContactForm();

  console.log(
    `%c NEXORA %c Where Innovation Begins %c\nArchitected by Tanishk Shukla (GLA University, Mathura - Section AN)\nDeployment slug: tanishk-shukla-an-nexora`,
    'background: #00E5FF; color: #070B18; font-weight: bold; padding: 4px 8px; border-radius: 4px;',
    'background: #8B5CF6; color: #FFFFFF; font-weight: bold; padding: 4px 8px; border-radius: 4px;',
    'color: #94A3B8; font-size: 11px;'
  );
});
