document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('writeForm');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const username = localStorage.getItem('username'); // 로그인 시 저장된 유저 이름

    if (!username) {
      alert("로그인 후 글 작성이 가능합니다.");
      return;
    }

    const newPost = {
      title,
      content,
      username,
      createdAt: new Date().toISOString()
    };

    const posts = JSON.parse(localStorage.getItem('posts') || '[]');
    posts.push(newPost);
    localStorage.setItem('posts', JSON.stringify(posts));

    alert('글이 등록되었습니다.');

    // 프로필로 이동
    window.location.href = '프로필.html';
  });
});
