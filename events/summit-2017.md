---
layout: default
title: 2017 Summit
slug: 2017 Summit
---

<div class="row justify-content-center pt-4">
    <div class="col-12 col-md-8">
        <div class="media align-items-center">
            <img class="mr-3 img-fluid d-block rounded-circle" src="/assets/img/avatar.png" alt="Mikeal Rogers Avatar" width="100" height="100">
            <div class="media-body">
                “One of the best events that I’ve been to. It was a really, really good group of people.” - <a class="text-teal" href="https://changelog.com/rfc/20" rel="noopener" target="_blank">Mikeal Rogers</a>, RFC
            </div>
        </div>
    </div>
</div>

<div class="container-fluid">
    <div id="tickets-carousel" class="py-4 py-lg-5 tickets-carousel">
        <div id="ticketsCarousel" class="carousel slide carousel-show-three py-5">
            <div class="carousel-inner mx-auto">
                {%- for image in site.data.carousel -%}
                <div class="carousel-item justify-content-around{% if forloop.first %} active{% endif %}">
                    {%- assign temp_str = image | split: "." -%}
                    {%- assign img_fname = temp_str[0] -%}
                    {%- assign img_ext = temp_str[1] -%}

                    <img class="d-block img-fluid mx-auto" src="/assets/img/tickets/{{ img_fname }}.{{ img_ext }}" srcset="/assets/img/tickets/{{ img_fname }}.{{ img_ext }} 1x, /assets/img/tickets/{{ img_fname }}@2x.{{ img_ext }} 2x" alt="" width="400" height="267">
                </div>
                {%- endfor -%}
            </div>
            <a class="carousel-control-prev" href="#ticketsCarousel" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#ticketsCarousel" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
</div>
