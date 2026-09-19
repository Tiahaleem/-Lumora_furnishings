// ============ Simply'Moh Furnishings — shared behaviour ============

// ---- EDIT THIS with your real WhatsApp number (no + or spaces) ----
const WHATSAPP_NUMBER = "2348125236606";
// ---------------------------------------------------------------

const HEART_ICON = '<svg viewBox="0 0 24 24"><path d="M12 21s-7.5-4.6-10-9.2C.3 8.4 2 4.5 5.8 4c2.1-.3 4 1 6.2 3.3C14.2 5 16.1 3.7 18.2 4c3.8.5 5.5 4.4 3.8 7.8C19.5 16.4 12 21 12 21z"/></svg>';
const BAG_ICON = '<svg viewBox="0 0 24 24"><path d="M17.6 6.3a4.5 4.5 0 0 0-8.9-.7L2 17.5C3.9 20.2 12 22 12 22s8.1-1.8 10-4.5z"/></svg>';

function loadWishlist(){
  try { return JSON.parse(localStorage.getItem('lumora-wishlist') || '[]'); }
  catch(e){ return []; }
}
function saveWishlist(list){
  try { localStorage.setItem('lumora-wishlist', JSON.stringify(list)); } catch(e){}
}
let wishlist = loadWishlist();

function updateWishCount(){
  const el = document.getElementById('wishCount');
  if(!el) return;
  el.textContent = wishlist.length;
  el.classList.toggle('show', wishlist.length > 0);
}

function productCardHTML(p){
  const isSaved = wishlist.indexOf(p.id) > -1;
  const msg = encodeURIComponent("Hi! I'd like the price and availability for the " + p.name + ".");
  return (
    '<div class="product-card">' +
      '<div class="product-media">' +
        '<a class="product-image-link" href="product.html?id=' + p.id + '">' +
          '<div class="placeholder-img">' +
            '<img loading="lazy" src="' + p.image + '" alt="' + p.name + '" onerror="this.remove()" onload="this.parentElement.classList.add(\'has-img\')">' +
            '<span class="ph-label">' + p.name + ' image</span>' +
          '</div>' +
          '<span class="product-badge">' + p.room + '</span>' +
        '</a>' +
        '<button class="wish-btn' + (isSaved ? ' active' : '') + '" data-id="' + p.id + '" aria-label="Save to wishlist">' + HEART_ICON + '</button>' +
      '</div>' +
      '<div class="product-info">' +
        '<a href="product.html?id=' + p.id + '"><h3>' + p.name + '</h3></a><p class="product-material">' + p.material + '</p>' +
        '<div class="product-bottom"><a class="enquire-link" target="_blank" rel="noopener" href="https://wa.me/' + WHATSAPP_NUMBER + '?text=' + msg + '">Enquire<svg viewBox="0 0 24 24"><line x1="4" y1="12" x2="20" y2="12"/><polyline points="13 5 20 12 13 19"/></svg></a></div>' +
      '</div>' +
    '</div>'
  );
}

function renderProductGrid(gridEl, list){
  if(!gridEl) return;
  if(list.length === 0){
    gridEl.innerHTML = '<p class="no-results">No pieces match that search — try another word.</p>';
    return;
  }
  gridEl.innerHTML = list.map(productCardHTML).join('');
}

function renderWishDrawer(){
  const body = document.getElementById('drawerBody');
  if(!body) return;
  if(wishlist.length === 0){
    body.innerHTML = '<p class="drawer-empty">Nothing saved yet — tap the heart on any piece to add it here.</p>';
    return;
  }
  body.innerHTML = wishlist.map(function(id){
    const p = (typeof PRODUCTS !== 'undefined') ? PRODUCTS.find(function(x){ return x.id === id; }) : null;
    if(!p) return '';
    return (
      '<div class="drawer-item">' +
        '<div class="placeholder-img">' +
          '<img loading="lazy" src="' + p.image + '" alt="' + p.name + '" onerror="this.remove()" onload="this.parentElement.classList.add(\'has-img\')">' +
        '</div>' +
        '<div class="drawer-item-info">' +
          '<h4>' + p.name + '</h4>' +
          '<p style="margin:0;color:var(--text-soft);font-size:0.85rem;">' + p.material + '</p>' +
          '<button class="drawer-remove" data-id="' + id + '">Remove</button>' +
        '</div>' +
      '</div>'
    );
  }).join('');
}

