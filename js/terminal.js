// Terminal typing animation
document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('typed');
  if (!el) return;

  const commands = ['whoami', 'cat profile.txt', 'ls capabilities/', 'ollama list'];
  let cmdIndex = 0;
  let charIndex = 0;
  let deleting = false;
  let delay = 120;

  function type() {
    const current = commands[cmdIndex];

    if (!deleting) {
      el.textContent = current.substring(0, charIndex + 1);
      charIndex++;
      delay = 120;
      if (charIndex === current.length) {
        delay = 1800;
        deleting = true;
      }
    } else {
      el.textContent = current.substring(0, charIndex - 1);
      charIndex--;
      delay = 60;
      if (charIndex === 0) {
        deleting = false;
        cmdIndex = (cmdIndex + 1) % commands.length;
        delay = 400;
      }
    }

    setTimeout(type, delay);
  }

  setTimeout(type, 800);
});
