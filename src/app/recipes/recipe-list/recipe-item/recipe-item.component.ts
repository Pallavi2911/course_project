import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  //to emit the event
  //@Output so that parent component - recipeList will be able to listen to it
  @Output() recipeSelected = new EventEmitter<void>();

  //TODO add constructor and ngOnInit and implement and import

  onSelected() {
    this.recipeSelected.emit();
  }
}
