const params = new URLSearchParams(window.location.search);
const username = params.get('username');

document.getElementById('title').innerText = `${username}님의 블로그`;

fetch(`/api/user/${username}/posts`)  // 해당 유저 글만 가져오기
  .then(res => res.json())
  .then(posts => {
    const list = document.getElementById('userPosts');
    posts.forEach(post => {
      const div = document.createElement('div');
      div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.content}</p>
        <hr>
      `;
      list.appendChild(div);
    });
  });