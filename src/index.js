import '@/styles/styles.css';
import alertMessage from "@/CustomeModule";

document.addEventListener("DOMContentLoaded", () => {
  const alertButton = document.querySelector('[data-role=alert-button]');
  alertButton.addEventListener('click', () => {
    alertMessage('Hello there!')
  })
});