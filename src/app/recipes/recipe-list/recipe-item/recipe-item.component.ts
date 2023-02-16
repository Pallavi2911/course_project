import { Component, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  //This is to set up custom property binding on your own events,exposing your own properties to the components where you
  //implement these components through the selector
  @Input() singleRecipe: Recipe;
}
