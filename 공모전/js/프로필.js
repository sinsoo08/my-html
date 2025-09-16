document.addEventListener('DOMContentLoaded', function () {
  const myPosts = document.getElementById('my-posts');
  const username = localStorage.getItem('username');

  if (!username) {
    myPosts.innerHTML = "<p>로그인이 필요합니다.</p>";
    return;
  }

  const posts = JSON.parse(localStorage.getItem('posts') || '[]');
  const userPosts = posts.filter(post => post.username === username);

  if (userPosts.length === 0) {
    myPosts.innerHTML = "<p>작성한 글이 없습니다.</p>";
  } else {
    userPosts.reverse().forEach(post => {
      const div = document.createElement('div');
      div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.content}</p>
        <hr>
      `;
      myPosts.appendChild(div);
    });
  }
});