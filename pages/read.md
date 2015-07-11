---
layout: default
title: 读书
permalink: /pages/read.html
---


<div class="bookpiclist">
	{% for page in site.posts %}
			{% if page.categories[0] == '读书' %}
				{% for book in page.books %}
				<div class="bookpic">
					<div class="bookpic-wrapper">	
						<a href="{{page.url}}#{{ book.title }}"><img src="{{ book.cover }}" alt="cover" class="img-thumbnail">
							<div class="label">
                                <div class="label-text">
                                    <span class="text-title">{{ book.status }}</a>
                                </div>
                                <div class="label-bg"></div>
                            </div>						
						</a>
					</div>
				</div>
				{% endfor %}
			{% endif %}
	{% endfor %}
</div>
