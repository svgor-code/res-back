export class CreateDishDto {
  name: string;
  image: string;
  description: string;
  foodType: DishFoodTypeEnum;
  price: number;
  weight: number;
  madeFor: MadeFor;
}

enum MadeFor {
  BREAKFAST,
  LUNCH,
  DINNER,
}

enum DishFoodTypeEnum {
  VEGETARIAN,
  NON_VEGETARIAN,
}
