document.getElementById('writeForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;
  const username = document.getElementById('username').value;

  fetch('/api/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, content, username })
  })
  .then(res => {
    if (res.ok) {
      alert('글이 등록되었습니다.');
      window.location.href = 'index.html';
    } else {
      alert('글 작성 실패');
    }
  });
});
