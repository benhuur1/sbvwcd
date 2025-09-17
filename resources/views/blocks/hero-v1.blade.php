<div class="hero-v1-block">
    <h3>{{ $title }}</h3>
    <div class="block-content">
        {!! wp_kses_post($content) !!}
    </div>
</div>