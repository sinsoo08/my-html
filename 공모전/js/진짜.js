function goToLogin() {
  window.location.href = '로그인.html';
}

function goToProfile() {
  window.location.href = '프로필.html';
}

document.addEventListener('DOMContentLoaded', function () {
  const userSection = document.getElementById("user-section");

  function renderUserSection() {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    if (isLoggedIn) {
      userSection.innerHTML = `
        <button onclick="goToProfile()">내 프로필</button>
      `;
    } else {
      userSection.innerHTML = `
        <button onclick="goToLogin()">로그인</button>
      `;
    }
  }

  renderUserSection();

  const postContainer = document.createElement('div');
  document.body.appendChild(postContainer);

  const posts = JSON.parse(localStorage.getItem("posts") || "[]");

  posts.forEach(post => {
    const div = document.createElement('div');
    div.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.content}</p>
      <p>작성자: <a href="프로필.html?username=${post.username}">${post.username}</a></p>
      <hr>
    `;
    postContainer.appendChild(div);
  });
})