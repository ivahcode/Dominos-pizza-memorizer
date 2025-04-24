const pizzas = [
  {
    name: "Pepperoni Passion",
    toppings: ["Double Pepperoni", "Double Mozzarella"],
  },
  {
    name: "Vegi Supreme",
    toppings: ["Onions", "Green Peppers", "Mushrooms", "Sweetcorn", "Tomatoes"],
  },
  {
    name: "Texas BBQ",
    toppings: ["BBQ Sauce", "Chicken", "Bacon", "Onions", "Green Peppers"],
  },
  // Add more pizzas here as needed
];

function createPizzaCard(pizza, index) {
  const card = document.createElement("div");
  card.className = "pizza-card";

  const title = document.createElement("h3");
  title.textContent = `${index + 1}. ${pizza.name}`;
  card.appendChild(title);

  const toppingsSpan = document.createElement("p");
  pizza.toppings.forEach((topping, i) => {
    const span = document.createElement("span");
    span.textContent = "[...]";
    span.className = "topping";
    span.dataset.real = topping;
    span.onclick = () => {
      span.textContent = topping;
      span.classList.add("revealed");
    };
    toppingsSpan.appendChild(span);
  });
  card.appendChild(toppingsSpan);

  const resetBtn = document.createElement("button");
  resetBtn.textContent = "Reset";
  resetBtn.onclick = () => {
    toppingsSpan.querySelectorAll(".topping").forEach((span) => {
      span.textContent = "[...]";
      span.classList.remove("revealed");
    });
  };
  card.appendChild(resetBtn);

  return card;
}

const container = document.getElementById("pizzas-container");
pizzas.forEach((pizza, i) => {
  container.appendChild(createPizzaCard(pizza, i));
});
