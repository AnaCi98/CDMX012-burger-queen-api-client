const data = () => {
  fetch(new Request('http://localhost:3000/posts'))
    .then((response) => response.json())
    .then((db) => console.log(db));
};
data();
