chrome.runtime.onMessage.addListener(async (message) => {
  if (message.type === "ACCEPTED_SUBMISSION") {
    const { code, title, language } = message.payload;

    chrome.storage.local.get(["githubToken", "repoName", "username"], async (data) => {
      const fileName = `${title}.${language}`;
      const content = btoa(unescape(encodeURIComponent(code)));

      await fetch(
        `https://api.github.com/repos/${data.username}/${data.repoName}/contents/${fileName}`,
        {
          method: "PUT",
          headers: {
            "Authorization": `Bearer ${data.githubToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: `Add solution for ${title}`,
            content: content,
          }),
        }
      );
    });
  }
});
