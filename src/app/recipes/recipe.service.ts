import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
@Injectable({ providedIn: 'root' })
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  //array is made private to restrict accessibility from outside
  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Pad Thai Recipe',
  //     'This is simply a test',
  //     'https://www.tasteofhome.com/wp-content/uploads/2020/01/Easy-Pad-Thai_EXPS_FT20_249632_F_0109_1.jpg',
  //     [new Ingredient('peanuts', 10), new Ingredient('moyashi', 1)]
  //   ),
  //   new Recipe(
  //     'Brooklyn Yankee Tomato Pie Recipe',
  //     'This is simply B test',
  //     'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2022_31/1895935/220804-recipe2x1-sj-119.jpg',
  //     [new Ingredient('pie sheet', 1)]
  //   ),
  // ];
  private recipes: Recipe[] = [];

  constructor(private slService: ShoppingListService) {}
  //getter method to get access to array from outside
  getRecipes() {
    //The slice() method is a copying method.
    //It does not alter this but instead returns a shallow copy that contains some
    //of the same elements as the ones from the original array.
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
}
