<!-- EclipsezAI.vue -->
<template>
  <div class="landing-page">
    <!-- Navbar -->
    <nav class="navbar" :class="{ scrolled: hasScrolled }">
      <div class="logo-container">
        <!-- <img src="/logo.svg" alt="eclipsez.ai" class="logo" /> -->
        <span class="brand-name">eclipsez.ai</span>
      </div>
      <div class="nav-links">
        <a href="#about">About</a>
        <a href="#features">Features</a>
        <a href="#contact">Contact</a>
      </div>
      <div class="mobile-toggle" @click="toggleMobileMenu">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div class="mobile-menu" :class="{ open: mobileMenuOpen }">
      <a href="#about" @click="closeMobileMenu">About</a>
      <a href="#features" @click="closeMobileMenu">Features</a>
      <a href="#contact" @click="closeMobileMenu">Contact</a>
    </div>

    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-background">
        <div class="particles"></div>
        <div class="eclipse"></div>
      </div>
      <div class="hero-content">
        <h1 class="title">eclipsez.ai</h1>
        <h2 class="subtitle">Where Intelligence Emerges From Shadow</h2>
        <div class="cta-buttons">
          <a href="#contact" class="btn primary">Enter the Eclipse</a>
          <a href="#features" class="btn secondary">Learn More</a>
        </div>
      </div>
      <div class="scroll-indicator">
        <div class="mouse">
          <div class="wheel"></div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about-section">
      <div class="container">
        <h2 class="section-title">Revealing the Hidden</h2>
        <p class="section-description">
          Eclipsez.ai operates at the threshold between known and unknown,
          illuminating insights that remain obscured to conventional systems.
          Our advanced neural networks cast light on the shadows of unexplored
          data territories.
        </p>

        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-value">99.7%</div>
            <div class="stat-label">Precision</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">4.2x</div>
            <div class="stat-label">Cognitive Enhancement</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">∞</div>
            <div class="stat-label">Potential</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="features-section">
      <div class="container">
        <h2 class="section-title">Beyond the Horizon</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🔮</div>
            <h3>Shadow Analysis</h3>
            <p>
              Detect patterns invisible to standard algorithms, revealing
              insights hidden in plain sight.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">⚡</div>
            <h3>Eclipse Processing</h3>
            <p>
              Quantum-inspired computing that operates in parallel dimensions of
              calculation.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🌑</div>
            <h3>Dark Learning</h3>
            <p>
              Our models evolve in the absence of illumination, developing
              unprecedented cognitive abilities.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🛡️</div>
            <h3>Umbral Security</h3>
            <p>
              Protection that exists beyond conventional defensive paradigms,
              cloaking your data in darkness.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact-section">
      <div class="container">
        <h2 class="section-title">Step Into the Shadow</h2>
        <p class="section-description">
          The age of eclipsed intelligence has begun. Request early access to
          our closed beta.
        </p>
        <form class="contact-form">
          <input type="email" placeholder="Your Email" required />
          <button type="submit" class="btn primary">Join the Eclipse</button>
        </form>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-logo">
            <!-- <img src="/logo.svg" alt="eclipsez.ai" /> -->
            <p>Where Intelligence Emerges From Shadow</p>
          </div>
          <div class="footer-links">
            <div class="link-group">
              <h4>Navigation</h4>
              <a href="#about">About</a>
              <a href="#features">Features</a>
              <a href="#contact">Contact</a>
            </div>
            <div class="link-group">
              <h4>Connect</h4>
              <div class="social-links">
                <a href="#" aria-label="Twitter">Twitter</a>
                <a href="#" aria-label="LinkedIn">LinkedIn</a>
                <a href="#" aria-label="GitHub">GitHub</a>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright">
          &copy; 2025 eclipsez.ai. All rights reserved.
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hasScrolled: false,
      mobileMenuOpen: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.initParticles();
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.hasScrolled = window.scrollY > 50;
    },
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
      document.body.classList.toggle("no-scroll", this.mobileMenuOpen);
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false;
      document.body.classList.remove("no-scroll");
    },
    initParticles() {
      const particlesContainer = document.querySelector(".particles");
      if (!particlesContainer) return;

      const particleCount = 50;
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div");
        particle.classList.add("particle");

        const size = Math.random() * 3 + 1;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 10 + 10;

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;

        particlesContainer.appendChild(particle);
      }
    },
  },
};
</script>

