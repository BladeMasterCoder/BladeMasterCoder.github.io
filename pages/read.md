---
layout: page
title: 读书
permalink: /pages/read.html
---


<div>
	{% for page in site.pages %}
		{%if page.categories[0] == '读书'%}
			<a href="{{page.url}}"><img src="{{ book.cover }}" alt="cover" class="img-thumbnail"></a>
		{% endif%}
	{% endfor %}
</div>
