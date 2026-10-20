const PRODUCTS = {
  'jiu-jitsu-friends': { code: 'TFN · 001', name: 'The Jiu-Jitsu Friends Tee', oldPrice: 120, price: 95, installment: '6x de R$ 15,83 sem juros', image: '../assets/store/jiu-jitsu-friends.webp', description: 'Uma homenagem à amizade construída no tatame e levada para a vida. Arte oficial da coleção Jiu-Jitsu TFN.' },
  'muay-thai-warrior': { code: 'TFN · 002', name: 'Muay Thai Warrior', oldPrice: 100, price: 89.9, installment: '6x de R$ 14,98 sem juros', image: '../assets/store/muay-thai-warrior.webp', description: 'Força, precisão e espírito de guerreiro em uma peça criada para representar o Muay Thai.' },
  'jus-coffee-energy': { code: 'TFN · 003', name: 'JUS Coffee Energy Tee', oldPrice: 120, price: 95, installment: '6x de R$ 15,83 sem juros', image: '../assets/store/jus-coffee-energy.webp', description: 'Jiu-Jitsu, café e energia para acompanhar o ritmo de quem vive a arte suave todos os dias.' },
  'camisa-fn-red': { code: 'TFN · 004', name: 'Camisa FN', oldPrice: 99.99, price: 79.9, installment: '6x de R$ 13,32 sem juros', image: '../assets/store/camisa-fn-red.webp', description: 'Assinatura FN em uma composição forte, direta e alinhada à identidade visual da equipe.' },
  'projeto-renascer': { code: 'TFN · 005', name: 'Camisa Oficial do Projeto Renascer Jiu-Jitsu', oldPrice: 89.9, price: 64.9, installment: '6x de R$ 10,82 sem juros', image: '../assets/store/projeto-renascer.webp', description: 'Peça oficial do Projeto Renascer Jiu-Jitsu, criada para vestir e fortalecer essa iniciativa.' },
  'camisa-fn-black': { code: 'TFN · 006', name: 'Camisa FN', oldPrice: 99.99, price: 79.9, installment: '6x de R$ 13,32 sem juros', image: '../assets/store/camisa-fn-black.webp', description: 'Uma versão essencial da identidade FN para usar dentro e fora do ambiente de treino.' },
  'team-felipe-classic': { code: 'TFN · 007', name: 'Camisa Team Felipe Nascimento', oldPrice: 99.99, price: 79.9, installment: '6x de R$ 13,32 sem juros', image: '../assets/store/team-felipe-classic.webp', description: 'Modelo clássico da Team Felipe Nascimento para carregar o nome da equipe em qualquer lugar.' },
  'brasil-japao': { code: 'TFN · 008', name: 'Clássico Brasil x Japão – Gracie vs Kimura', oldPrice: 99.99, price: 89.9, installment: '6x de R$ 14,98 sem juros', image: '../assets/store/brasil-japao.webp', description: 'Uma arte inspirada no encontro histórico entre Brasil e Japão que marcou o Jiu-Jitsu.' },
  'lifestyle-edition': { code: 'TFN · 009', name: 'Jiu-Jitsu Lifestyle Edition', oldPrice: 99.99, price: 89.9, installment: '6x de R$ 14,98 sem juros', image: '../assets/store/lifestyle-edition.webp', description: 'A arte suave como estilo de vida, traduzida em uma peça versátil para a rotina.' },
  'rio-lifestyle-one': { code: 'TFN · 010', name: 'Rio Jiu Jitsu - LifeStyle', oldPrice: 99.99, price: 89.9, installment: '6x de R$ 14,98 sem juros', image: '../assets/store/rio-lifestyle-one.webp', description: 'Rio de Janeiro e Jiu-Jitsu reunidos em uma estampa que leva a origem da equipe para as ruas.' },
  'rio-lifestyle-two': { code: 'TFN · 011', name: 'Rio Jiu Jitsu - LifeStyle', oldPrice: 99.99, price: 89.9, installment: '6x de R$ 14,98 sem juros', image: '../assets/store/rio-lifestyle-two.webp', description: 'Outra leitura da conexão entre o Rio e a cultura do Jiu-Jitsu, com presença e personalidade.' },
  'warrior-spirit': { code: 'TFN · 012', name: 'Warrior Spirit - Jiu Jitsu', oldPrice: 99.99, price: 89.9, installment: '6x de R$ 14,98 sem juros', image: '../assets/store/warrior-spirit.webp', description: 'Espírito de guerreiro, disciplina e evolução em uma arte criada para quem não abandona o combate.' },
  'team-felipe-signature': { code: 'TFN · 013', name: 'Camisa Team Felipe Nascimento', oldPrice: 99.99, price: 79.9, installment: '6x de R$ 13,32 sem juros', image: '../assets/store/team-felipe-signature.webp', description: 'Camisa preta com arte frontal oficial Team Felipe Nascimento. Uma peça direta, forte e feita para representar a equipe em qualquer lugar.' }
};

