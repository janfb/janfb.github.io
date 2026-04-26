---
layout: page
permalink: /talks/
title: talks
description: Conference talks, invited seminars, and tutorials.
nav: true
nav_order: 4
---

<div class="talks">
  {% assign talks_by_year = site.talks | sort: "date" | reverse | group_by_exp: "talk", "talk.date | date: '%Y'" %}
  {% for year_group in talks_by_year %}
    <h2 class="year">{{ year_group.name }}</h2>
    <div class="talk-list">
      {% for talk in year_group.items %}
        <div class="talk-item" style="margin-bottom: 1.5rem;">
          <h3 class="talk-title" style="margin-bottom: 0.25rem;">
            {% if talk.event_url %}
              <a href="{{ talk.event_url }}">{{ talk.title }}</a>
            {% else %}
              {{ talk.title }}
            {% endif %}
          </h3>
          <div class="talk-meta" style="color: var(--global-text-color-light); font-size: 0.95em;">
            <em>{{ talk.venue }}</em>
            {% if talk.coauthors %} · with {{ talk.coauthors }}{% endif %}
            · {{ talk.date | date: "%B %-d, %Y" }}
          </div>
          {% if talk.content and talk.content != "" %}
            <div class="talk-description" style="margin-top: 0.5rem;">
              {{ talk.content }}
            </div>
          {% endif %}
        </div>
      {% endfor %}
    </div>
  {% endfor %}
</div>
