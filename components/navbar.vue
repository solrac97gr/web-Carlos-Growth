<template>
  <header>
    <div class="wraper">
      <a href="/" class="logo">
        <picture>
          <source
            srcset="~/assets/images/logo-largo.svg"
            media="(max-width: 768px)"
          />
          <source srcset="~/assets/images/logo-largo.svg" />
          <img
            srcset="~/assets/images/logo-largo.svg"
            alt="Logo Growth hacker"
          />
        </picture>
      </a>
      <nav>
        <ul class="navitems">
          <li class="navitem">
            <nuxt-link class="navitem" to="/">Inicio</nuxt-link>
          </li>
          <li class="navitem">
            <nuxt-link class="navitem" to="/resumen">Resumen</nuxt-link>
          </li>
          <li class="navitem">
            <nuxt-link class="navitem" to="/portafolio">Portafolio</nuxt-link>
          </li>
          <li class="navitem">
            <a class="navitem" href="/blog">Blog</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.wraper {
  display: flex;
  align-content: center;
  justify-content: space-between;
  box-shadow: 0px 0px 4px -1px rgba(0, 0, 0, 0.75);
  align-items: center;
}
ul {
  display: flex;
  align-content: center;
  justify-content: space-between;
  list-style: none;
  align-items: center;
  margin: 0px !important;
  padding-right: 23px;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
}
.logo {
  padding: 11px;
  width: 200px;
}
li .navitem {
  display: block;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 1.05em;
  color: #001b32;

  font-weight: 600;
  text-decoration: none;
  padding: 18px;
  &.nuxt-link-exact-active.nuxt-link-active {
    border-bottom: 5px solid #821d25;
  }
}

@media (max-width: 600px) {
  .wraper {
    display: flex;
    flex-direction: column;
    align-content: center;
    text-align: center;
    justify-content: space-between;
    box-shadow: 0px -2px 11px -1px rgba(0, 0, 0, 0.75);
    padding-top: 10px;
  }
  ul {
    padding: 10px;
    padding-bottom: 0px;
  }
  .navitem {
    text-decoration: none;
    border-bottom: transparent;
    &.nuxt-link-exact-active.nuxt-link-active {
      border-bottom: 5px solid #821d25;
    }
  }
  .logo {
    width: 180px;
  }
}
</style>
