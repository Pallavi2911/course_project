import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  ngOnInit() {}

  constructor(private recipeService: RecipeService) {}
  @Input() recipeWhichWeSelect: Recipe;

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(
      this.recipeWhichWeSelect.ingredients
    );
  }
}
