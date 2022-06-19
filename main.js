let myData = document.getElementById('html')


fetch('https://jsonplaceholder.typicode.com/posts')
.then((response) => {
    return response.json();
  })
  .then((data) => {
    data.map(item =>{
      console.log(item);
      const div = document.createElement('div')
      div.innerHTML += ('"userID":'+ item.userId + '<br />  ' +
      '"id":   ' + item.id + ' <br /> ' +
      '"title": '+ item.title + '<br  /> ' +
      '"body":  ' + item.body + '<br />')
    return myData.appendChild(div)
    });
  });




  // fetch() - возвращает промис, который разрешает ответ,отправленный обратно с сервера.
  // then() - используется для запуска кода,после того,как промис будет разрешен.
  // data - использоваться для хранения информации, которая изменяется.
  // map() - создает массив, вызывая определенную функцию для каждого элемента родительского массива.
  // item – очередной элемент массива.
  // innerHTML - позволяет получить HTML в виде строки.
  // appendChild() возвращает вставленный узел. 