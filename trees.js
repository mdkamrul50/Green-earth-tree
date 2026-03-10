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

loadCategory();
