 const categories = ["Groceries", "Utilities", "Entertainment"] as const;


 export default categories;

 ///created seperate file for data component as it was causing error because
 //as expense form was accessing categories from the app component  before it was 
 //initialized