
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "Мой первый пост",
    body: "Это текст моего первого поста.",
    userId: 1
  })
})
  .then(response => {
    console.log("Код ответа:", response.status);
    return response.json();
  })
  .then(data => {
    console.log("Ответ сервера:", data);
  })
  .catch(error => console.error("Ошибка:", error));