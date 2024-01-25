function downloadImage(url, name){
    fetch(url, {mode: "no-cors"})
      .then(resp => {
            console.log(resp)
            return resp.blob()
        })
      .then(blob => {
          const url = window.URL.createObjectURL(blob);
          console.log(url)
          const a = document.createElement('a');
          a.style.display = 'none';
          a.href = url;
          // the filename you want
          a.download = name;
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
      })
      .catch(() => alert('An error sorry'));
}

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    downloadImage('https://picsum.photos/id/110/5000/3333', 'image.jpeg')
})