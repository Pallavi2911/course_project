import { Component } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService],
})
export class RecipesComponent {
  //to store the selected recipe
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  //listener on the recipe selected,subscribe to it to get informed about the changes
  //in the ES6 arrow function is the argument list(recipe: Recipe) and function body {this.selectedRecipe = recipe;}
  ngOnInit() {
    this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
    });
  }
}