document.addEventListener('click', function(e){
  // heart toggle (works on any page rendering product cards via productCardHTML)
  const wishBtn = e.target.closest('.wish-btn');
  if(wishBtn){
    const id = wishBtn.dataset.id;
    const idx = wishlist.indexOf(id);
    if(idx > -1){ wishlist.splice(idx, 1); wishBtn.classList.remove('active'); }
    else { wishlist.push(id); wishBtn.classList.add('active'); }
    saveWishlist(wishlist);
    updateWishCount();
    renderWishDrawer();
    return;
  }
  // remove from drawer
  const removeBtn = e.target.closest('.drawer-remove');
  if(removeBtn){
    const id = removeBtn.dataset.id;
    wishlist = wishlist.filter(function(x){ return x !== id; });
    saveWishlist(wishlist);
    updateWishCount();
    renderWishDrawer();
    // re-render whichever grid is on this page, if any
    const grid = document.getElementById('productGrid');
    if(grid && typeof PRODUCTS !== 'undefined') renderProductGrid(grid, PRODUCTS);
    return;
  }
});

// ---- wishlist drawer open/close ----
function initWishDrawer(){
  const drawer = document.getElementById('wishDrawer');
  const overlay = document.getElementById('drawerOverlay');
  const toggle = document.getElementById('wishlistToggle');
  const close = document.getElementById('drawerClose');
  if(!drawer || !overlay || !toggle) return;
  function open(){ drawer.classList.add('open'); overlay.classList.add('open'); renderWishDrawer(); }
  function shut(){ drawer.classList.remove('open'); overlay.classList.remove('open'); }
  toggle.addEventListener('click', open);
  if(close) close.addEventListener('click', shut);
  overlay.addEventListener('click', shut);
}

// ---- mobile nav open/close ----
function initMobileNav(){
  const nav = document.getElementById('mobileNav');
  const overlay = document.getElementById('mobileNavOverlay');
  const openBtn = document.getElementById('menuToggle');
  const closeBtn = document.getElementById('mobileNavClose');
  if(!nav || !openBtn) return;
  function open(){ nav.classList.add('open'); if(overlay) overlay.classList.add('open'); }
  function shut(){ nav.classList.remove('open'); if(overlay) overlay.classList.remove('open'); }
  openBtn.addEventListener('click', open);
  if(closeBtn) closeBtn.addEventListener('click', shut);
  if(overlay) overlay.addEventListener('click', shut);
}

// ---- search overlay: submits to furniture.html?search=... ----
function initSearch(){
  const openBtn = document.getElementById('searchToggle');
  const panel = document.getElementById('searchPanel');
  const overlay = document.getElementById('searchOverlay');
  const closeBtn = document.getElementById('searchClose');
  const form = document.getElementById('searchForm');
  const input = document.getElementById('searchInput');
  if(!openBtn || !panel) return;
  function open(){ panel.classList.add('open'); if(overlay) overlay.classList.add('open'); setTimeout(function(){ input && input.focus(); }, 200); }
  function shut(){ panel.classList.remove('open'); if(overlay) overlay.classList.remove('open'); }
  openBtn.addEventListener('click', open);
  if(closeBtn) closeBtn.addEventListener('click', shut);
  if(overlay) overlay.addEventListener('click', shut);
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const q = (input.value || '').trim();
      const base = document.body.dataset.searchTarget || 'furniture.html';
      window.location.href = base + (q ? ('?search=' + encodeURIComponent(q)) : '');
    });
  }
}

// ---- highlight current page in nav ----
function initActiveNav(){
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(function(a){
    const href = a.getAttribute('href');
    if(href === path || (path === '' && href === 'index.html')){
      a.classList.add('active');
    }
  });
}

// ---- transparent-over-hero nav: solidifies once you scroll past it ----
function initNavScroll(){
  const header = document.querySelector('header.nav-overlay');
  if(!header) return;
  function update(){
    if(window.scrollY > 60){ header.classList.remove('transparent'); }
    else { header.classList.add('transparent'); }
  }
  update();
  window.addEventListener('scroll', update, { passive: true });
}

document.addEventListener('DOMContentLoaded', function(){
  updateWishCount();
  initWishDrawer();
  initMobileNav();
  initSearch();
  initActiveNav();
  initNavScroll();
});