<style lang="scss">
// Variables
$color-bg-primary: #0a0a18;
$color-bg-secondary: #0e0e24;
$color-primary: #a269ff;
$color-secondary: #5432d3;
$color-text: #e0e0ff;
$gradient-primary: linear-gradient(135deg, $color-primary, $color-secondary);
$font-primary: "Orbitron", sans-serif;
$border-radius: 4px;
$transition-fast: 0.3s ease;
$transition-medium: 0.5s ease;
$box-shadow: 0 10px 20px rgba($color-primary, 0.2);

// Base Styles
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: $font-primary, sans-serif;
}

body {
  background-color: $color-bg-primary;
  color: $color-text;
  overflow-x: hidden;

  &.no-scroll {
    overflow: hidden;
  }
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
}

a {
  text-decoration: none;
  color: $color-text;
  transition: color $transition-fast;

  &:hover {
    color: $color-primary;
  }
}

.btn {
  display: inline-block;
  padding: 0.8rem 2rem;
  border-radius: $border-radius;
  font-weight: 600;
  cursor: pointer;
  transition: all $transition-fast;
  border: none;

  &.primary {
    background: $gradient-primary;
    color: $color-text;

    &:hover {
      transform: translateY(-3px);
      box-shadow: $box-shadow;
    }
  }

  &.secondary {
    background: transparent;
    border: 1px solid $color-primary;
    color: $color-text;

    &:hover {
      background-color: rgba($color-primary, 0.1);
      transform: translateY(-3px);
    }
  }
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
  background: $gradient-primary;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: $gradient-primary;
  }
}

.section-description {
  max-width: 800px;
  margin: 0 auto 3rem;
  text-align: center;
  font-size: 1.1rem;
  line-height: 1.6;
  opacity: 0.8;
}

// Navbar
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  transition: background-color $transition-medium;

  &.scrolled {
    background-color: rgba($color-bg-primary, 0.9);
    backdrop-filter: blur(10px);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  }

  .logo-container {
    display: flex;
    align-items: center;

    .logo {
      height: 40px;
      margin-right: 1rem;
    }

    .brand-name {
      font-size: 1.2rem;
      font-weight: 700;
      letter-spacing: 2px;
      background: $gradient-primary;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .nav-links {
    display: flex;
    gap: 2rem;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .mobile-toggle {
    display: none;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;

    .bar {
      width: 25px;
      height: 3px;
      background-color: $color-text;
      transition: $transition-fast;
    }

    @media (max-width: 768px) {
      display: flex;
    }
  }
}

// Mobile Menu
.mobile-menu {
  position: fixed;
  top: 0;
  right: -100%;
  width: 100%;
  height: 100vh;
  background-color: rgba($color-bg-secondary, 0.98);
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  transition: right $transition-medium;

  &.open {
    right: 0;
  }

  a {
    font-size: 1.5rem;
    padding: 1rem;
  }
}

// Hero Section
.hero-section {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding-top: 80px;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  :before {
    content: "";
    opacity: 0.1;
    display: block;
    width: 50%;
    height: 100%;
    background-image: url(/_nuxt/assets/images/dark-umbra.webp);
    background-repeat: no-repeat;
    background-size: contain;
    filter: blur(9px);
    margin: auto;
    left: 0;
    position: absolute;
    left: revert;
    right: 0;
    top: 0;
  }

  .particles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .particle {
    position: absolute;
    background-color: $color-primary;
    border-radius: 50%;
    opacity: 0.6;
    animation: float 15s linear infinite;
  }

  @keyframes float {
    0% {
      transform: translateY(0) rotate(0deg);
    }
    100% {
      transform: translateY(-100vh) rotate(360deg);
    }
  }

  .eclipse {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 600px;
    background: radial-gradient(
      circle,
      rgba($color-primary, 0.1) 0%,
      rgba($color-primary, 0) 70%
    );
    border-radius: 50%;
    animation: pulse 8s infinite;

    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 300px;
      height: 300px;
      background: radial-gradient(
        circle,
        rgba($color-secondary, 0.2) 0%,
        rgba($color-secondary, 0) 70%
      );
      border-radius: 50%;
      animation: pulse 6s infinite reverse;
    }
  }

  @keyframes pulse {
    0%,
    100% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0.2;
    }
    50% {
      transform: translate(-50%, -50%) scale(1.1);
      opacity: 0.3;
    }
  }
}

