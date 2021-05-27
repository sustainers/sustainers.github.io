---
layout: blog
title: Blog
slug: blog
---

<h1 class="h2 text-center mb-4">The Sustain Blog</h1>

<section class="py-5">
  <div class="container">
    <article class="row">
      <div class="col-lg-8 mx-auto">
        <p class="mb-4">Exploring open source sustainability one blog post at a time.</p>

        {% for post in site.posts %}
          <div>
            <a class="btn-block d-flex justify-content-between align-items-center" href="{{ post.url }}">
              <span>{{ post.title }}</span>
              <span>›</span>
            </a>
          </div>
        {% endfor %}
      </div>
    </article>
  </div>
</section>