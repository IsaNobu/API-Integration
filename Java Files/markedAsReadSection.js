// push the comments
const commentSection = document.getElementById("comment-push");

function getTitle(title, event) {
  const div = document.createElement("div");
  div.innerHTML = `<div
    class="flex justify-between items-center bg-white px-4 py-3 rounded-2xl"
  >
    <div>
      <h1 class="text-xl font-bold">
        ${title}
      </h1>
    </div>
    <div class="flex items-center">
      <i class="fa-regular fa-eye"></i>
      <p class="text-xl font-bold text-[#12132D99]">1568</p>
    </div>
  </div>`;
  commentSection.appendChild(div);

  // increase the readCount

  const readCount = document.getElementById("marked-as-read");
  const makeInt = parseInt(readCount.innerText);

  if (makeInt >= 0) {
    readCount.innerText = makeInt + 1;
  }
}
