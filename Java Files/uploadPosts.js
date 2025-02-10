async function fetchData() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/latest-posts"
  );
  const data = await res.json();
  uploadData(data);
}

fetchData();

function uploadData(data) {
  const getSection = document.getElementById("post-section");

  for (const info of data) {
    const div = document.createElement("div");

    div.innerHTML = `<div
    class="card card-compact w-[350px] mx-auto lg:mx-0 lg:w-96 bg-base-100 shadow-xl"
  >
    <figure>
      <img
        class="w-[326px] rounded-xl"
        src="${info.cover_image}"
        alt="Shoes"
      />
    </figure>
    <div class="card-body ml-3">
      <h2 class="">
        <i class="fa-regular fa-calendar mr-2"></i> ${
          info.author.posted_date || "No publish date"
        }
      </h2>
      <h2 class="card-title font-bold text-lg">
        ${info.title}
      </h2>
      <p class="text-[#12132D99]">
        ${info.description}
      </p>
      <div class="flex items-center gap-6">
        <div>
          <img class="w-11 rounded-full" src="${info.profile_image}" alt="" />
        </div>
        <div>
          <h3 class="text-xl font-semibold">${info.author.name}</h3>
          <h3>${info.author.designation || "Unknown"}</h3>
        </div>
      </div>
    </div>
  </div>`;

    getSection.appendChild(div);
  }
}
