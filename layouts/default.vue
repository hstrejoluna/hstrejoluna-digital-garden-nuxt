<template>
  <div>
    <header>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a :href="`/`" class="navbar-brand">🌳 HS Trejo Luna Digital Garden 🌳</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a :href="`/about`" class="nav-link">About</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <main>
      <nuxt />
    </main>
    <footer :id="$style.footer">
      <p>Copyleft 🄯 2023 guaranteed by GPLv2 license.</p>
      <div class="f"><span><a href="https://hstrejoluna.com" rel="noopener" target="_blank">HS Trejo
            Luna</a></span></div>
    </footer>
  </div>
</template>


<style module>
/* your CSS code using CSS Modules */
a {
  text-decoration: none;
}

#footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 6.5rem;
  padding-block: 20px;
}
</style>
