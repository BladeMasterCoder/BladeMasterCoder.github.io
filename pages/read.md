---
layout: default
title: 读书
permalink: /pages/read.html
---


<div>
	{% for page in site.posts %}
	<p>{{site.posts.size}}</p> 
			{% for book in page.books %}
				<a href="{{page.url}}"><img src="{{ book.cover }}" alt="cover" class="img-thumbnail"></a>
			{% endfor %}
	{% endfor %}
</div>
