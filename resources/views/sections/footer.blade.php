<footer class="bg-neutral-700  py-20 px-4">
    <div class="flex flex-col container mx-auto">
        <div class="flex justify-between items-center border-b pb-5 border-neutral-100">
            <h2 class="text-neutral-100">Partner with Us</h2>
            <x-button
                link="#" 
                label="PARTNER WITH US"
                version="primary-small-button"
            />   
        </div>
        <div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-20 gap-10">
                <div>
                    <h3 class="medium-subhead-bold mb-10">SBVWCD</h3>
                    <p class="text-neutral-100">1630 West Redlands Blvd. Suite A Redlands, California 92373</p>
                </div>
                <div>
                    <h3 class="medium-subhead-bold mb-10">Quick Links</h3>
                    {!! wp_nav_menu(['theme_location' => 'footer_quick_links', 'menu_class' => 'footer-fields', 'echo' => false]) !!}

                </div>
                <div>
                    <h3 class="medium-subhead-bold mb-10">Contact us</h3>
                    {!! wp_nav_menu(['theme_location' => 'footer_contact_us', 'menu_class' => 'footer-fields', 'echo' => false]) !!}

                </div>
                <div>
                    <h3 class="medium-subhead-bold mb-10">Office Hours</h3>
                    {!! wp_nav_menu(['theme_location' => 'footer_office_hours', 'menu_class' => 'footer-fields', 'echo' => false]) !!}
                </div>
            </div>
        </div>

        <div class="flex justify-between items-center border-neutral-100 border-t  pt-8">
            <p class="text-neutral-100"> Copyright © {{ date('Y') }} SBVWCD. All Rights Reserved.</p>
            <div class="flex gap-2 text-neutral-100">
                <p>Term & Conditions</p>
                -
                <p>Privacy Policy</p>
                -
                <p>Sitemap</p>
                -
                <p>by GRIDDL</p>
            </div>
        </div>
    </div>
</footer>