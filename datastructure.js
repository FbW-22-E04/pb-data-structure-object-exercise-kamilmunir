/*Create an object to hold information on your favorite recipe.
 It should have properties for title (a string), servings (a number), 
 and ingredients (an array of strings).

    On separate lines (one console.log statement for each),
     log the recipe information so it looks like:

    Mole
    Serves: 2
    Ingredients:
    cinnamon
    cumin
    cocoa
    */

const receipe = {
    name: 'omlet',
    Price: 'free of cost',
   
    ingredients: {
        eggs: 4,       
            oil: '250g',
            salt: '1/2sp',
            redchilli: '1/2sp',
            onion: '500g'
        },
        receipie2: {
            name:'Butter Chicken',
            cost:'Free of cost',

              ingredients:{chicken: '2kg',      
                Butter: '250g',
                salt: '1/2sp',
                redchilli: '1/2sp',
                onion: '500g',
                garlic:'350g'}
            }
            }
const objc=Object.keys(receipe)
console.log(objc)

for(let items in objc){
    console.log(objc[items]);
}
receipe.print=function(){
    return (this.name+"  "+this.Price+"  "+this.ingredients.eggs)
}
const h=receipe.print()
console.log(h)
console.log('********************')

const books={ books:{Aurthor:'john',bookname:'journey',pages:200,price:520,status:''},
cooking:{Aurthor:'Mark',receipes:'BBQ',price:500,pages:1000,nos:123,status:'read'},
computer:{Aurthor:'Gates',receipes:'os',price:500,pages:1000,nos:123,status:''}}

const bokksarr=Object.entries(books)
var booksobj= books;
function fbooks(json){
    for(index in json){
        var obj=json[index];
        //console.log(index+" : "+ obj.status)

        if(obj.status==='read'){
           // console.log(index+" : "+ obj.status)
           0
        }else{
            obj.status='yet to read'
        }
        console.log(index+" : "+ obj.status)
    }
}

fbooks(booksobj)