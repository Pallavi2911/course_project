import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipeWhichWeSelect: Recipe;
  id: number;

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipeWhichWeSelect = this.recipeService.getRecipe(this.id);
    });
  }

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(
      this.recipeWhichWeSelect.ingredients
    );
  }
}
