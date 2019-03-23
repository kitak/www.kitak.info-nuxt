<template>
  <div>
    <header id="header">
      <a id="logo" href="/">
        <img src="https://avatars1.githubusercontent.com/u/228410?v=3&s=460" alt="www.kitak.info">
      </a>
      <h1>
        <a href="/">kitak.info</a>
      </h1>

      <div id="follow-icons">
        <a href="https://facebook.com/kei.kita2501" rel="me">
          <i class="fa fa-facebook-square fa-2x"></i>
        </a>&nbsp;
        <a href="https://twitter.com/kitak" rel="me">
          <i class="fa fa-twitter-square fa-2x"></i>
        </a>&nbsp;
        <a href="https://github.com/kitak" rel="me">
          <i class="fa fa-github-square fa-2x"></i>
        </a>
      </div>

      <h5>
        <a href="/about">About</a>
      </h5>
      <h5>
        <a href="/resume">Resume</a>
      </h5>
    </header>
    <main id="content">
      <nuxt/>
    </main>
    <footer id="footer">
      <section id="footer-message">
        &copy; kitak.info. All rights reserved.
        <a href="https://github.com/kathyqian/crisp-ghost-theme" target="_blank">Crisp</a> style by
        <a href="http://kathyqian.com" target="_blank">Kathy Qian</a>.
      </section>
    </footer>
  </div>
</template>
