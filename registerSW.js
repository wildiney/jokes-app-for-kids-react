if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/jokes-app-for-kids-react/sw.js', { scope: '/jokes-app-for-kids-react/' })})}