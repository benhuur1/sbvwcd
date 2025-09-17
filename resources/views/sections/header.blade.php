
<header class="container py-10 px-3 flex justify-between items-center mx-auto banner relative">
    {{ the_custom_logo();}}

    <!-- Desktop Menu -->
    @if (has_nav_menu('primary_navigation'))
      <nav class="nav-primary hidden lg:flex" aria-label="{{ wp_get_nav_menu_name('primary_navigation') }}">
        {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav', 'echo' => false]) !!}
        <x-button
            link="#" 
            label="PARTNER WITH US"
            class="navegation-button"
        />
      </nav>
    @endif

    <!-- Hamburger Button -->
    <button id="menu-toggle" class="lg:hidden flex items-center px-3 py-2 focus:outline-none" aria-label="Open menu">
      <div class="w-6 h-6 flex flex-col justify-center space-y-1">
        <span id="line1" class="block w-full h-0.5 bg-current transition-transform duration-300"></span>
        <span id="line2" class="block w-full h-0.5 bg-current transition-opacity duration-300"></span>
        <span id="line3" class="block w-full h-0.5 bg-current transition-transform duration-300"></span>
      </div>
    </button>

    <!-- Mobile Menu -->
    <div id="mobile-menu" class="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t z-50 p-4 opacity-0 translate-y-2 transition-all duration-300 pointer-events-none">
      @if (has_nav_menu('primary_navigation'))
        <nav class="nav-primary" aria-label="{{ wp_get_nav_menu_name('primary_navigation') }}">
          {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav flex flex-col space-y-3', 'echo' => false]) !!}
        </nav>
        <div class="mt-6">
          <x-button
              link="#" 
              label="PARTNER WITH US"
              class="w-fit"
          />
        </div>
      @endif
    </div>
</header>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const line1 = document.getElementById('line1');
    const line2 = document.getElementById('line2');
    const line3 = document.getElementById('line3');
    let isOpen = false;

    menuToggle.addEventListener('click', function() {
        isOpen = !isOpen;
        
        if (isOpen) {
            mobileMenu.classList.remove('opacity-0', 'translate-y-2', 'pointer-events-none');
            mobileMenu.classList.add('opacity-100', 'translate-y-0');
            
            line1.classList.add('rotate-45', 'translate-y-2');
            line2.classList.add('opacity-0');
            line3.classList.add('-rotate-45', '-translate-y-2');
        } else {
            mobileMenu.classList.remove('opacity-100', 'translate-y-0');
            mobileMenu.classList.add('opacity-0', 'translate-y-2', 'pointer-events-none');
            
            line1.classList.remove('rotate-45', 'translate-y-2');
            line2.classList.remove('opacity-0');
            line3.classList.remove('-rotate-45', '-translate-y-2');
        }
    });

    document.addEventListener('click', function(event) {
        if (isOpen && !menuToggle.contains(event.target) && !mobileMenu.contains(event.target)) {
            menuToggle.click();
        }
    });
});
</script>
