<script setup>
import { ref, defineProps, onMounted } from 'vue';
import $ from 'jquery';

const isMenuOpen = ref(false);

const props = defineProps({
  receivedValue: {
    type: String,
    required: true,
  },
});

const localValue = ref(props.receivedValue);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function updateMenuColors() {
  console.log(localValue.value);

  $('ul li a').each(function() {
    $(this).css('color', 'black');

    if ($(this).attr('id') === localValue.value) {
      $(this).css('color', 'red');
    }
  });
}

onMounted(() => {
  updateMenuColors();
});
</script>

<template>
  <header>
    <nav>
      <h1>UnixHosting</h1>
      <button @click="toggleMenu" aria-label="Toggle menu" class="menu-toggle">☰</button>
      <ul :class="{ 'menu-open': isMenuOpen }">
        <div class="exit">
          <p @click="toggleMenu" class="exit_btn">&#10006;</p>
          <br>
          <h1 class="name_menu">UnixHosting</h1>
        </div>
        <li><a id="home" href="#home">Home</a></li>
        <li><a id="about" href="#about">About</a></li>
        <li><a href="#services">Web Hosting</a></li>
        <li><a href="#services">VPS</a></li>
        <li><a href="#contact">Help</a></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.exit {display: none;}

.exit_btn {
    position: relative;
    float: right;
    left: -15px;
    top: 15px;
    font-size: 20px;
    transition: all .4s;
    cursor: pointer;
}

.exit_btn:hover {opacity: .5;}

.name_menu {
    font-size: 25px;
    font-weight: bold;
    position: relative;
    margin-bottom: 20px;
    top: 15px;
    left: 18px;
}

h1 {
    position: absolute;
    top: 4px;
    left: 10px;
    color: var(--main_color);
}

header {
  background-color: var(--white);
  padding: 1rem;
  position: absolute;
  width: calc(100% - 90px);
  left: 30px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}

nav {
  display: flex;
  justify-content: flex-end;
  height: 40px;
  position: relative;
}

.menu-toggle {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  left: -30px;
  position: relative;
}

ul {
  list-style: none;
  width: 300px;
  background-color: var(--white);
  position: fixed;
  top: 0;
  right: -300px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  transition: right 0.3s ease-in-out;
}

ul.menu-open {right: 0;}

ul li a {
  color: var(--black);
  text-decoration: none;
  display: block;
  transition: all .4s;
}

li {
    position: relative;
    top: 12px;
}

ul li a:hover {color: var(--main_color);}

@media (max-width: 768px) {
  .menu-toggle {display: block;}
  ul {right: -300px;}
  ul.menu-open {right: 0;}
  .exit {display: block;}

  li {
    margin-bottom: 20px;
    left: 20px;
  }
}

@media (min-width: 769px) {
  .menu-toggle {display: none;}

  ul {
    position: static;
    width: auto;
    height: auto;
    display: flex;
    flex-direction: row;
  }

  ul li {margin-right: 20px;}
}
</style>
