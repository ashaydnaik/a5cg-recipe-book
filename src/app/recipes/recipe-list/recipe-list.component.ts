import {Component, OnInit} from "@angular/core";
import {Recipe} from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Masala Dosa", "Indian pancake with potato stuffing", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2A7RBZa5KGUthLrCFU_xq9qZHasilV6k6nQKESpthFkzF_KyUEA"),
    new Recipe("Samosa", "Indian pastry", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfKrbh5UfMKQ3-T1WD-RNlx90Ea_aGwvq1pOREswHxJIgrQ6x35w")
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
