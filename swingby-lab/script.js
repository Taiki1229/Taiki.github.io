document.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener('click',event=>{const target=document.querySelector(link.getAttribute('href'));if(target){event.preventDefault();target.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});}}));
document.querySelector('.daily img').src='assets/daily.png';
const processIcons=[
  '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M23 45h18M25 52h14M22 35c-4-3-6-8-6-13a16 16 0 0 1 32 0c0 5-2 10-6 13-2 3-3 6-3 8H25c0-2-1-5-3-8Z"/><path d="M32 2v7M12 10l5 5M52 10l-5 5M3 29h8M53 29h8"/></svg>',
  '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M25 5h14M29 5v18L13 48a8 8 0 0 0 7 11h24a8 8 0 0 0 7-11L35 23V5"/><path d="M19 43h26M24 50h16M40 29l5 5M24 29l-4 4"/></svg>',
  '<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="18" r="9"/><circle cx="13" cy="26" r="7"/><circle cx="51" cy="26" r="7"/><path d="M17 57c0-10 6-17 15-17s15 7 15 17M2 55c0-9 4-15 11-15 4 0 7 1 9 4M62 55c0-9-4-15-11-15-4 0-7 1-9 4"/></svg>'
];
document.querySelectorAll('.line-icon').forEach((icon,index)=>{icon.innerHTML=processIcons[index];});
const videoThumbnails=document.querySelectorAll('.videos article img');
videoThumbnails[1].src='assets/youtube-island.png';
videoThumbnails[2].src='assets/youtube-motorcycle-city.png';
const valueIcons=document.querySelectorAll('.value-card img');
valueIcons[0].src='assets/mission-transparent.png';
valueIcons[1].src='assets/vision-transparent.png';
const lifestyleImages=document.querySelectorAll('.lifestyle-grid article img');
lifestyleImages[0].src='assets/mobility-reference.png';
lifestyleImages[1].src='assets/travel-reference.png';
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
