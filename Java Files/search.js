async function fetchData(getInputText) {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/retro-forum/posts?category=${getInputText}`
  );
  const data = await res.json();

  getData(data);
}

const getDiscussionArea = document.getElementById("discussion-area");

document.getElementById("search-btn").addEventListener("click", function () {
  const input = document.getElementById("input-area");
  const getInputText = input.value;

  getDiscussionArea.textContent = "";

  toggleLoadingSpinner(true);

  fetchData(getInputText);
});

function getData(data) {
  // get the comments and add the data
  for (const info of data["posts"]) {
    const div = document.createElement("div");
    function setColor() {
      if (info.isActive === true) {
        return "bg-green-500";
      } else {
        return "bg-red-500";
      }
    }
    div.innerHTML = `<div
      class="bg-[#F3F3F5] w-[360px] lg:w-[772px] lg:p-10 rounded-2xl flex gap-6 py-4 mx-auto comment-button"
    >
    <div class="indicator">
    <span class="indicator-item badge ${setColor()}"></span>
    <div class="grid lg:w-22 w-22 h-0 place-items-center">
      <img
        class="w-[72px] h-[72px] rounded-xl"
        src="${info.image}"
        alt=""
      />
    </div>
  </div>
      <div class="lg:ml-12">
        <div class="pb-4 border-dashed border-b-2 space-y-4">
          <div class="flex gap-6">
            <h3>#${info.category}</h3>
            <h3>Author : ${info.author.name}</h3>
          </div>
          <h1 class="font-extrabold lg:text-xl">
            ${info.title}
          </h1>
          <h3 class="text-[#12132D99]">
            ${info.description}
          </h3>
        </div>
        <div class="flex items-center gap-12 lg:gap-52">
          <div class="flex gap-3 lg:gap-6 mt-6">
            <div class="flex gap-3 items-center">
              <i class="fa-regular fa-message"></i>
              <h3>560</h3>
            </div>
            <div class="flex gap-3 items-center">
              <i class="fa-regular fa-eye"></i>
              <h3>1568</h3>
            </div>
            <div class="flex gap-3 items-center">
              <i class="fa-regular fa-clock"></i>
              <h3>5 min</h3>
            </div>
          </div>
          <div class="mt-8">
            <button onclick="getTitle('${info.title}')">
              <img src="images/email 1.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>`;

    setTimeout(() => {
      getDiscussionArea.appendChild(div);
    }, 2000);
  }
  // hide spinner

  setTimeout(() => {
    toggleLoadingSpinner(false);
  }, 2000);
}

// show Spinner when loading

function toggleLoadingSpinner(loading) {
  const spinner = document.getElementById("spinner");
  if (loading) {
    spinner.classList.remove("hidden");
  } else {
    spinner.classList.add("hidden");
  }
}
