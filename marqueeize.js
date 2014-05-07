if(jQuery){
var divs = jQuery('div');
for(var i = 0, div; div = divs[i++];){var stuff = jQuery(div).children().detach(); var m = jQuery('<marquee/>').attr('scrollamount', 10).attr('truespeed', 'truespeed').attr('scrolldelay', 40).attr('behavior', 'alternate'); stuff.appendTo(m); m.appendTo(jQuery(div))};
}