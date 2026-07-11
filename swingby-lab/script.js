document.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener('click',event=>{const target=document.querySelector(link.getAttribute('href'));if(target){event.preventDefault();target.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});}}));
document.querySelector('.daily img').src='assets/daily.png';
const processIcons=[
  '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M23 45h18M25 52h14M22 35c-4-3-6-8-6-13a16 16 0 0 1 32 0c0 5-2 10-6 13-2 3-3 6-3 8H25c0-2-1-5-3-8Z"/><path d="M32 2v7M12 10l5 5M52 10l-5 5M3 29h8M53 29h8"/></svg>',
  '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M25 5h14M29 5v18L13 48a8 8 0 0 0 7 11h24a8 8 0 0 0 7-11L35 23V5"/><path d="M19 43h26M24 50h16M40 29l5 5M24 29l-4 4"/></svg>',
  '<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="18" r="9"/><circle cx="13" cy="26" r="7"/><circle cx="51" cy="26" r="7"/><path d="M17 57c0-10 6-17 15-17s15 7 15 17M2 55c0-9 4-15 11-15 4 0 7 1 9 4M62 55c0-9-4-15-11-15-4 0-7 1-9 4"/></svg>'
];
document.querySelectorAll('.line-icon').forEach((icon,index)=>{icon.innerHTML=processIcons[index];});
const videoThumbnails=document.querySelectorAll('.videos article img');
videoThumbnails[0].src='assets/lifestyle-surfing.png';
videoThumbnails[1].src='assets/youtube-island.png';
videoThumbnails[2].src='assets/youtube-motorcycle-city.png';
const valueIcons=document.querySelectorAll('.value-card img');
valueIcons[0].src='assets/mission-transparent.png';
valueIcons[1].src='assets/vision-transparent.png';
const lifestyleImages=document.querySelectorAll('.lifestyle-grid article img');
lifestyleImages[0].src='assets/mobility-reference.png';
lifestyleImages[1].src='assets/travel-reference.png';
lifestyleImages[2].src='assets/lifestyle-surfing.png';
const lifestyleIcons=[
  '<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="16" cy="47" r="7"/><circle cx="48" cy="47" r="7"/><path d="M16 47h10l9-20h8l5 12H31l-8-14h12M35 27l-6-9h-9"/></svg>',
  '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M4 34l25-6 12-18 5 2-5 18 18 8-2 5-19-4-12 13-5-2 7-15-23 4Z"/></svg>',
  '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M13 17h38v27H13zM24 53h16M32 44v9"/><path d="M22 28h20M22 35h13"/></svg>'
];
document.querySelectorAll('.lifestyle-grid b').forEach((icon,index)=>{icon.innerHTML=lifestyleIcons[index];});
const shootingStar=document.createElement('span');
shootingStar.className='shooting-star';
shootingStar.setAttribute('aria-hidden','true');
document.querySelector('.hero').appendChild(shootingStar);

const aboutText=document.querySelector('.about-text');
if(aboutText){aboutText.innerHTML=aboutText.innerHTML.replace('\u3053\u3053\u304b\u3089\u3001\u6b21\u306e\u6311\u6226\u304c\u59cb\u307e\u308a\u307e\u3059\u3002','\u6311\u6226\u304b\u3089\u5f97\u305f\u5b66\u3073\u304c\u3001<br>\u8ab0\u304b\u306e\u3001\u305d\u3057\u3066\u81ea\u5206\u81ea\u8eab\u306e\u6b21\u306e\u4e00\u6b69\u306b\u3064\u306a\u304c\u308b\u3053\u3068\u3092\u9858\u3063\u3066\u3002<br><br>\u4eca\u65e5\u3082\u3001\u65b0\u3057\u3044\u6311\u6226\u3092\u7d9a\u3051\u3066\u3044\u304d\u307e\u3059\u3002')}
const valueCardTexts=document.querySelectorAll('.value-card p');
if(valueCardTexts[0]){valueCardTexts[0].textContent='\u73fe\u72b6\u306e\u4ed5\u7d44\u307f\u3084\u3053\u308c\u307e\u3067\u306e\u6163\u7fd2\u306b\u5f15\u304d\u305a\u3089\u308c\u308b\u3053\u3068\u306a\u304f\u3001\u672c\u5f53\u306b\u751f\u7523\u6027\u3084\u8ab2\u984c\u89e3\u6c7a\u306b\u3064\u306a\u304c\u308b\u65b9\u6cd5\u306a\u306e\u304b\u3092\u691c\u8a3c\u3059\u308b\u3002\u5e38\u8b58\u3092\u524d\u63d0\u306b\u305b\u305a\u3001\u65b0\u305f\u306a\u8996\u70b9\u304b\u3089\u6700\u9069\u306a\u89e3\u6c7a\u7b56\u3092\u63a2\u3057\u7d9a\u3051\u307e\u3059\u3002'}
if(valueCardTexts[1]){valueCardTexts[1].textContent='\u6280\u8853\u3068\u6311\u6226\u3092\u901a\u3058\u3066\u3001\u65b0\u3057\u3044\u4fa1\u5024\u304c\u751f\u307e\u308c\u7d9a\u3051\u308b\u6a5f\u4f1a\u3092\u3064\u304f\u308b\u3002\u8ab0\u3082\u304c\u56fa\u5b9a\u89b3\u5ff5\u306b\u3068\u3089\u308f\u308c\u305a\u3001\u3088\u308a\u826f\u3044\u672a\u6765\u3078\u6311\u6226\u3067\u304d\u308b\u74b0\u5883\u3092\u76ee\u6307\u3057\u307e\u3059\u3002'}
