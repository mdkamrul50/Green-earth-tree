const categoryContainer = document.getElementById('category-Container');
const treesContainer = document.getElementById('trees-Container');

async function loadCategory() {
  const res = await fetch(
    'https://openapi.programming-hero.com/api/categories'
  );
  const data = await res.json();
  console.log(data);

  data.categories.forEach((category) => {
    console.log(category);
    const btn = document.createElement('button');
    btn.className = 'btn btn-success w-full';
    btn.innerText = category.category_name;
    categoryContainer.append(btn);
  });
}

async function loadTree( ) {
  const res = await fetch('https://openapi.programming-hero.com/api/plants');
  const data = res.json()
console.log(data);
}

async function LOadTrees( ) {
   const res = await fetch('https://openapi.programming-hero.com/api/plants');
   const trees =await res.json()
  DisplayTrees(trees.plants);
}

function DisplayTrees(trees) {
  console.log(trees);
  trees.forEach(plant => {
    console.log(plant);
const card = document.createElement('div')
card.className = 'card bg-white shadow-sm'
card.innerHTML = `
 <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div class="card-body">
                <h2 class="card-title">Card Title</h2>
                <p class="line-clamp-2">
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
                <div class="badge badge-success">Success</div>

                <div class="card-actions justify-end mt-2">
                  <p class="text-success text-3xl font-bold">$500</p>
                  <button class="btn btn-primary rounded-full">Buy Now</button>
                </div>
              </div>
`;
 
treesContainer.appendChild(card)
  });


}

LOadTrees()

loadCategory();
