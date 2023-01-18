import { message } from 'worker';

const btn = document.querySelector<HTMLButtonElement>('#message');
if (btn) {
  btn.onclick = () => {
    message('Click');
  };
}
