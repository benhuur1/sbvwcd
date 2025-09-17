<section class="py-12 bg-white px-4">
    <div class="max-w-[1120px] mx-auto grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-10 xl:grid-cols-[485px_85px_550px] xl:gap-x-0 items-center">

        {{-- Text Column --}}
        <div class="md:col-start-1 xl:col-start-1 md:row-start-1">
            @if (!empty($title))
                <div class="pb-10">
                    <h2 class="font-heading font-light text-7xl md:text-7xl text-green-600 leading-tight italic">
                        {!! $title !!}
                    </h2>
                </div>
            @endif

            @if (!empty($description))
                <div class="sbvwcd-description font-body text-gray-700 text-sm leading-relaxed space-y-5 max-w-prose">
                    {!! $description !!}
                </div>
            @endif
        </div>
        {{-- Fim Text Column --}}

        {{-- Spacer (84px) — desktop apenas --}}
        <div class="hidden md:block"></div>

        {{-- Image Column --}}
        <div class="relative flex justify-center md:justify-end md:col-start-2 xl:col-start-3 md:row-start-1">

            @if (!empty($imageUrl))
                <img src="{{ $imageUrl }}" alt="{{ $imageAlt ?? '' }}"
                    class="w-full max-w-[550px] rounded shadow-md" />
            @endif

            @if (!empty($badgeUrl))
                <img src="{{ $badgeUrl }}" alt="{{ $badgeAlt ?? '' }}"
                    class="absolute left-[54px] bottom-[-50px] w-28 md:w-42" />
            @endif
        </div>

    </div>
</section>
