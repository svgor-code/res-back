export interface IDish {
  name: string;
  image: string;
  description: string;
  foodType: DishFoodTypeEnum;
  price: number;
  weight: number;
  madeFor: MadeFor;
}

type MadeFor = {
  isForBreakfast: boolean;
  isForLunch: boolean;
  isForDinner: boolean;
};

enum DishFoodTypeEnum {
  VEGETARIAN,
  NON_VEGETARIAN,
}
