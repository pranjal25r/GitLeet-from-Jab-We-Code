console.log("GitLeet background loaded");

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {

  if (message.type !== "ACCEPTED_SUBMISSION") return;

  const { code, title, language } = message.payload;

  chrome.storage.local.get(
    ["githubRepo", "githubToken", "githubUsername"],
    async (data) => {

      if (!data.githubRepo || !data.githubToken || !data.githubUsername) {
        console.error("GitHub credentials not set in popup.");
        return;
      }

      try {

        // Clean file name
        const cleanTitle = title
          .replace(/^\d+\.\s*/, "")   // remove leading "190. "
          .replace(/[^\w\-]/g, "_");  // replace special chars

        const fileName = `${cleanTitle}.${language}`;

        const url = `https://api.github.com/repos/${data.githubUsername}/${data.githubRepo}/contents/${fileName}`;

        // Encode code properly
        const content = btoa(unescape(encodeURIComponent(code)));

        let sha = null;

        // 🔍 1️⃣ Check if file already exists
        const getFile = await fetch(url, {
          headers: {
            Authorization: `token ${data.githubToken}`
          }
        });

        if (getFile.status === 200) {
          const fileData = await getFile.json();
          sha = fileData.sha;
          console.log("File exists. Updating...");
        } else if (getFile.status === 404) {
          console.log("File does not exist. Creating...");
        } else {
          console.error("Unexpected GET response:", getFile.status);
        }

        // 🚀 2️⃣ Create or Update file
        const response = await fetch(url, {
          method: "PUT",
          headers: {
            Authorization: `token ${data.githubToken}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            message: `Add solution for ${title}`,
            content: content,
            branch: "main",
            ...(sha && { sha })   // Include SHA only if updating
          })
        });

        const result = await response.json();

        console.log("GitHub PUT status:", response.status);
        console.log("GitHub response:", result);

        if (!response.ok) {
          console.error("GitHub push failed:", result);
        } else {
          console.log("✅ Successfully pushed to GitHub!");
        }

      } catch (error) {
        console.error("Error pushing to GitHub:", error);
      }
    }
  );

  return true;
});
