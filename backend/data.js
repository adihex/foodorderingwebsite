// import bcrypt from "bcrypt";
const categories = ["Biryani", "Drink", "Curry", "Bread"];
const data = {
  dishes: [
    {
      dish_name: "Chicken Dum biryani",
      category: categories[0],
      image_url:
        "https://media.istockphoto.com/id/497784792/photo/chicken-biryani.jpg?s=612x612&w=is&k=20&c=0gC1Si23zL8YlhOIyGT-JjGGYI1U2KWA-n_v3hKV0uM=",
      dish_price: 150,
      type: "Non-Veg",
      // rating: 4.5,
      dish_description:
        'This dish consists of freshly marinated boneless chicken pieces, special spices from Kerala & Daawat basmati rice which are cooked in "dum" style in a handi. ',
    },
    {
      dish_name: "Red Bull",
      category: categories[1],
      image_url:
        "https://images.unsplash.com/photo-1570526427001-9d80d114054d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      dish_price: 60,
      type: "Veg",
      // rating: 4.0,
      dish_description:
        "Red Bull is a brand of energy drinks sold by Austrian company Red Bull GmbH. ",
    },
    {
      dish_name: "Mutton Biryani",
      category: categories[0],
      image_url:
        "https://media.istockphoto.com/id/1410130688/photo/mutton-biryani-served-in-a-golden-dish-isolated-on-dark-background-side-view-indian-food.jpg?s=612x612&w=is&k=20&c=8LRMd7I9m-e3vGSqhbt6KN-LC6YodhfyRmaHmc9PxM0=",
      dish_price: 300,
      type: "Non-Veg",
      // rating: 4.8,
      dish_description:
        "Freshly marinated tender mutton pieces cooked with long grained basmati rice topped off with fried onions",
    },
    {
      dish_name: "Paneer Butter Masala",
      category: categories[2],
      image_url:
        "https://img.freepik.com/free-photo/vertical-shot-traditional-indian-paneer-butter-masala-cheese-cottage-curry-black-surface_181624-32001.jpg?size=626&ext=jpg",
      dish_price: 100,
      type: "Veg",
      // rating: 4.8,
      dish_description:
        "Paneer Butter Masala is a rich and creamy dish made of paneer along with tomato, butter and cashew sauce",
    },
    {
      dish_name: "Matter Paneer",
      category: categories[2],
      image_url:
        "https://media.istockphoto.com/id/848620296/photo/matar-paneer-masala-an-indian-cuisine.jpg?s=612x612&w=0&k=20&c=pG5iygukmvkrucbVPePf7P5_U7e1bPKMGGtuyRaec5w=",
      dish_price: 100,
      type: "Veg",
      // rating: 4.8,
      dish_description:
        "Matar Paneer the classis North Indian dish Paneer and peas cooked in a spicy and flavorsome curry",
    },
    {
      dish_name: "Navratna Korma",
      category: categories[2],
      image_url:
        "https://thumbs.dreamstime.com/b/navratan-korma-navratan-korma-navratna-kurma-rich-mughlai-gravy-sweet-creamy-gravy-paneer-vegetables-101470696.jpg",
      dish_price: 100,
      type: "Veg",
      // rating: 4.8,
      dish_description:
        "A rich, creamy, and flavorful dish that to nine gem curry. The “gems” are the fruits, vegetables, and nuts that make up the curry.",
    },
    {
      dish_name: "Roti",
      category: categories[3],
      image_url:
        "https://media.istockphoto.com/id/1292638346/photo/chapati-isolated-over-a-rustic-wooden-background-selective-focus.jpg?s=612x612&w=0&k=20&c=pmbt_E5q7ypPNAjbTVKFD1_RBG7xyxO2sWT2TaM6AGE=",
      dish_price: 10,
      type: "Veg",
      // rating: 4.8,
      dish_description: "The epitome of indian bread",
    },
    {
      dish_name: "Butter Naan",
      category: categories[3],
      image_url:
        "https://media.istockphoto.com/id/1292638493/photo/butter-naan-isolated-over-a-rustic-wooden-background-selective-focus.jpg?s=612x612&w=0&k=20&c=weTxYo0XeF80qzG4hJ0Lf6ZUbuZ9yT2pEdOxVaRUQCA=",
      dish_price: 20,
      type: "Veg",
      // rating: 4.8,
      dish_description: "A flat bread made out of leavened dough",
    },
  ],
  users: [
    {
      phone_no: "1010101010",
      customer_name: "John Doe",
      email: "john@example.com",
      password: "hello",
    },
  ],
};

module.exports = data;
