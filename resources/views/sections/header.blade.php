<header class="container py-10 px-3 flex justify-between mx-auto banner">
    {{ the_custom_logo();}}
 
  @if (has_nav_menu('primary_navigation'))
    <nav class="nav-primary" aria-label="{{ wp_get_nav_menu_name('primary_navigation') }}">
      {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav', 'echo' => false]) !!}
      
      <x-button
          link="#" 
          label="PARTNER WITH US"
          class="navegation-button"
      />    
      </nav>
  @endif
</header>
