import { Component, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  //This is to set up custom property binding on your own events,exposing your own properties to the components where you
  //implement these components through the selector
  @Input() singleRecipe: Recipe;

  //TODO add constructor and ngOnInit and implement and import
  constructor(private recipeService: RecipeService) {}
  onSelected() {
    this.recipeService.recipeSelected.emit(this.singleRecipe);
  }
}
