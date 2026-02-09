document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const successMsg = document.getElementById('success-msg');

  const firstName = document.getElementById('firstName');
  const lastName  = document.getElementById('lastName');
  const email     = document.getElementById('email');
  const message   = document.getElementById('message');
  const consent   = document.querySelector('input[name="consent"]');
  const radios    = document.querySelectorAll('input[name="query_type"]');

  const errFirst  = document.getElementById('err-first');
  const errLast   = document.getElementById('err-last');
  const errEmail  = document.getElementById('err-email');
  const errQuery  = document.getElementById('err-query');
  const errMsg    = document.getElementById('err-message');
  const errConsent= document.getElementById('err-consent');

  function showError(el, msg) {
    el.setAttribute('aria-invalid', 'true');
    const errMap = { firstName: errFirst, lastName: errLast, email: errEmail, message: errMsg };
    const errEl = errMap[el.id] || errQuery;
    if (errEl) errEl.textContent = msg;
  }

  function clearError(el) {
    el.setAttribute('aria-invalid', 'false');
    const errMap = { firstName: errFirst, lastName: errLast, email: errEmail, message: errMsg };
    const errEl = errMap[el.id] || errQuery;
    if (errEl) errEl.textContent = '';
  }

  function validate(el) {
    let valid = true;

    if (el === consent) {
      if (!el.checked) {
        showError(el, 'To submit this form, please consent to being contacted');
        valid = false;
      } else clearError(el);
    }
    else if (el.type === 'radio') {
      const selected = Array.from(radios).some(r => r.checked);
      const fieldset = document.querySelector('.query-type-field');
      if (!selected) {
        fieldset.setAttribute('aria-invalid', 'true');
        showError(radios[0], 'Please select a query type');
        valid = false;
      } else {
        fieldset.setAttribute('aria-invalid', 'false');
        clearError(radios[0]);
      }
    }
    else if (el.type === 'email') {
      const val = el.value.trim();
      if (!val) {
        showError(el, 'This field is required');
        valid = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
        showError(el, 'Please enter a valid email address');
        valid = false;
      } else clearError(el);
    }
    else {
      if (!el.value.trim()) {
        showError(el, 'This field is required');
        valid = false;
      } else clearError(el);
    }

    return valid;
  }

  [firstName, lastName, email, message, consent].forEach(f => {
    f.addEventListener('input', () => validate(f));
    f.addEventListener('blur', () => validate(f));
  });

  radios.forEach(r => r.addEventListener('change', () => validate(r)));

  form.addEventListener('submit', e => {
    e.preventDefault();

    let allValid = true;

    if (!validate(firstName)) allValid = false;
    if (!validate(lastName))  allValid = false;
    if (!validate(email))     allValid = false;
    if (!validate(message))   allValid = false;
    if (!validate(consent))   allValid = false;

    if (!Array.from(radios).some(r => r.checked)) {
      document.querySelector('.query-type-field').setAttribute('aria-invalid', 'true');
      errQuery.textContent = 'Please select a query type';
      allValid = false;
    } else {
      document.querySelector('.query-type-field').setAttribute('aria-invalid', 'false');
      errQuery.textContent = '';
    }

    if (allValid) {
      if (allValid) {
  // Comentar las líneas de simulación
  // successMsg.classList.remove('hidden');
  // form.reset();
  // setTimeout(...)

  // Enviar el formulario de verdad al servidor
  form.submit();   // ← Esto envía a procesar.php
}
    } else {
      document.querySelector('[aria-invalid="true"]')?.focus();
    }
  });
});