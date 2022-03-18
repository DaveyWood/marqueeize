(function() {
  const marqueeize = () => {
    const divs = document.querySelectorAll('div');
    for (let i = 0, div; (div = divs[i++]); ) {
      let stuff = [...div.children];
      let m = document.createElement("marquee");
      m.setAttribute("scrollamount", 10)
      m.setAttribute("truespeed", "truespeed")
      m.setAttribute("scrolldelay", 40)
      m.setAttribute("behavior", "alternate");
      stuff.forEach(child => m.appendChild(child));
      div.appendChild(m);
    }
  }

  window.setTimeout(marqueeize, 30_000);
})();
