const menusData = {
  "gourmet-italien": {
    title: "Menu Gourmet Italien",
    description: "Un voyage culinaire inspiré des saveurs authentiques d’Italie.",
    sections: {
      entree: {
        name: "Bruschetta Classica",
        image: "/images/bruschetta.jpg",
        desc: "Pain grillé garni de tomates fraîches, basilic et huile d’olive.",
        details: {
          ingredients: "Tomates, basilic, huile d'olive, ail, pain",
          allergens: "Gluten"
        }
      },
      plat: {
        name: "Pâtes Carbonara",
        image: "/images/carbonara.jpg",
        desc: "Recette traditionnelle avec guanciale, pecorino et poivre noir.",
        details: {
          ingredients: "Pâtes, guanciale, fromage pecorino, oeufs, poivre",
          allergens: "Gluten, oeufs, lactose"
        }
      },
      dessert: {
        name: "Tiramisu Maison",
        image: "/images/tiramisu.jpg",
        desc: "Un dessert onctueux au café et cacao.",
        details: {
          ingredients: "Mascarpone, café, cacao, sucre, oeufs, biscuits",
          allergens: "Gluten, oeufs, lactose"
        }
      },
      accompagnement: {
        name: "Focaccia",
        image: "/images/focaccia.jpg",
        desc: "Focaccia parfumée aux herbes et huile d'olive.",
        details: {
          ingredients: "Farine, huile d'olive, sel, romarin",
          allergens: "Gluten"
        }
      }
    }
  },

  // Tu pourras ajouter d'autres menus ici :
  // "brunch-du-soleil": { ... },
  // "fusion-asiatique": { ... },
  // etc.
}

export default menusData;