const header = document.querySelector('.store-header');
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.store-nav');
const cartTrigger = document.querySelector('.cart-trigger');
const cartDrawer = document.querySelector('.cart-drawer');
const cartOverlay = document.querySelector('.cart-overlay');
const cartClose = document.querySelector('.cart-close');
const cartContinue = document.querySelector('.cart-continue');
const cartCount = document.querySelector('.cart-count');
const cartEmpty = document.querySelector('.cart-empty');
const cartItems = document.querySelector('.cart-items');
const cartSummary = document.querySelector('.cart-summary');
const cartTotal = document.querySelector('.cart-total');
const checkoutButton = document.querySelector('.checkout-button');
const checkoutShell = document.querySelector('.checkout-shell');
const checkoutForm = document.querySelector('#checkout-form');
const checkoutBack = document.querySelector('.checkout-back');
const checkoutClose = document.querySelector('.checkout-close');
const checkoutItems = document.querySelector('.checkout-items');
const checkoutItemCount = document.querySelector('.checkout-item-count');
const checkoutSubtotal = document.querySelector('.checkout-subtotal');
const checkoutTotal = document.querySelector('.checkout-total');
const checkoutError = document.querySelector('.checkout-error');
const paymentButton = document.querySelector('.payment-button');
const testNotice = document.querySelector('.test-notice');
const toast = document.querySelector('.toast');
const form = document.querySelector('#purchase-form');
const quantityOutput = document.querySelector('#quantity-output');
const sizeError = document.querySelector('#size-error');
const productImage = document.querySelector('#main-product-image');
const productCode = document.querySelector('#product-code');
const productTitle = document.querySelector('#product-title');
const productOldPrice = document.querySelector('#product-old-price');
const productCurrentPrice = document.querySelector('#product-current-price');
const productInstallment = document.querySelector('#product-installment');
const productDescription = document.querySelector('#product-description');

const STORAGE_KEY = 'tfn-store-cart-v2';
let quantity = 1;
let cart = [];
let toastTimer;
let checkoutConfig = { checkoutMode: 'test', checkoutReady: false, paymentProvider: 'stripe' };

const money = (value) => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
const safeText = (value) => String(value).replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[char]);
const saveCart = () => localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));

const loadCart = () => {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (Array.isArray(stored)) cart = stored.filter((item) => PRODUCTS[item.id] && item.size && Number.isInteger(item.quantity) && item.quantity > 0);
  } catch {
    cart = [];
    localStorage.removeItem(STORAGE_KEY);
  }
};

const renderCart = () => {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.reduce((sum, item) => sum + PRODUCTS[item.id].price * item.quantity, 0);
  cartCount.textContent = String(count);
  cartCount.setAttribute('aria-label', `${count} ${count === 1 ? 'item' : 'itens'} na sacola`);
  cartEmpty.hidden = cart.length > 0;
  cartItems.hidden = cart.length === 0;
  cartSummary.hidden = cart.length === 0;
  cartItems.innerHTML = cart.map((item, index) => {
    const product = PRODUCTS[item.id];
    return `<article class="cart-item"><img src="${product.image}" alt="${safeText(product.name)}" /><div><h3>${safeText(product.name)}</h3><p class="cart-variant">Tamanho ${safeText(item.size)} · Quantidade ${item.quantity}</p><button class="cart-remove" type="button" data-remove-index="${index}">Remover</button></div><strong class="cart-item-price">${money(product.price * item.quantity)}</strong></article>`;
  }).join('');
  if (!cart.length) return;
  cartTotal.textContent = money(total);
  renderCheckoutSummary();
};

