const button = document.querySelector('button')!;

button.addEventListener('click', () => {
  console.log('zzz');
});

function sendAnalytics(data: string) {
  console.log(data);
}

sendAnalytics('dddd');