.hero-content {
  text-align: center;
  z-index: 1;
  padding: 1rem;

  .title {
    font-size: 4rem;
    margin-bottom: 1rem;
    font-weight: 800;
    letter-spacing: 5px;
    background: $gradient-primary;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: glow 3s infinite;

    @media (max-width: 768px) {
      font-size: 3rem;
    }
  }

  @keyframes glow {
    0%,
    100% {
      text-shadow: 0 0 20px rgba($color-primary, 0.3);
    }
    50% {
      text-shadow: 0 0 30px rgba($color-primary, 0.5);
    }
  }

  .subtitle {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    opacity: 0.8;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  .cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }
}

.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);

  .mouse {
    width: 30px;
    height: 50px;
    border: 2px solid $color-text;
    border-radius: 15px;
    position: relative;

    .wheel {
      width: 4px;
      height: 8px;
      background-color: $color-text;
      position: absolute;
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 2px;
      animation: scroll 1.5s infinite;
    }
  }

  @keyframes scroll {
    0% {
      transform: translateX(-50%) translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateX(-50%) translateY(20px);
      opacity: 0;
    }
  }
}

// About Section
.about-section {
  background-color: $color-bg-secondary;
  padding: 8rem 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
        rgba($color-primary, 0.05) 1px,
        transparent 1px
      ),
      linear-gradient(90deg, rgba($color-primary, 0.05) 1px, transparent 1px);
    background-size: 30px 30px;
    z-index: 0;
  }
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;

  .stat-card {
    background: rgba(darken($color-bg-secondary, 5%), 0.5);
    border-radius: $border-radius;
    padding: 2rem;
    text-align: center;
    transition: transform $transition-medium;
    border: 1px solid rgba($color-primary, 0.1);

    &:hover {
      transform: translateY(-10px);
    }

    .stat-value {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
      background: $gradient-primary;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .stat-label {
      font-size: 1rem;
      opacity: 0.8;
    }
  }
}

// Features Section
.features-section {
  padding: 8rem 0;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at center,
      rgba($color-primary, 0.1) 0%,
      transparent 70%
    );
    z-index: -1;
  }
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;

  .feature-card {
    background: rgba($color-bg-secondary, 0.5);
    border-radius: $border-radius;
    padding: 2rem;
    text-align: center;
    transition: all $transition-medium;
    border: 1px solid rgba($color-primary, 0.1);

    &:hover {
      transform: translateY(-10px);
      box-shadow: $box-shadow;
    }

    .feature-icon {
      font-size: 3rem;
      margin-bottom: 1.5rem;
    }

    h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: $color-primary;
    }

    p {
      font-size: 1rem;
      opacity: 0.8;
      line-height: 1.6;
    }
  }
}

// Contact Section
.contact-section {
  background-color: $color-bg-secondary;
  padding: 8rem 0;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at center,
      rgba($color-secondary, 0.1) 0%,
      transparent 70%
    );
    z-index: 0;
  }
}

.contact-form {
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  gap: 1rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  input {
    flex: 1;
    padding: 0.8rem 1rem;
    border-radius: $border-radius;
    border: 1px solid rgba($color-primary, 0.3);
    background: rgba($color-bg-primary, 0.3);
    color: $color-text;
    font-size: 1rem;

    &:focus {
      outline: none;
      border-color: $color-primary;
    }

    &::placeholder {
      color: rgba($color-text, 0.5);
    }
  }
}

// Footer
.footer {
  padding: 4rem 0 2rem;
  background-color: darken($color-bg-primary, 2%);
  border-top: 1px solid rgba($color-primary, 0.1);

  .footer-content {
    display: flex;
    justify-content: space-between;
    margin-bottom: 3rem;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 2rem;
    }

    .footer-logo {
      max-width: 300px;

      img {
        height: 40px;
        margin-bottom: 1rem;
      }

      p {
        opacity: 0.7;
        font-size: 0.9rem;
      }
    }

    .footer-links {
      display: flex;
      gap: 3rem;

      @media (max-width: 768px) {
        justify-content: space-between;
      }

      .link-group {
        h4 {
          color: $color-primary;
          margin-bottom: 1rem;
          font-size: 1.1rem;
        }

        a {
          display: block;
          margin-bottom: 0.7rem;
          opacity: 0.7;
          transition: opacity $transition-fast;

          &:hover {
            opacity: 1;
          }
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }
      }
    }
  }

  .copyright {
    text-align: center;
    opacity: 0.5;
    font-size: 0.9rem;
    padding-top: 2rem;
    border-top: 1px solid rgba($color-primary, 0.1);
  }
}

// Utilities
.fade-in {
  animation: fadeIn 1s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

// Scrollbar
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: $color-bg-primary;
}

::-webkit-scrollbar-thumb {
  background: $color-secondary;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: $color-primary;
}
</style>