const renderCheckoutSummary = () => {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.reduce((sum, item) => sum + PRODUCTS[item.id].price * item.quantity, 0);
  checkoutItemCount.textContent = `${count} ${count === 1 ? 'item' : 'itens'}`;
  checkoutSubtotal.textContent = money(total);
  checkoutTotal.textContent = money(total);
  checkoutItems.innerHTML = cart.map((item) => {
    const product = PRODUCTS[item.id];
    return `<article class="checkout-line-item"><img src="${product.image}" alt="${safeText(product.name)}" /><div><h3>${safeText(product.name)}</h3><p>Tam. ${safeText(item.size)} · Qtd. ${item.quantity}</p></div><strong>${money(product.price * item.quantity)}</strong></article>`;
  }).join('');
};

const showToast = (message) => {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add('show');
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
};

const openCart = () => {
  cartDrawer.classList.add('open');
  cartDrawer.setAttribute('aria-hidden', 'false');
  cartTrigger.setAttribute('aria-expanded', 'true');
  cartOverlay.hidden = false;
  document.body.classList.add('cart-open');
  cartClose.focus();
};

const closeCart = () => {
  cartDrawer.classList.remove('open');
  cartDrawer.setAttribute('aria-hidden', 'true');
  cartTrigger.setAttribute('aria-expanded', 'false');
  cartOverlay.hidden = true;
  document.body.classList.remove('cart-open');
};

const openCheckout = () => {
  if (!cart.length) return;
  closeCart();
  renderCheckoutSummary();
  checkoutError.textContent = '';
  checkoutShell.hidden = false;
  checkoutShell.setAttribute('aria-hidden', 'false');
  checkoutShell.classList.add('is-open');
  document.body.classList.add('checkout-open');
  checkoutShell.scrollTop = 0;
  setTimeout(() => checkoutForm.elements.name.focus(), 50);
};

const closeCheckout = ({ returnToCart = false } = {}) => {
  checkoutShell.classList.remove('is-open');
  checkoutShell.hidden = true;
  checkoutShell.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('checkout-open');
  if (returnToCart) openCart();
};

const loadCheckoutConfig = async () => {
  try {
    const response = await fetch('/api/config', { headers: { Accept: 'application/json' } });
    if (!response.ok) throw new Error('Configuração indisponível');
    checkoutConfig = await response.json();
    if (checkoutConfig.checkoutMode === 'test') {
      testNotice.querySelector('strong').textContent = checkoutConfig.checkoutReady ? 'Stripe em modo de teste' : 'Checkout em preparação';
      testNotice.querySelector('span').textContent = checkoutConfig.checkoutReady
        ? 'Use apenas cartões de teste. Nenhuma cobrança real será feita.'
        : 'A experiência está pronta, mas as chaves de teste da TFN ainda precisam ser conectadas.';
    }
  } catch {
    testNotice.querySelector('strong').textContent = 'Servidor de pagamento offline';
    testNotice.querySelector('span').textContent = 'Abra a loja pelo servidor TFN para testar o pagamento seguro.';
  }
};

