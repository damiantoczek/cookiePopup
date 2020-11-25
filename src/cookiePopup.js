function cookiePopup(){
  let doc = document,
    cookiePopup = doc.getElementById('cookiePopup'),
    getCookie = key => doc.cookie.split('; ').find(row => row.startsWith(key))?.split('=')[1],
    setCookie = (f, s, m) => { doc.cookie = `cookiePopup=${f},${s},${m}`; cookiePopup.classList.add('hidden')}

  if(!!getCookie('cookiePopup')) {
    let [f,s,m] = getCookie('cookiePopup').split(',').map(v => v === 'true' ? true : false)
    if(f){
      // YOUR websites cookies here, shopping cart cookie etc.
      console.log('Cookie 🍪');
    }

    if(s){
      /* YOUR STATISTICS and ANALYSIS ETC SCRIPT
      let el1 = doc.createElement('script')
      el1.src = 'https://www.googletagmanager.com/gtag/js?id=UA-123-1'
      el1.async = true
      document.head.appendChild(el1)
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'UA-123-1');
      */
    }

    if(m){
      /* YOUR FACEBOOK PIXEL Marketing SCRIPT etc
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '123');
      fbq('track', 'PageView');
      */
    }
  }
  else {
    cookiePopup.classList.remove('hidden')

    doc.getElementById('cookiePopup_yes').onclick = () => {
      setCookie(true, true, true)
      window.location.reload()
    }

    doc.getElementById('cookiePopup_save').onclick = () => {
      let f = doc.getElementById('cookieF'),
        s = doc.getElementById('cookieS'),
        m = doc.getElementById('cookieM')
      setCookie(f.checked,s.checked,m.checked)
      window.location.reload()
    }

    doc.getElementById('cookiePopup_no').onclick = () => {
      setCookie(false, false, false)
    }
  }
}

window.onload = cookiePopup
