(function(c){var a=c(".sub-nav-tree");a.length&&a.find("li.has-children").each(function(){var b=c(this),a=b.find("\x3e div:first-child"),d=c("\x3cbutton/\x3e").attr("type","button").text("\x3e"),e=a.find("span");d.on("click",function(){b.hasClass("open")?b.removeClass("open").find(".open").removeClass("open"):b.addClass("open").siblings(".open").removeClass("open").find(".open").removeClass("open")});d.prependTo(a);e.on("click",function(){d.trigger("click")})})})(jQuery);