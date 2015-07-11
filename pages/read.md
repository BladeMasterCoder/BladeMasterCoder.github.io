---
layout: page
title: Read
permalink: /pages/read.html
---


<div>
	{% for book in site.books %}
	<div class="target-fix" id = "{{tag[0]}}" name="{{tag[0]}}">
		<a href="{{ book.url }}"><img src="{{ book.cover }}" alt="cover" class="img-thumbnail"></a>
	</div>	
	{% endfor %}
</div>
