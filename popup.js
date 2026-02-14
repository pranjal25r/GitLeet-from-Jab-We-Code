document.getElementById("save").addEventListener("click", () => {
  const username = document.getElementById("username").value;
  const repo = document.getElementById("repo").value;
  const token = document.getElementById("token").value;

  chrome.storage.local.set({
    githubUsername: username,
    githubRepo: repo,
    githubToken: token
  }, () => {
    alert("Saved successfully!");
  });
});
