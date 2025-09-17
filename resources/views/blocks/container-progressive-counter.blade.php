<div class="bg-neutral-100 py-32">
    <div class="container flex flex-col items-center mx-auto px-4">
        <h2 class=" text-neutral-700 border-b-2 mb-28 border-green-600 h3-font pb-10 text-center">
            {{ $mainTitle }}
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <div class="text-center">
                <div class="h2-font text-green-600 italic mb-4" 
                     data-counter="{{ $counter1Number }}">0</div>
                <h3 class="text-neutral-700 text-l">
                    {!! $counter1Title !!}
                </h3>
            </div>
            
            <div class="text-center">
                <div class="h2-font text-green-600 italic mb-4" 
                     data-counter="{{ $counter2Number }}">0</div>
                <h3 class="text-neutral-700 text-l">
                    {!! $counter2Title !!}
                </h3>
            </div>
            
            <div class="text-center">
                <div class="h2-font text-green-600 italic mb-4" 
                     data-counter="{{ $counter3Number }}">0</div>
                <h3 class="text-neutral-700 text-l">
                    {!! $counter3Title !!}
                </h3>
            </div>
            
            <div class="text-center">
                <div class="h2-font text-green-600 italic mb-4" 
                     data-counter="{{ $counter4Number }}">0</div>
                <h3 class="text-neutral-700 text-l">
                    {!! $counter4Title !!}
                </h3>
            </div>
            
            <div class="text-center">
                <div class="h2-font text-green-600 italic mb-4" 
                     data-counter="{{ $counter5Number }}">0</div>
                <h3 class="text-neutral-700 text-l">
                    {!! $counter5Title !!}
                </h3>
            </div>
        </div>
    </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('[data-counter]');
    
    const animateCounter = (element) => {
        const targetValue = parseInt(element.getAttribute('data-counter'));
        const duration = 2000; // 2 segundos
        const increment = targetValue / (duration / 16); // 60fps
        let currentValue = 0;
        
        const updateCounter = () => {
            currentValue += increment;
            if (currentValue >= targetValue) {
                element.textContent = targetValue;
            } else {
                element.textContent = Math.floor(currentValue);
                requestAnimationFrame(updateCounter);
            }
        };
        
        updateCounter();
    };
    
    // Intersection Observer para iniciar animação quando entrar na tela
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                if (!counter.classList.contains('animated')) {
                    counter.classList.add('animated');
                    animateCounter(counter);
                }
            }
        });
    }, {
        threshold: 0.5 // Inicia quando 50% do elemento está visível
    });
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
});
</script>