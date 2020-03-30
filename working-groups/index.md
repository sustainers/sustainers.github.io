---
layout: default
title: Working Groups
slug: Sustain Working Groups
---

<h1 class="h2 text-center mb-4">Sustain Working Groups</h1>

<div class="container events">
  <div class="row">
    <div class="col-md-8 offset-md-2">
      <p>At the 2020 Sustain Summit, dozens of small groups met and discussed all aspects of what sustainability means. At the end of the day, we decided to hold these conversations going forward, and to ensure that what we learned didn't stay in a single room. These working groups stemmed from those efforts, or from conversations had by Sustainers around the same time.</p>

      <p>All of our work and organizing is open source. If you're interested in a working group, want to get involved and help out, or want to found your own working group around sustainability and code, get in touch and let us know.</p>
      <hr>
      <p class="text-center tealdark">These groups are active! Give a shout if you want to be involved. We'll eventually link these groups to more detailed pages with resources and information.</p>
    </div>
  </div>
</div>

<div class="container">
  <div class="row wgs">
    {% assign wgs = site.data.wgs | sort: 'ranking' | reverse %}
    {% for wg in wgs %}
      {% if wg.status == 'Active' %}
        {% assign loopindex = forloop.index | modulo: 3 %}
          <div class="col-xs-10 offset-xs-1 col-md-4">
            <div class="wg-container">
              <h4>
                {{ wg.title }}
              </h4>
              <p class="details">{{ wg.description }}</p>
              <p class="details"><b>Bottom liner:</b> {{ wg.bottomliner }}</p>
              {% if wg.url %}
                <p class="text-center"><a class="btn learn-more" href="{{ wg.slug }}">
                  Learn More
                </a></p>
              {% endif %}
            </div>
          </div>
      {% endif %}
    {% endfor %}
  </div>
</div>


<div class="row wg-title">
  <div class="col-md-8 offset-md-2">
    <h3 class="text-center mb-4">Incubating</h3>
    <p class="text-center">These groups are in the works, but either haven't had significant work or haven't had their first meeting. If you're interested in joining one, get in touch!</p>
  </div>
</div>

<div class="row mb-4 wgs">
  {% assign wgs = site.data.wgs | sort: 'ranking' | reverse %}
  {% for wg in wgs %}
    {% if wg.status == 'Incubating' %}
      {% assign loopindex = forloop.index | modulo: 3 %}
        <div class="col-xs-10 offset-xs-1 col-md-4">
          <div class="wg-container">
            <h4>
              {{ wg.title }}
            </h4>
            <p class="details">{{ wg.description }}</p>
            <p class="details"><b>Bottom liner:</b> {{ wg.bottomliner }}</p>
            {% if wg.url %}
              <p class="text-center"><a class="btn learn-more" href="{{ wg.slug }}">
                Learn More
              </a></p>
            {% endif %}
          </div>
        </div>
      {% if forloop.index == 3 %}
        <div class="clearfix visible-sm-block"></div>
      {% elsif forloop.index == 4 %}
        <div class="clearfix visible-md-block visible-lg-block"></div>
      {% elsif forloop.index == 12 %}
        <div class="clearfix visible-md-block visible-lg-block"></div>
      {% endif %}
    {% endif %}
  {% endfor %}
</div>

<!--
<div class="row wg-title">
  <div class="col-md-8 offset-md-2">
    <h3 class="text-center mb-4">Inactive groups</h3>
    <p class="text-center">These groups are on hold at the moment. Feel free to check in to see if that status can be changed.</p>
  </div>
</div>

<div class="row mb-4 wgs">
  {% assign wgs = site.data.wgs | sort: 'ranking' | reverse %}
  {% for wg in wgs %}
    {% if wg.status == 'On Hold' %}
      {% assign loopindex = forloop.index | modulo: 3 %}
        <div class="col-xs-10 offset-xs-1 col-md-4">
          <div class="wg-container">
            {% if wg.url %}<a href="{{ wg.url }}">{% endif %}
              <h4>
                {{ wg.title }}
              </h4>
            {% if wg.url %}</a>{% endif %}
            <p class="details">{{ wg.description }}</p>
            <p class="details"><b>Bottom liner:</b> {{ wg.bottomliner }}</p>
            {% if wg.url %}
              <a class="learn-more" href="{{ wg.url }}">
                Learn More
              </a>
            {% endif %}
          </div>
        </div>
      {% if forloop.index == 3 %}
        <div class="clearfix visible-sm-block"></div>
      {% elsif forloop.index == 4 %}
        <div class="clearfix visible-md-block visible-lg-block"></div>
      {% elsif forloop.index == 12 %}
        <div class="clearfix visible-md-block visible-lg-block"></div>
      {% endif %}
    {% endif %}
  {% endfor %}
</div>
-->