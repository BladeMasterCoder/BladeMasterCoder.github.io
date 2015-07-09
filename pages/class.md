---
layout: default
title: Class
permalink: /pages/class.html
---
<div class="home">
{% for category in site.categories %} 

      <div class="list-group">
                <h2 class="center">{{ category[0] }}</h2>
                {% for post in category[1] %}
                  <a href="{{ post.url }}" class="list-group-item">{{post.title}}</a>
                {% endfor %}
      </div>

{% endfor %}
</div>