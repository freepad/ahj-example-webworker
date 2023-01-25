const worker = new Worker(new URL('./webworker.js', import.meta.url));
worker.postMessage({ type: 'username', count: 10 });
worker.onmessage = ({ data }) => {
  console.log(data);
};
setInterval(() => {
  const count = parseInt(Math.random() * 1000, 10)
  const type = Math.random() > 0.5 ? 'phone' : 'username'
  worker.postMessage('');
}, 10)
setTimeout(() => {
  worker.terminate();
}, 2000)
// 