const selectProduct = (id, scroll = true) => {
  const product = PRODUCTS[id];
  if (!product) return;
  form.dataset.productId = id;
  productCode.textContent = product.code;
  productTitle.textContent = product.name;
  productOldPrice.textContent = money(product.oldPrice);
  productCurrentPrice.textContent = money(product.price);
  productInstallment.textContent = `ou ${product.installment}`;
  productDescription.textContent = product.description;
  productImage.src = product.image;
  productImage.alt = product.name;
  document.querySelector('.gallery-badge').textContent = product.code;
  document.querySelectorAll('input[name="size"]').forEach((input) => { input.checked = false; });
  quantity = 1;
  quantityOutput.textContent = '1';
  sizeError.textContent = '';
  if (scroll) document.querySelector('#produto').scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const syncHeader = () => header.classList.toggle('scrolled', window.scrollY > 24);
syncHeader();
window.addEventListener('scroll', syncHeader, { passive: true });

menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  document.body.style.overflow = open ? 'hidden' : '';
});

nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}));

document.querySelectorAll('[data-select-product]').forEach((button) => button.addEventListener('click', () => selectProduct(button.dataset.selectProduct)));
document.querySelectorAll('[data-quantity]').forEach((button) => button.addEventListener('click', () => {
  quantity = button.dataset.quantity === 'plus' ? Math.min(quantity + 1, 10) : Math.max(quantity - 1, 1);
  quantityOutput.textContent = String(quantity);
}));

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const selectedSize = new FormData(form).get('size');
  if (!selectedSize) {
    sizeError.textContent = 'Escolha um tamanho para continuar.';
    form.querySelector('input[name="size"]').focus();
    return;
  }
  const id = form.dataset.productId;
  const existing = cart.find((item) => item.id === id && item.size === selectedSize);
  if (existing) existing.quantity = Math.min(existing.quantity + quantity, 10);
  else cart.push({ id, size: selectedSize, quantity });
  sizeError.textContent = '';
  saveCart();
  renderCart();
  showToast('Produto adicionado à sacola.');
  openCart();
});

form.querySelectorAll('input[name="size"]').forEach((input) => input.addEventListener('change', () => { sizeError.textContent = ''; }));
cartTrigger.addEventListener('click', openCart);
cartClose.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);
cartContinue.addEventListener('click', () => { closeCart(); document.querySelector('#catalogo').scrollIntoView({ behavior: 'smooth' }); });
checkoutButton.addEventListener('click', openCheckout);
checkoutBack.addEventListener('click', () => closeCheckout({ returnToCart: true }));
checkoutClose.addEventListener('click', () => closeCheckout());

cartItems.addEventListener('click', (event) => {
  const button = event.target.closest('[data-remove-index]');
  if (!button) return;
  cart.splice(Number(button.dataset.removeIndex), 1);
  saveCart();
  renderCart();
  showToast('Produto removido da sacola.');
});

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  if (!checkoutShell.hidden) closeCheckout();
  else if (cartDrawer.classList.contains('open')) closeCart();
});

checkoutForm.elements.postalCode.addEventListener('input', (event) => {
  const digits = event.target.value.replace(/\D/g, '').slice(0, 8);
  event.target.value = digits.length > 5 ? `${digits.slice(0, 5)}-${digits.slice(5)}` : digits;
});

checkoutForm.elements.phone.addEventListener('input', (event) => {
  const digits = event.target.value.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 2) event.target.value = digits;
  else if (digits.length <= 7) event.target.value = `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  else event.target.value = `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
});

checkoutForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  checkoutError.textContent = '';
  if (!checkoutForm.reportValidity()) return;
  paymentButton.disabled = true;
  paymentButton.querySelector('span').textContent = 'Preparando pagamento...';
  const customer = Object.fromEntries(new FormData(checkoutForm).entries());
  delete customer.terms;
  delete customer.shipping;
  try {
    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ items: cart.map(({ id, size, quantity: itemQuantity }) => ({ id, size, quantity: itemQuantity })), customer })
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(result.message || 'Não foi possível iniciar o pagamento.');
    if (!result.checkoutUrl) throw new Error('O provedor não devolveu uma página de pagamento.');
    window.location.assign(result.checkoutUrl);
  } catch (error) {
    checkoutError.textContent = error.message;
    paymentButton.disabled = false;
    paymentButton.querySelector('span').textContent = 'Ir para pagamento seguro';
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
loadCart();
selectProduct('team-felipe-signature', false);
renderCart();
loadCheckoutConfig();
